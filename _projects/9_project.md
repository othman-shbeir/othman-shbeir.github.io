---
layout: page
title: Personal Expenses API (Node.js + MongoDB)
description: Secure REST API for tracking expenses, incomes, and monthly insights—JWT auth, input validation, and a clean controller/route structure.
img: /assets/img/projects/personal-expenses-api.jpg
importance: 1
category: Backend APIs
related_publications: false
---

### **Overview.**

A production-style **Node.js/Express** backend to manage **personal finances**: record expenses and incomes, fetch monthly breakdowns, and generate quick budgeting statistics. The project includes **JWT authentication**, request **validation**, and a ready-to-import **Postman collection** for fast testing.

### **Key features**

- **Expense management:** add, update, and retrieve expenses by **category**; list **current month** with pagination.
- **Income tracking:** record/update monthly income for balance calculations.
- **Analytics:** monthly totals & remaining income, **average daily expense**, and **category statistics**.
- **Authentication:** **JWT**-protected endpoints with signup/login flows.
- **API testing:** Postman collection included for one-click testing.

### **Tech stack**

Node.js, Express, MongoDB, JWT, Joi (validation), Postman

### **Architecture (simplified)**

1. **HTTP layer:** Express app registers routes for `/auth`, `/expense`, `/income`; shared middlewares for **auth** and **validation**.
2. **Controllers & models:** controllers orchestrate MongoDB operations through models per resource.
3. **Validation:** **Joi** schemas sanitize and validate payloads before hitting controllers.
4. **Responses:** a small helper standardizes JSON success/error shapes for clients.

### **Dataset**

The API persists data in **MongoDB** collections for typical PFM use cases:

- `users` (credentials & JWT issuance),
- `expenses` (amount, category, note, createdAt),
- `incomes` (amount, month).  
  Indexes on **date** and **category** are recommended for faster monthly and breakdown queries.

### **Links**

- **Code repository:** [personal-expenses-api (GitHub)](https://github.com/othman-shbeir/personal-expenses-api).
- **Postman collection:** [`Personal Expenses Managment.postman_collection.json`](https://github.com/othman-shbeir/personal-expenses-api/blob/master/Personal%20Expenses%20Managment.postman_collection.json).
