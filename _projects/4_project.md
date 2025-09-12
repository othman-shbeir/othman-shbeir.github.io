---
layout: page
title: AI-Driven Student Success Forecaster
description: Hackathon project (Udacity Palestine Launchpad). Predicts student outcomes and flags at-risk students with an explainable ML pipeline and a Flask web app.
img: /assets/img/projects/student-forecaster.jpg
importance: 1
category: Data Science
related_publications: false
---

### **Overview.**

Built during the **Udacity Palestine Launchpad Hackathon**, our team delivered an AI web app that forecasts student performance and surfaces early-warning insights for educators. We placed **6th overall** with one of the **highest accuracies on the Kaggle leaderboard** used for judging. The app is deployable and accessible via a simple browser UI.

### **Key features**

- **End-to-end pipeline:** data cleaning, feature engineering, train/validation split, and model selection with cross-validation.
- **Explainability:** feature importance and per-prediction rationale to support interventions.
- **Web app:** lightweight **Flask** interface for single-student form inputs and batch CSV scoring.
- **Production artifacts:** serialized model and preprocessing pipeline for reproducible results.
- **Team delivery:** clear repo structure, demo screenshots, and setup instructions for evaluators.

### **Tech stack**

Python, **Pandas**, **NumPy**, **scikit-learn**, **Flask**, Jupyter, joblib, Matplotlib

### **Architecture (simplified)**

1. **Ingest & clean:** validate ranges, impute missing values, encode categoricals, scale numerics.
2. **Modeling:** try several scikit-learn baselines; pick the best via **cross-validation** (RMSE/MAE/Accuracy depending on task).
3. **Export:** persist the fitted model + preprocessing with **joblib**.
4. **Serve:** Flask app loads artifacts at startup and exposes **predict** endpoints plus a browser form.
5. **Evaluate:** track leaderboard score (Kaggle) and compare iterations to improve generalization.

### **Dataset**

Tabular **student performance** data provided for the hackathon (features such as demographics/attendance/engagement where available). The code expects a CSV schema matching the training set and validates inputs before scoring.

### **Links**

- **Code repository:** [Students_grade_forcasting (GitHub)](https://github.com/othman-shbeir/Students_grade_forcasting/tree/master)
- **Live demo:** [Student Success Forecaster Web App](https://oshbeir.pythonanywhere.com/)
- **Udacity:** [Udacity](https://www.udacity.com/) · **Kaggle:** [Kaggle](https://www.kaggle.com/)
