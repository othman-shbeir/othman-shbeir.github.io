---

layout: page
title: HarmOni
description: An all-in-one solution for synchronized viewing, local media management, and hybrid recommendations.
img: /assets/img/projects/13.jpg
importance: 1
category: HarmOni
related\_publications: false

# Optional: power the gallery & grouped tech stack below

screenshots:
  - { path: /assets/img/projects/HarmOni/01.jpg, caption: "" }
  - { path: /assets/img/projects/HarmOni/02.jpg, caption: "" }
  - { path: /assets/img/projects/HarmOni/03.jpg, caption: "" }
  - { path: /assets/img/projects/HarmOni/04.jpg, caption: "" }
  - { path: /assets/img/projects/HarmOni/05.jpg, caption: "" }
  - { path: /assets/img/projects/HarmOni/06.jpg, caption: "" }
  - { path: /assets/img/projects/HarmOni/07.jpg, caption: "" }
  - { path: /assets/img/projects/HarmOni/08.jpg, caption: "" }
  - { path: /assets/img/projects/HarmOni/09.jpg, caption: "" }
  - { path: /assets/img/projects/HarmOni/10.jpg, caption: "" }

**Overview**:

HarmOni is an all-in-one entertainment hub designed for desktop users. It allows you to host perfectly synchronized watch parties, manage a beautifully organized local media library, and discover new titles through a hybrid recommendation engine that learns your unique tastes. With a clean, focused interface and instant search, HarmOni delivers a seamless viewing experience.

**Roles & Responsibilities**:

- **System Architect & Backend Developer**: Designed the overall system architecture and developed the Flask-based backend services.
- **Machine Learning Engineer**: Led the design, training, and evaluation of the hybrid recommendation model.
- **Data Engineer**: Managed the data pipeline, including ingestion, cleaning, and schema normalization for all media metadata.

**Key Features**:

- **Synchronized Viewing**: Real-time session controls (play, pause, seek) ensure seamless watch parties with friends.
- **Smart Library**: Fast, faceted search and detailed metadata for both movies and anime.
- **Personalized Recommendations**: A hybrid engine that blends content similarity, collaborative filtering (SVD), a popularity prior, and a recency boost.
- **Modular Architecture**: An Electron/NestJS desktop shell communicates with a separate Flask recommendation service, enabling clean separation of concerns and rapid development.
- **Recommendation Transparency**: Lightweight signals explain *why* a particular item was recommended, building user trust.

**Tech Stack**:

- **Languages**: TypeScript, Python
- **Desktop & UI**: Electron
- **Backend & APIs**: NestJS, Flask
- **ML & Data Science**: Pandas, scikit-learn, Surprise (SVD)
- **Templating**: Jinja
- **Database**: MongoDB

**Recommendation Methods**:

- **Content-Based Filtering**:
  - **Movies**: Calculated TF-IDF vectors from overviews and taglines to find cosine similarity.
  - **Anime**: Fused weighted features, including synopsis, genres, studios, and source material.
- **Collaborative Filtering**:
  - Employed Singular Value Decomposition (SVD) for a robust balance of accuracy and latency.
- **Popularity Prior**:
  - Implemented an IMDb-style weighted rating to stabilize scores for items with few reviews.
- **Recency Boost**:
  - Applied a gentle, year-based boost to surface newer, relevant titles.
- **Hybrid Engine**:
  - Blended all signals—collaborative, content, popularity, and recency—with dynamic weighting that adapts to user activity.
- **Cold-Start Handling**:
  - Relied on content and popularity signals until enough user interaction data was collected for collaborative filtering.

**Datasets**:

- **Movies**: [TMDB](https://www.themoviedb.org/) metadata joined with [MovieLens](https://grouplens.org/datasets/movielens/) ratings.
- **Anime**: [MyAnimeList](https://myanimelist.net/) datasets from [Kaggle](https://www.kaggle.com/), featuring rich metadata and user scores.

**Evaluation & Performance**:

- **Offline Validation**: Assessed performance using rating-prediction error metrics (e.g., RMSE, MAE) and planned top-N ranking evaluations (e.g., nDCG, MAP).
- **Latency Optimization**: Minimized response times by pre-computing text vectors and item similarities, with on-demand re-ranking of cached candidate sets.

**Architecture**:

1.  The **Electron/NestJS UI** authenticates the user and gathers context.
2.  It calls the **Flask API** with user signals and profile information.
3.  The service blends **SVD**, **content similarity**, a **weighted rating**, and **recency** into a final ranked list.
4.  The UI renders the top N results with brief "why this" explanations.

**Components**:

- **UI**: Electron shell with a NestJS backend-for-frontend.
- **Recommender Service**: Flask application.
- **Storage**: MongoDB for user profiles, interactions, and cached model artifacts.

**Links**:

- **Project Demo**: [https://youtu.be/ZzxAlox9lGQ](https://youtu.be/ZzxAlox9lGQ)
---

<!-- Responsive 10-screenshot gallery -->
<!-- markdownlint-disable MD033 -->
<h3 id="gallery">Screenshots</h3>

<div class="screenshot-grid">
  {% for shot in page.screenshots %}
    <a class="shot" href="{{ shot.path }}" target="_blank" rel="noopener" aria-label="{{ shot.caption }}">
      <img src="{{ shot.path }}" alt="{{ shot.caption }}">
      <span class="caption">{{ shot.caption }}</span>
    </a>
  {% endfor %}
</div>

<style>
.screenshot-grid {
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(12, 1fr);
}
@media (max-width: 1200px) { .screenshot-grid { grid-template-columns: repeat(8, 1fr); } }
@media (max-width: 768px)  { .screenshot-grid { grid-template-columns: repeat(4, 1fr); } }
@media (max-width: 520px)  { .screenshot-grid { grid-template-columns: repeat(2, 1fr); } }

.screenshot-grid .shot {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 14px;
  box-shadow: 0 10px 24px rgba(0,0,0,.12);
  transition: transform .2s ease, box-shadow .2s ease;
}
.screenshot-grid .shot:hover {
  transform: translateY(-2px);
  box-shadow: 0 16px 34px rgba(0,0,0,.18);
}

.screenshot-grid img {
  width: 100%;
  height: 100%;
  display: block;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: transform .35s ease;
}
.screenshot-grid .shot:hover img { transform: scale(1.03); }

.screenshot-grid .caption {
  position: absolute; left: 0; right: 0; bottom: 0;
  padding: 8px 10px;
  font-size: 0.9rem;
  line-height: 1.2;
  color: #fff;
  background: linear-gradient(to top, rgba(0,0,0,.6), rgba(0,0,0,0));
  text-shadow: 0 1px 2px rgba(0,0,0,.5);
}
</style>
