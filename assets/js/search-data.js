// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "Explore my AI, Data Science, and Web Development projects including computer vision systems, recommendation engines, and full-stack applications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-résumé",
          title: "Résumé",
          description: "Curriculum Vitae of Othman Shbeir - AI Engineer, Data Scientist, and Teaching Assistant with expertise in Machine Learning, Computer Vision, and Python.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "Teaching experience and materials from courses I assisted.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-completed-24-hour-ai-training-ieee-iug",
          title: 'Completed 24-Hour AI Training (IEEE–IUG)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-completed-ibm-course-delivering-quality-work-with-agility",
          title: 'Completed IBM Course: Delivering Quality Work with Agility',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-completed-google-course-foundations-of-data-science",
          title: 'Completed Google Course: Foundations of Data Science',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-completed-google-course-get-started-with-python",
          title: 'Completed Google Course: Get Started with Python',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_6/";
            },},{id: "news-graduated-top-of-my-cohort-bachelor-s-in-computer-science",
          title: 'Graduated Top of My Cohort (Bachelor’s in Computer Science)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-started-serving-as-a-teaching-assistant",
          title: 'Started serving as a Teaching Assistant',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_1/";
            },},{id: "news-completed-google-course-go-beyond-the-numbers-translate-data-into-insights",
          title: 'Completed Google Course: Go Beyond the Numbers – Translate Data into Insights',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_7/";
            },},{id: "news-completed-google-course-the-power-of-statistics",
          title: 'Completed Google Course: The Power of Statistics',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_8/";
            },},{id: "news-completed-google-course-regression-analysis-simplify-complex-data-relationships",
          title: 'Completed Google Course: Regression Analysis – Simplify Complex Data Relationships',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_9/";
            },},{id: "news-completed-google-course-the-nuts-and-bolts-of-machine-learning",
          title: 'Completed Google Course: The Nuts and Bolts of Machine Learning',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_10/";
            },},{id: "news-completed-google-course-google-advanced-data-analytics-capstone",
          title: 'Completed Google Course: Google Advanced Data Analytics Capstone',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_11/";
            },},{id: "news-completed-google-advanced-data-analytics-professional-certificate",
          title: 'Completed Google Advanced Data Analytics Professional Certificate',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_12/";
            },},{id: "projects-mnist-cnn-classifier-99-5",
          title: 'MNIST CNN Classifier (99.5%+)',
          description: "Compact Keras/TensorFlow convolutional network for handwritten digit recognition—reaching ~99.5% test accuracy on MNIST with a clean training/evaluation pipeline.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-harmoni",
          title: 'HarmOni',
          description: "All-in-one synchronized viewing, local media library, and hybrid recommendations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-movies-hybrid-recommendation-system",
          title: 'Movies Hybrid Recommendation System',
          description: "Content + CF hybrid with IMDb-weighted rating and a recency boost, tested on larger MovieLens metadata.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-anime-hybrid-recommendation-system",
          title: 'Anime Hybrid Recommendation System',
          description: "Content + collaborative filtering on MyAnimeList (2023) data with TF-IDF cosine similarity and Surprise SVD/NMF/KNN—tuned via cross-validation and grid search.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-ai-driven-student-success-forecaster",
          title: 'AI-Driven Student Success Forecaster',
          description: "Hackathon project (Udacity Palestine Launchpad). Predicts student outcomes and flags at-risk students with an explainable ML pipeline and a Flask web app.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-us-bikeshare-data-analysis",
          title: 'US Bikeshare Data Analysis',
          description: "Built for the Udacity–Google Palestine Launchpad Data Science Nanodegree (PDSND). Interactive terminal app for exploring Chicago, NYC, and Washington bikeshare data with flexible time filters and rich stats.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-sakila-dvd-rental-data-analysis-postgresql",
          title: 'Sakila DVD Rental Data Analysis (PostgreSQL)',
          description: "SQL-driven insights into customer behavior, rentals, and store performance on the Sakila/DVD Rental sample DB—completed for Udacity’s Programming for Data Science Nanodegree.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-news-website",
          title: 'News Website',
          description: "A responsive Angular single-page app that aggregates live headlines and topic feeds from a configurable news API—generated with Angular CLI 15.1.5.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-netflix-clone",
          title: 'Netflix Clone',
          description: "A responsive Angular single-page app that emulates a Netflix-style browsing experience with modular components, routing, and a clean service-driven architecture—generated with Angular CLI 15.1.5.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-personal-expenses-api",
          title: 'Personal Expenses API',
          description: "Secure REST API for tracking expenses, incomes, and monthly insights—JWT auth, input validation, and a clean controller/route structure.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
