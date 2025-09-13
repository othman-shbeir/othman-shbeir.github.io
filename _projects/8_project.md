---
layout: page
title: Netflix Clone
description: A responsive Angular single-page app that emulates a Netflix-style browsing experience with modular components, routing, and a clean service-driven architecture—generated with Angular CLI 15.1.5.
img: /assets/img/projects/netflix-clone-angular.jpg
importance: 1
category: Web Apps
related_publications: false
---

### **Overview.**

A modern **Angular** application scaffolded with **Angular CLI 15.1.5** that replicates a Netflix-like UI: hero banner, horizontal carousels/rows, title cards, and detail views. The codebase is organized around reusable components and a central data service, ready to plug into a movie/TV metadata API (e.g., TMDB) via environment configuration.

### **Key features**

- **Clean UI structure:** app shell with header/nav, **hero section**, and multiple horizontal content rows (cards).
- **Routing UX:** route-driven navigation for lists and detail pages (Angular Router).
- **Service-first data flow:** a dedicated service for all HTTP calls; environment-based API base URL/key (drop-in with your provider).
- **Resilience:** loading/empty states and basic error messaging patterns.
- **Responsive layout:** mobile-first cards and grids that scale smoothly from phone to desktop.
- **Extensible:** room for search, favorites/watchlist, and pagination or infinite scroll.

### **Tech stack**

**Angular 15** (Angular CLI), **TypeScript**, **HTML**, **CSS** (repo breakdown ~TS 55%, HTML 39%, CSS 6%).

### **Architecture (simplified)**

1. **Components:** `App` shell + `Header/Nav`, `Hero`, `Row/List`, `Card`, `Details`.
2. **Service layer:** a `MovieService` (HttpClient) centralizes fetching; swap in any provider by changing environment configuration.
3. **Routing:** routes map to home/categories and detail pages; params drive the selected item.
4. **State/UI:** lean RxJS streams for loading/errors; dumb/presentational cards for performance and reuse.
5. **Styling:** utility CSS for grids/rows; card hover/transition effects.

### **Dataset**

The app is **API-agnostic** by default and is intended to consume a third-party **movie/TV REST API** (e.g., TMDB) for titles, images, and metadata. Add your API key to the Angular environment file and point the service to the provider’s endpoints.

### **Links**

- **Code repository:** [netflix-clone-Angular (GitHub)](https://github.com/othman-shbeir/netflix-clone-Angular).
- **Angular CLI:** [Overview & Command Reference](https://angular.io/cli).