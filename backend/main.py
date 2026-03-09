from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import httpx
import os
import json
import re
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime

app = FastAPI(title="Veritas API")

# CORS - allow your GitHub Pages frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://occamhickam.github.io",
        "http://localhost:8000",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ═══════════════════════════════════════════════════════════════
# IN-MEMORY SESSION STORE
# Railway restarts clear this — swap for a DB later when needed
# ═══════════════════════════════════════════════════════════════
session_store: List[dict] = []
MAX_SESSIONS = 200  # cap memory usage

class QuestionRequest(BaseModel):
    question: str
    context: str = ""

class SessionSave(BaseModel):
    duration_seconds: int
    dispute_count: int
    top_keywords: List[str]
    disputes: List[dict] = []   # [{topic, trigger_text, timestamp}]
    ended_at: Optional[str] = None

# ═══════════════════════════════════════════════════════════════
# SAVE SESSION
# ═══════════════════════════════════════════════════════════════
@app.post("/api/sessions")
async def save_session(session: SessionSave):
    entry = session.dict()
    entry["id"] = f"session_{datetime.utcnow().strftime('%Y%m%d%H%M%S%f')}"
    entry["saved_at"] = datetime.utcnow().isoformat()
    if not entry.get("ended_at"):
        entry["ended_at"] = entry["saved_at"]

    session_store.append(entry)

    # Keep memory bounded
    if len(session_store) > MAX_SESSIONS:
        session_store.pop(0)

    return {"ok": True, "id": entry["id"]}

# ═══════════════════════════════════════════════════════════════
# GET ALL SESSIONS — for analysis.html
# ═══════════════════════════════════════════════════════════════
@app.get("/api/sessions")
async def get_sessions():
    return {"sessions": list(reversed(session_store))}  # newest first

# ═══════════════════════════════════════════════════════════════
# EXISTING RULES ENDPOINT — unchanged
# ═══════════════════════════════════════════════════════════════
@app.post("/api/rules")
async def get_rules(request: QuestionRequest):
    try:
        cards = await search_scryfall(request.question)
        if cards:
            card = cards[0]
            ruling = await get_card_rulings(card.get("rulings_uri", ""))
            return {
                "title": card.get("name", "Unknown Card"),
                "rule": card.get("oracle_text", "No rule text available"),
                "reference": f"Scryfall: {card.get('set_name', 'Unknown Set')}",
                "explanation": f"This card has {len(ruling)} official rulings.",
                "action": "Check the official ruling below or ask a judge for complex interactions.",
                "rulings": ruling[:3],
                "scryfall_uri": card.get("scryfall_uri", "")
            }
        return {
            "title": "General Rules Question",
            "rule": "The Comprehensive Rules cover this interaction.",
            "reference": "CR - Comprehensive Rules",
            "explanation": "I couldn't find a specific card. Try mentioning the card name clearly.",
            "action": "Ask about a specific card or consult the Comprehensive Rules.",
            "rulings": [],
            "scryfall_uri": None
        }
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

async def search_scryfall(query: str):
    try:
        clean_query = re.sub(r'(?i)(how does|what is|can i|do|does|the|a|an|work|with|target)\s+', ' ', query)
        clean_query = clean_query.strip()[:50]
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.get(
                "https://api.scryfall.com/cards/search",
                params={"q": clean_query, "unique": "cards", "order": "relevance"}
            )
            if response.status_code == 200:
                data = response.json()
                return data.get("data", [])[:1]
            return []
    except Exception as e:
        print(f"Scryfall error: {e}")
        return []

async def get_card_rulings(rulings_uri: str):
    if not rulings_uri:
        return []
    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            response = await client.get(rulings_uri)
            if response.status_code == 200:
                data = response.json()
                return [r["comment"] for r in data.get("data", [])]
            return []
    except Exception as e:
        print(f"Rulings error: {e}")
        return []

@app.get("/health")
async def health():
    return {"status": "ok", "service": "Veritas API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
