---

layout: page
title: HarmOni
description: All-in-one synchronized viewing, local media library, and hybrid recommendations.
img: /assets/img/projects/13.jpg
importance: 1
category: HarmOni
related\_publications: false

# Optional: power the gallery & grouped tech stack below

screenshots:

* { path: /assets/img/projects/HarmOni/01.jpg, caption: "" }
* { path: /assets/img/projects/HarmOni/02.jpg, caption: "" }
* { path: /assets/img/projects/HarmOni/03.jpg, caption: "" }
* { path: /assets/img/projects/HarmOni/04.jpg, caption: "" }
* { path: /assets/img/projects/HarmOni/05.jpg, caption: "" }
* { path: /assets/img/projects/HarmOni/06.jpg, caption: "" }
* { path: /assets/img/projects/HarmOni/07.jpg, caption: "" }
* { path: /assets/img/projects/HarmOni/08.jpg, caption: "" }
* { path: /assets/img/projects/HarmOni/09.jpg, caption: "" }
* { path: /assets/img/projects/HarmOni/10.jpg, caption: "" }
--------------------

**Overview**: 

Meet HarmOni—your all-in-one entertainment hub. Host perfectly synced watch parties with friends, keep your local library beautifully organized, and discover titles you’ll actually love with a hybrid recommender that learns your taste. Enjoy smooth, low-friction playback, a clean, focused interface, and instant search that gets you from idea to play in seconds. Take control of movie and anime nights on your terms, on your desktop.

**Roles & responsibilities**

* System architect and Back-End developer (Flask).
* ML engineer for model training, hybrid design, and evaluation
* Data engineering: ingestion, cleaning, and schema/metadata normalization

**Key features**

* **Watch-together:** real-time session control (play/pause/seek) with seamless synchronization.
* **Smart library:** fast search, faceted filters, and detailed metadata for movies and anime.
* **Personalization:** hybrid ranking that blends content similarity, collaborative filtering (SVD), a popularity prior (IMDb-style weighted rating), and a gentle recency boost.
* **Modular design:** Electron/NestJS desktop shell communicating with a Flask recommendation service for clean separation and rapid iteration.
* **Transparency:** lightweight “why this” signals to explain each recommendation.

**Tech stack**:
* **Languages:** TypeScript, Python.
* **Desktop & UI:** Electron.
* **Backend / APIs:** NestJS, Flask.
* **ML / Data Science:** Pandas, scikit-learn, Surprise (SVD).
* **Templating:** Jinja.
* **Database:** MongoDB.

**Methods of recommendation (at a glance)**:

* **Content-based**

  * Movies: TF-IDF/Count over overview + tagline, cosine similarity.
  * Anime: feature-weighted fusion across synopsis, genres, type, studios, episodes, source.
* **Collaborative filtering**

  * Matrix factorization via Surprise **SVD** for a robust accuracy/latency trade-off.
* **Popularity prior**

  * IMDb-style weighted rating to stabilize items with few votes.
* **Recency**

  * Gentle year-based boost to surface newer yet relevant titles.
* **Hybrid blending**

  * Weighted mix of CF + content + popularity + recency, increasing CF weight as users become active.
* **Cold-start**

  * Content + popularity + recency until enough interactions accumulate.

**Datasets**:

* **Movies:** [TMDB](https://www.themoviedb.org/) metadata joined with [MovieLens](https://grouplens.org/datasets/movielens/) ratings.
* **Anime:** [MyAnimeList](https://myanimelist.net/) datasets on [Kaggle](https://www.kaggle.com/) with rich metadata and user scores.

**Evaluation & performance**

* Offline validation with rating-error baselines plus planned ranking metrics for top-N quality.
* Latency optimized via precomputed text vectors/cosine similarities and cached CF candidate lists, re-ranked on demand.

**Architecture**

1. The Electron/NestJS UI authenticates the user and gathers context.
2. It calls the Flask API with user/profile signals.
3. The service blends **CF (SVD)** + **content similarity** + **IMDb-style rating** + **recency** into a final ranked list (cold-start handled by content/popularity).
4. The UI renders top-N results and brief “why this” signals.

**Components**

* **UI:** Electron shell + NestJS backend-for-frontend.
* **Recommender service:** Flask app.
* **Storage:** MongoDB for user profiles, interactions, and cached artifacts.


**Links**

* Project demo: [https://youtu.be/ZzxAlox9lGQ](https://youtu.be/ZzxAlox9lGQ).

---

<!-- Responsive 10-screenshot gallery -->

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
