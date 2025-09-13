---
layout: page
title: MNIST CNN Classifier (99.5%+)
description: Compact Keras/TensorFlow convolutional network for handwritten digit recognition—reaching ~99.5% test accuracy on MNIST with a clean training/evaluation pipeline.
img: /assets/img/projects/mnist-cnn.jpg
importance: 1
category: AI
related_publications: false
---

### **Overview.**

A concise **convolutional neural network (CNN)** trained on **MNIST** to classify handwritten digits with ~**99.5%** test accuracy. The notebook walks through data prep, model design, training schedule, evaluation (confusion matrix & per-class metrics), and single-image inference. It’s written to be readable and easily reusable for other small grayscale datasets.

### **Key features**

- **Compact CNN:** sequential **Conv → Conv → MaxPool → Dropout** blocks, then **Flatten → Dense → Dropout → Softmax** for 10 classes.
- **Solid training loop:** `Adam` optimizer, `sparse_categorical_crossentropy`, early stopping & (optional) LR scheduling.
- **Clean preprocessing:** normalization to `[0,1]`, reshape to `(28, 28, 1)`, and batched loaders.
- **Evaluation toolkit:** accuracy on hold-out set, **confusion matrix**, and quick per-class precision/recall view.
- **Export & inference:** save the trained model and predict from a single image or a small batch.

### **Tech stack**

Python, **TensorFlow/Keras**, NumPy, Matplotlib/Seaborn (visuals), scikit-learn (metrics), Kaggle Notebook

### **Architecture (simplified)**

1. **Load & prep:** fetch MNIST, normalize pixels, reshape to `(H, W, C)=(28,28,1)`.
2. **Model:**  
   `Conv2D(32, 3) + ReLU → Conv2D(64, 3) + ReLU → MaxPool(2) + Dropout`  
   `Flatten → Dense(128) + ReLU → Dropout → Dense(10, Softmax)`
3. **Train:** `Adam` with early stopping; monitor validation accuracy/loss.
4. **Evaluate:** compute test accuracy (~99.5%), plot **confusion matrix**, inspect mistakes.
5. **Serve:** persist model; provide a helper to preprocess & classify external 28×28 images.

### **Dataset**

**MNIST**: 60,000 training and 10,000 test images of handwritten digits (28×28 grayscale, 10 classes). It’s a classic benchmark for quick prototyping and model comparison.

### **Links**

- **Kaggle notebook:** [MNIST CNN Classifier — 99.5% Accuracy](https://www.kaggle.com/code/othmanshbeir/mnist-cnn-classifier-99-5-accuracy)
