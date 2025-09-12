---
layout: page
title: Movies Hybrid Recommendation System
description: Content + CF hybrid with IMDb-weighted rating and a recency boost, tested on larger MovieLens metadata.
img: /assets/img/projects/recsys.jpg
importance: 1
category: AI
related_publications: false
---

### **Overview.**

A two-part project that builds a movie recommender from the ground up.

- **Part 1**: crafts a solid **content-based** system on TMDB (genres, keywords, cast/crew, overview) using TF-IDF/CountVectorizer and **cosine similarity**.
- **Part 2** upgrades to an **improved hybrid**: blends **Surprise SVD** (collaborative filtering) with **IMDb-style weighted rating** and a light **recency boost**, then validates on the larger **MovieLens** metadata.

### **Key features**

- **Content similarity:** create a unified “movie soup” (genres, keywords, cast, crew, overview) → TF-IDF / CountVectorizer → cosine similarity for fast top-N retrieval.
- **Personalization (CF):** user-aware scoring with **SVD** (from [scikit-surprise](https://surpriselib.com/)) using historical ratings.
- **Popularity prior:** IMDb-style **weighted rating** (WR) to avoid small-vote bias (uses corpus mean `C` and 65th-percentile `m`).
- **Recency boost:** scale release year to `[0,1]` and blend with a tunable `recency_weight` (e.g., `0.2`) to gently favor newer titles.
- **Cold-start handling:** for brand-new users, fall back to **content + popularity**; for known users, blend in SVD predictions (weight increases with user activity).
- **Explainability:** expose partial scores (similarity, popularity, recency, SVD) to show “why this recommendation”.

### **Tech stack**

Python, **Pandas**, **NumPy**, **scikit-learn** ([TF-IDF](https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction), [cosine similarity](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.cosine_similarity.html)), **scikit-surprise** ([SVD](https://surpriselib.com/)), Matplotlib

### **Architecture (simplified)**

1. **Preprocess content** (TMDB): clean text; build a **soup** from genres/keywords/cast/crew/overview; vectorize with **TF-IDF / CountVectorizer**.
2. **Compute similarity**: precompute **cosine similarity** matrix for fast lookups.
3. **Get candidates**: for a seed title, fetch top-K similar movies (exclude itself).
4. **Score candidates** with:
   - **IMDb weighted rating** (mean `C`, vote threshold `m` at ~65th percentile).
   - **Similarity score** (from cosine).
   - **Recency score** (scaled release year).
   - **SVD prediction** (if user is known; else skip).
5. **Hybrid blend**: `final_score = α·similarity + β·weighted_rating + γ·recency + δ·svd_pred`  
   (typical starting point: `α=0.55–0.65`, `β≈0.20`, `γ≈0.10–0.20`, `δ` grows with user history).
6. **Return Top-N** with brief “why” signals (e.g., “similar to _Inception_; strong votes; recent”).

### **Datasets**

- **TMDB 5000 Movies & Credits** (Part 1): titles, overviews, genres, keywords, cast/crew.  
  Sources: [TMDB](https://www.themoviedb.org/) · Kaggle mirrors (e.g., _tmdb_5000_movies.csv_, _tmdb_5000_credits.csv_).
- **MovieLens (latest / 25M metadata)** (Part 2): ratings + rich metadata; uses **`links.csv`** to map **TMDb** IDs ↔ **MovieLens** IDs.  
  Source: [GroupLens MovieLens](https://grouplens.org/datasets/movielens/).

### **Project parts**

- **Part 1 — Content-Based on TMDB:**  
  Build the “soup,” compute cosine similarity, and rank similar titles.  
  _Notebook:_ [TMDB_RecommenderSystem.ipynb](/assets/notebooks/TMDB_RecommenderSystem.ipynb)  
  _Docs:_ [TF-IDF](https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction) · [Cosine similarity](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.cosine_similarity.html) · [TMDB](https://www.themoviedb.org/)
- **Part 2 — Improved Hybrid on MovieLens:**  
  Add **IMDb-weighted rating**, **recency boost**, and **Surprise SVD**; handle cold-start and blend scores into a final rank; validate on a larger corpus.  
  _Notebook:_ [Testing_The_Improved_Hybrid_Recoomendation_System.ipynb](/assets/notebooks/Testing_The_Improved_Hybrid_Recoomendation_System.ipynb)  
  _Docs:_ [scikit-surprise SVD](https://surpriselib.com/) · [MovieLens dataset](https://grouplens.org/datasets/movielens/)

### **Links**

- **Datasets:** [TMDB](https://www.themoviedb.org/) · [MovieLens](https://grouplens.org/datasets/movielens/)
- **Libraries:** [scikit-learn](https://scikit-learn.org/stable/) · [scikit-surprise](https://surpriselib.com/)
- **Notebooks:** [Part 1](/assets/notebooks/TMDB_RecommenderSystem.ipynb) · [Part 2](/assets/notebooks/Testing_The_Improved_Hybrid_Recoomendation_System.ipynb)
