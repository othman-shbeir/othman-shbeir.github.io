---
layout: page
title: HarmOni
description: All-in-one synchronized viewing, local media library, and hybrid recommendations.
img: /assets/img/projects/13.jpg
importance: 1
category: AI
related_publications: false
---

### **Overview.**

HarmOni is a desktop application that brings friends together to watch in sync, organizes a rich local media library, and personalizes discovery using a hybrid recommendation engine—designed for smooth playback, clean UX, and fast, relevant results.

### **Key features**

- **Watch-together:** real-time session control (play/pause/seek) with seamless synchronization.
- **Smart library:** fast search, faceted filters, and detailed metadata for movies and anime.
- **Personalization:** hybrid ranking that blends content similarity, collaborative filtering (SVD), a popularity prior (IMDb-style weighted rating), and a gentle recency boost.
- **Modular design:** Electron/NestJS desktop shell communicating with a Flask recommendation service for clean separation and easy iteration.

### **Tech stack**

Electron, NestJS, TypeScript, Python, Flask, Pandas, scikit-learn, Surprise (SVD), Jinja, **MongoDB**

### **Architecture (simplified)**

1. The Electron/NestJS UI authenticates the user and gathers context.
2. It calls the Flask API endpoint with user/profile signals.
3. The service combines **CF (SVD)** + **content similarity** + **IMDb-style weighted rating** + **recency** into a final ranked list (with cold-start handled via content/popularity).
4. The UI receives top-N items plus brief “why this” signals to improve transparency.

### **Datasets**

- **Movies:** [TMDB](https://www.themoviedb.org/) (titles/credits/metadata) joined with MovieLens ratings.
- **Anime:** [MyAnimeList](https://myanimelist.net/) datasets on [Kaggle](https://www.kaggle.com/) with rich metadata and user scores.

### **Links**

- [Project Demo.](https://youtu.be/ZzxAlox9lGQ)
