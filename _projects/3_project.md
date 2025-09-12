---
layout: page
title: Anime Hybrid Recommendation System
description: Content + collaborative filtering on MyAnimeList (2023) data with TF-IDF cosine similarity and Surprise SVD/NMF/KNN—tuned via cross-validation and grid search.
img: /assets/img/projects/anime-recsys.jpg
importance: 1
category: AI
related_publications: false
---

### **Overview.**

A two-part **Anime recommendation system** built on **MyAnimeList (MAL)** data.

- **Part 1** assembles a strong **content-based** engine using genres, studios, type, source, episodes, rating class, and synopsis text (TF-IDF + **cosine similarity**).
- **Part 2** adds **collaborative filtering** with **Surprise** models (**SVD**, **NMF**, **KNNBasic**), evaluates via **cross-validation** (RMSE/MAE), performs **GridSearchCV** hyperparameter tuning, and persists the best model.

### **Key features**

- **Content similarity:** Build a feature “soup” from **genres**, **studios**, **type**, **source**, **episodes**, **rating** (e.g., PG-13), and **synopsis** → vectorize with [TF-IDF](https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction) → rank with [cosine similarity](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.cosine_similarity.html).
- **NLP cleanup:** Tokenization/lemmatization using [spaCy](https://spacy.io/) for cleaner synopsis signals.
- **Collaborative filtering:** Train/evaluate [Surprise](https://surpriselib.com/) **SVD**, **NMF**, and **KNNBasic** on user–anime ratings.
- **Model selection & tuning:** Compare **RMSE/MAE** across models via `cross_validate`; refine **SVD** with [GridSearchCV](https://surpriselib.com/#model_selection) and save the best estimator.
- **Hybrid scoring:** Blend content similarity with CF predictions; fall back to content-only for cold-start users.
- **Explainability:** Surface partial scores (similarity vs. CF) so users see _why_ a title is recommended.

### **Tech stack**

Python, **Pandas**, **NumPy**, [scikit-learn](https://scikit-learn.org/stable/) (TF-IDF, preprocessing, cosine), [spaCy](https://spacy.io/), [scikit-surprise](https://surpriselib.com/) (SVD/NMF/KNNBasic, Dataset/Reader, CV & GridSearch), Matplotlib

### **Architecture (simplified)**

1. **Ingest & clean** MAL data; normalize key categorical fields and prepare the **ratings** matrix.
2. **Content pipeline:** build the “soup” → **TF-IDF** → precompute **cosine similarity** for fast nearest-neighbour lookup.
3. **CF pipeline:** load ratings → train **SVD/NMF/KNNBasic** → **cross-validate** → **grid search** SVD → **persist** best model.
4. **Hybrid rank:** for a seed title or known user, combine content score + CF prediction; return Top-N with brief _why-this_ cues.
5. **Cold start:** if no user history, rely on content similarity (optionally mix in MAL mean score as a popularity prior).

### **Datasets**

- **Anime metadata (2023):** fields like `anime_id`, name, **genres**, **studios**, **type**, **source**, **episodes**, **rating**, **score**, \*\*synopsis`.  
  Sources: [MyAnimeList](https://myanimelist.net/) · [Kaggle (Anime datasets)](https://www.kaggle.com/datasets)
- **User ratings:** `users-score-2023.csv` (MAL user–anime scores) used to train and evaluate the CF models.

### **Project parts**

- **Part 1 — Content-Based Recommender (MAL 2023):**  
  Build the text/metadata “soup,” compute TF-IDF vectors, and use cosine similarity for nearest titles.  
  _Notebook:_ [AnimeRecommender101.ipynb](/assets/notebooks/AnimeRecommender101.ipynb)  
  _Docs:_ [TF-IDF](https://scikit-learn.org/stable/modules/feature_extraction.html#text-feature-extraction) · [Cosine similarity](https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.cosine_similarity.html) · [spaCy](https://spacy.io/)
- **Part 2 — Collaborative + Hybrid (Surprise):**  
  Train **SVD/NMF/KNNBasic**, compare **RMSE/MAE**, run **GridSearchCV** for SVD, persist the best, and blend with content scores for final ranking.  
  _Notebook:_ [Collaborative_Anime_Recommendation_System.ipynb](/assets/notebooks/Collaborative_Anime_Recommendation_System.ipynb)  
  _Docs:_ [scikit-surprise](https://surpriselib.com/) · [Dataset/Reader](https://surpriselib.com/#load_data) · [GridSearchCV](https://surpriselib.com/#model_selection)

### **Links**

- **Datasets:** [MyAnimeList](https://myanimelist.net/) · [Kaggle (Anime datasets)](https://www.kaggle.com/datasets)
- **Libraries:** [scikit-learn](https://scikit-learn.org/stable/) · [spaCy](https://spacy.io/) · [scikit-surprise](https://surpriselib.com/)
- **Notebooks:** [Part 1](/assets/notebooks/AnimeRecommender101.ipynb) · [Part 2](/assets/notebooks/Collaborative_Anime_Recommendation_System.ipynb)
