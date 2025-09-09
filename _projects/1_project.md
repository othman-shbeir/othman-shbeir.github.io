---
layout: page
title: HarmOni - All-In-One Entertainment Hub
description: Desktop platform that unifies synchronized watch parties, a rich local media library, and a hybrid recommender for movies & anime. NestJS/Electron frontend with a Flask-based recommendation service.
img: assets/img/13.jpg
importance: 1
category: HarmOni
related_publications: true
redirect: https://youtu.be/ZzxAlox9lGQ
---

**What it is.** HarmOni is a desktop app that lets friends watch in sync, organizes a local media library with detailed metadata, and personalizes discovery via a hybrid recommendation engine.


**Highlights**
- Watch‑together sessions with pause/seek sync and session controls.
- Local library with search, filters, and rich metadata.
- Personalization via hybrid ranking (content + CF + popularity + recency).
- Modular architecture: NestJS/Electron UI ↔ Flask recommender API.


**Stack**
Electron, NestJS, TypeScript, Python, Flask, Pandas, scikit‑learn, Surprise (SVD), Jinja, Mongo DB


**Architecture (simplified)**
1) UI (Electron/NestJS) authenticates & collects context
2) Requests `/recommend` from Flask service
3) Service blends CF (SVD) + content similarity + IMDb‑style weighted rating + recency
4) Returns ranked items + lightweight “why this” explanation


**Data Sources**
- Movies: TMDB + MovieLens ratings
- Anime: MAL/Kaggle datasets (metadata + user scores)


**Screenshots**
{% include figure.liquid path="assets/img/projects/13.jpg" title="Session controls & synced playback" class="img-fluid rounded z-depth-1" %}
{% include figure.liquid path="assets/img/projects/13.jpg" title="Personalized home feed" class="img-fluid rounded z-depth-1" %}