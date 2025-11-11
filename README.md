# 🌐 Othman Shbeir: Personal Portfolio Website

Welcome to the source code of **[Othman Shbeir’s Portfolio](https://othman-shbeir.github.io)**: a professional, modern, and fully responsive academic and research portfolio built with **Jekyll**. The website showcases Othman’s background in **Artificial Intelligence, Data Science, and Computer Vision**, as well as his publications, projects, and blog posts.

---

## 📖 Overview

This repository contains the complete source code and configuration for Othman Shbeir’s personal website. It integrates:

* A dynamic **blog** for sharing insights on AI, machine learning, and computer vision.
* A detailed **CV page** powered by structured YAML/JSON data.
* A visually engaging **projects showcase**.
* Academic features such as **publications, news updates, and citations**.
* Interactive **charts, plots, and notebooks** for research presentation.

---

## 🚀 Features

✅ **Responsive Design**: Optimized for mobile, tablet, and desktop screens.

✅ **Academic Profile Integration**: Publications, projects, and CV data dynamically loaded from YAML/JSON.

✅ **Modern Blog System**: Markdown-based blog posts with pagination, related posts, and analytics support.

✅ **Comments Support**: Integrated with **Giscus** (recommended) and optional Disqus.

✅ **SEO Optimized**: Configurable with Google Search Console and Bing Webmaster verification.

✅ **Built-in Analytics**: Google Analytics, Cronitor, and other performance tracking tools.

✅ **Docker Support**: Deploy locally or on servers via `Dockerfile` and `docker-compose.yml`.

✅ **Extensive Documentation**: Includes installation, customization, and contribution guides.

---

## 🧩 Tech Stack

| Category                  | Technologies                            |
| ------------------------- | --------------------------------------- |
| **Static Site Generator** | [Jekyll](https://jekyllrb.com)          |
| **Styling**               | SASS, SCSS, Tailwind-inspired utilities |
| **Templating**            | Liquid Templates                        |
| **Containerization**      | Docker, Docker Compose                  |
| **Analytics**             | Google Analytics, Cronitor              |
| **Comments**              | Giscus / Disqus                         |
| **Hosting**               | GitHub Pages                            |

---

## 🗂️ Repository Structure

```
├── _config.yml                # Global configuration file
├── _data/                     # YAML data (socials, CV, repositories)
├── _posts/                    # Blog posts in Markdown
├── _projects/                 # Project showcase entries
├── _layouts/                  # Jekyll layout templates
├── _includes/                 # Liquid includes for reusable HTML
├── assets/                    # Static assets (images, CSS, JS, notebooks)
├── _sass/                     # Styling and theme customization
├── _plugins/                  # Ruby plugins and citation helpers
├── docker-compose.yml         # Docker setup for local development
├── requirements.txt           # Python dependencies (for advanced setup)
├── Gemfile                    # Ruby dependencies for Jekyll
└── .github/workflows/         # CI/CD automation (deployments, checks)
```

---

## Technologies Used

* **Ruby** (≥ 3.0)
* **Bundler**
* **Jekyll**
* **Node.js** & **npm**

---

## 🧠 Customization

You can customize key elements through:

* `_config.yml` → site settings, blog metadata, verification IDs.
* `_data/socials.yml` → add/update your social media links.
* `_data/cv.yml` or `assets/json/resume.json` → modify your CV data.
* `_projects/` → add or edit your showcased projects.

For further customization, refer to:

* **[CUSTOMIZE.md](CUSTOMIZE.md)**: for styling, layouts, and branding.
* **[INSTALL.md](INSTALL.md)**: for full installation and environment setup.
* **[FAQ.md](FAQ.md)**: for troubleshooting common issues.
  
---

## 🧩 Notebooks & Research Integration

The `assets/notebooks/` directory includes research notebooks related to:

* **Anime Recommendation Systems**
* **Hybrid Collaborative Filtering Models**
* **Content-Based Movie Recommendations**

These are embedded in the website to provide live, interactive data science visualizations.

---

## 🧑‍💻 Author

**👤 Othman Shbeir**
Computer Science Graduate & Teaching Assistant - Islamic University of Gaza
* 📧 [Email](mailto:uthmanshbeir@gmail.com)
* 🔗 [LinkedIn](https://linkedin.com/in/othmanshbeir) 
* [GitHub](https://github.com/othman-shbeir) 
* [Portfolio](https://othman-shbeir.github.io)

---

## ⭐ Acknowledgments

* Built upon the **al-folio Jekyll theme**, enhanced and customized for personal academic use.
* Special thanks to the open-source community for supporting research-driven personal websites.

---

> 🌟 *If you find this portfolio inspiring, consider giving it a star on [GitHub](https://github.com/othman-shbeir/othman-shbeir.github.io)!*
