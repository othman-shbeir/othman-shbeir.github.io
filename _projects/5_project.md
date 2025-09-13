---
layout: page
title: US Bikeshare Data Analysis
description: Built for the Udacity–Google Palestine Launchpad Data Science Nanodegree (PDSND). Interactive terminal app for exploring Chicago, NYC, and Washington bikeshare data with flexible time filters and rich stats.
img: /assets/img/projects/bikeshare-cli.jpg
importance: 1
category: Data Science
related_publications: false
---

### **Overview.**

Developed as part of the **Udacity–Google Palestine Launchpad Data Science Nanodegree (PDSND)**, this command-line app analyzes **US bikeshare** data for **Chicago**, **New York City**, and **Washington**. Users choose a city and optional **time filters** (month/day/both/none), then the program prints concise insights: busiest times, popular stations and routes, trip durations, and user demographics—plus an optional raw-rows viewer for quick audits.

### **Key features**

- **Interactive filters:** guided prompts with validation for **city**, **month**, **day**, or **both** (or **none** to view all data).
- **Time stats:** most common **month**, **day of week**, and **start hour** for trips.
- **Station stats:** top **Start Station**, **End Station**, and most frequent **Start → End** route.
- **Trip stats:** **total** and **mean** travel time (human-readable via `convert_seconds()`).
- **User stats:** counts by **User Type** and, when available, **Gender** and **Birth Year** summaries.
- **Raw data viewer:** opt-in batches of **5 rows** using a CSV streaming helper.
- **Extra utility:** `get_most_common_season(city)` infers the busiest **season** from monthly usage.

### **Tech stack**

Python, **Pandas**, **NumPy**, [csv (stdlib)](https://docs.python.org/3/library/csv.html), time module

### **Architecture (simplified)**

1. **Ingest:** load the selected city CSV into a DataFrame; parse `Start Time` to `datetime`.
2. **Feature derivation:** add `month`, `day_of_week`, and `hour` features.
3. **Filtering:** subset the DataFrame by chosen **month** and/or **day**.
4. **Computation:**
   - **Time stats** via `mode()` on `month`, `day_of_week`, and `hour`.
   - **Station stats** including a composed `Start Station + " To " + End Station` route key.
   - **Trip duration** via `sum()` and `mean()`; humanize with `convert_seconds()`.
   - **User stats** via `value_counts()` with defensive checks for optional columns.
5. **Inspection (optional):** stream raw rows in groups of 5 using `DictReader.csv`.

### **Links**

- **Code repository:** [pdsnd_github (GitHub)](https://github.com/othman-shbeir/pdsnd_github)
- **Program:** [Udacity – Data Science Nanodegree](https://www.udacity.com/)
- **Libraries:** [Pandas](https://pandas.pydata.org/) · [NumPy](https://numpy.org/) · [csv](https://docs.python.org/3/library/csv.html)
