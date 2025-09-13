---
layout: page
title: Sakila DVD Rental Data Analysis (PostgreSQL)
description: SQL-driven insights into customer behavior, rentals, and store performance on the Sakila/DVD Rental sample DB—completed for Udacity’s Programming for Data Science Nanodegree.
img: /assets/img/projects/sakila.jpg
importance: 1
category: Data Science
related_publications: false
---

### **Overview.**

A focused SQL project exploring the **Sakila / DVD Rental** database to understand **movie-watching patterns**, **payment earnings**, and **store performance**. Deliverables include a set of reproducible queries and a concise visual **report**. Built as part of Udacity’s **Programming for Data Science Nanodegree**.

### **Key features**

- **Targeted questions → queries:** film-category viewing patterns; **family movies** split into **rental-duration quartiles**; category counts by duration bucket; store throughput & order-fulfillment metrics (see `queries.txt`).
- **Clear outputs:** charts/tables packaged in a compact **PDF report** (`report.pdf`).
- **Portable setup:** uses the widely known **Sakila/DVD Rental** sample schema; easy to load on local PostgreSQL.

### **Tech stack**

PostgreSQL, SQL, pgAdmin/psql, basic data visualization (report PDF)

### **Architecture (simplified)**

1. **Load sample DB** (DVD Rental/Sakila) into PostgreSQL.
2. **Execute analysis queries** from `queries.txt` to answer business-style questions.
3. **Export results** and assemble figures into `report.pdf` for stakeholder-friendly insights.

### **Dataset**

The **Sakila / DVD Rental** sample database models a DVD rental store (films, actors, customers, inventory, rentals, payments, stores). Official docs + ERD are available from MySQL; a PostgreSQL “DVD Rental” version and ERD are provided by PostgreSQLTutorial.

### **Links**

- **Code repository:** [Sakila-DVD-Rental-Data-Analysis (GitHub)](https://github.com/othman-shbeir/Sakila-DVD-Rental-Data-Analysis).
- **Queries:** [`queries.txt`](https://github.com/othman-shbeir/Sakila-DVD-Rental-Data-Analysis/blob/master/queries.txt).
- **Report:** [`report.pdf`](https://github.com/othman-shbeir/Sakila-DVD-Rental-Data-Analysis/blob/master/report.pdf)
- **Sample DB (PostgreSQL):** [DVD Rental – PostgreSQLTutorial](https://neon.com/postgresql/postgresql-getting-started/postgresql-sample-database).
- **Schema reference (MySQL Sakila):** [Sakila docs](https://dev.mysql.com/doc/sakila/en/).
