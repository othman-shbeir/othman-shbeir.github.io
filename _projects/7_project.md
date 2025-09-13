---
layout: page
title: News Website (Angular 15)
description: A responsive Angular single-page app that aggregates live headlines and topic feeds from a configurable news API—generated with Angular CLI 15.1.5.
img: /assets/img/projects/news-site.jpg
importance: 1
category: Web Apps
related_publications: false
---

### **Overview.**

A modern **Angular** news reader that fetches and displays **top headlines**, **category/topic feeds**, and **search results** from a configurable **news API**. The project was scaffolded with **Angular CLI 15.1.5**, follows a clean service-driven architecture, and includes lightweight routing, loading states, and error handling.

### **Key features**

- **Live feeds:** fetch and render top headlines and topic pages through a centralized HTTP service.
- **Search:** query recent stories by keyword.
- **Routing UX:** list → details navigation with Angular Router.
- **Resilience:** basic retry/error messaging and empty-state UI.
- **Responsive layout:** mobile-first cards and grids that scale smoothly.

### **Tech stack**

**Angular 15** (Angular CLI), **TypeScript**, **RxJS**, **HTML**, **CSS**

### **Architecture (simplified)**

1. **NewsService (HttpClient):** centralizes API calls (headlines, categories, search).
2. **Components:** `Home` (top headlines), `CategoryList`, `SearchResults`, reusable `ArticleCard`, `ArticleDetail`.
3. **Routing:** route params drive category and search views.
4. **Config:** API base URL/key stored in Angular **environment** files; optional interceptor for auth header.
5. **State/UI:** lean RxJS streams for loading/error; reusable card/list templates.

### **Dataset**

The app consumes a third-party **news REST API** (API key required). Any compatible provider can be used (e.g., **NewsAPI.org**) to retrieve JSON articles, sources, and headline endpoints.

### **Links**

- **Code repository:** [News-Website (GitHub)](https://github.com/othman-shbeir/News-Website)
- **Angular CLI:** [CLI Overview & Command Reference](https://angular.io/cli)
- **Example provider:** [NewsAPI.org](https://newsapi.org/)
