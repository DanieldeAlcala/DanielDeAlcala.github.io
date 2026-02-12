// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "My published research. Hundreds of hours of work distilled into a few pages of &quot;simple&quot; PDFs.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Some of my project sites. Because life is too short to only look at GitHub repos, these actually have a face!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "A collection of research frameworks, deep learning experiments, and code that actually does what it’s told.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "My professional and academic record. The complete CV is available for download in PDF format by clicking the PDF icon.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-paper-is-my-data-in-your-ai-membership-inference-test-mint-applied-to-face-biometrics-accepted-on-ieee-access",
          title: 'Paper “Is My Data in Your AI? Membership Inference Test (MINT) applied to...',
          description: "",
          section: "News",},{id: "news-just-attended-iccv-an-unforgettable-experience-where-we-presented-3-papers-and-i-met-incredibly-interesting-people-as-always-happens-at-these-conferences-smile",
          title: 'Just attended ICCV, an unforgettable experience where we presented 3 papers and I...',
          description: "",
          section: "News",},{id: "news-completed-my-research-internship-at-ibm-research",
          title: 'Completed my Research Internship at IBM Research',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "projects-ai-mintest",
          title: 'AI-MINTest',
          description: "AI-MINTest — Membership Inference Test. External project link.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-dp-garage",
          title: 'DP Garage',
          description: "DP Garage — small hobby web.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%6E%69%65%6C%64%65%61%6C%63%61%6C%61%76%61%6C%63%61%72%63%65%6C@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/DanieldeAlcala", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/Daniel-DeAlcala", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=https://scholar.google.es/citations?user=oAUImYwAAAAJ&hl=es", "_blank");
        },
      },{
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
