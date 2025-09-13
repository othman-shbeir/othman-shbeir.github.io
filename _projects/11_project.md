---
layout: page
title: Linear Regression (AI Course with Dr. Rowanda Ahmed)
description: From-scratch and scikit-learn linear regression in a clear, didactic notebook—cost functions, gradient descent intuition, model fit, and basic evaluation.
img: /assets/img/projects/linear-regression.jpg
importance: 1
category: AI
related_publications: false
---

### **Overview.**

A focused educational notebook that implements **Linear Regression** step-by-step—building intuition for the **cost function (MSE)** and **gradient descent**, then comparing with a concise **scikit-learn** baseline. Produced within the _AI Course with Dr. Rowanda Ahmed_ materials.

### **Key features**

- **From-scratch implementation:** gradient descent updates on a mean-squared-error objective; visualize loss vs. iterations to understand convergence. The course section explicitly includes “examples and code implementations from scratch.”
- **scikit-learn baseline:** quick fit/predict with `LinearRegression` for validation and comparison.
- **Feature preparation:** simple normalization/standardization and a clean split of features/target.
- **Diagnostics:** basic metrics (**MSE/RMSE/R²**) and residual plots to assess fit and bias/variance patterns.

### **Tech stack**

Python, **NumPy**, **Pandas**, **Matplotlib**, **scikit-learn**  
(The repository prerequisites list NumPy, Pandas, and Matplotlib for the course notebooks.)

### **Architecture (simplified)**

1. **Load & prep data:** select features/target; optional scaling for stable optimization.
2. **Model (from scratch):** implement linear hypothesis, vectorized gradients, and **gradient descent**; plot cost curve.
3. **Model (library):** fit a **scikit-learn** `LinearRegression` and compare weights/predictions.
4. **Evaluate:** compute **MSE/RMSE/R²**; inspect **residuals** to spot systematic errors.

### **Dataset**

Uses compact **tabular examples** (synthetic or small CSV) suitable for teaching linear relationships and verifying optimization behavior—kept intentionally simple for clarity in an instructional setting. (Notebook lives under **Linear and Logistic Regression** in the course repo.)

### **Links**

- **Notebook:** [LinearRegression.ipynb (GitHub)](https://github.com/othman-shbeir/AI_Course_with_DrRowandaAhmed/blob/master/Linear%20And%20Logistic%20Regression/LinearRegression.ipynb)
- **Repository root:** [AI_Course_with_DrRowandaAhmed](https://github.com/othman-shbeir/AI_Course_with_DrRowandaAhmed)
