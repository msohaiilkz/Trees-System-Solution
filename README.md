# Trees System — Corporate Website

Official website for **Trees System**, a Karachi-based provider of IT, Power, CCTV, Cybersecurity and Fire Alarm solutions, serving businesses across Pakistan since **1999**.

🌐 **Live:** [www.treessystempk.com](https://www.treessystempk.com/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## Overview

A fully responsive, multi-page marketing website built with vanilla HTML, CSS and JavaScript — no build step or framework required. It presents the company's services, team, case studies and contact information, and is optimized for search engines with structured data and social sharing metadata.

## Features

- **Responsive design** — mobile, tablet and desktop layouts
- **Scroll & entrance animations** — [AOS](https://michalsnik.github.io/aos/) and [GSAP ScrollTrigger](https://gsap.com/)
- **SEO ready** — per-page meta tags, Open Graph / Twitter cards, and JSON-LD (`Organization`, `LocalBusiness`, `WebSite`) structured data
- **Dedicated service pages** — IT Infrastructure, Networking, CCTV, Power, Solar, System, Cybersecurity and Fire Alarm
- **Reusable components** — shared header, footer and client-logo marquee, consistent across all pages
- **Consultancy CTA** — primary navigation button linking to the contact page
- **Favicon & branding** — site favicon and logo served from `assets/logos/`

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | HTML5 |
| Styling | CSS3 (`css/style.css`) |
| Interactivity | Vanilla JavaScript (`js/main.js`) |
| Animations | AOS, GSAP + ScrollTrigger |
| Icons | Font Awesome 6 |

> External libraries (Font Awesome, AOS, GSAP) are loaded via CDN.

## Project Structure

```
Trees-System-Solution/
├── index.html                    # Home
├── about.html                    # About Us
├── services.html                 # Services overview
├── it-infrastructure.html        # Service detail pages
├── networking-solutions.html
├── cctv-solutions.html
├── power-solutions.html
├── solar-solutions.html
├── system-solutions.html
├── cybersecurity-solutions.html
├── fire-alarm-system.html
├── news.html                     # News & Blog
├── contact.html                  # Contact & enquiry form
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── Home Page/                # Home hero, about-section & team images
│   ├── service page/             # Per-service detail-page images
│   ├── about us/                 # About page image
│   ├── brands/                   # Client logos (1–14.png)
│   └── logos/                    # Brand logo + favicon
└── README.md
```

## Getting Started

The site is static — clone the repository and serve the folder with any static web server.

```bash
# Clone
git clone https://github.com/msohaiilkz/Trees-System-Solution.git
cd Trees-System-Solution

# Serve locally (Python 3)
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

Alternatively, use the **Live Server** extension in VS Code, or any static host.

## Deployment

Being a static site, it can be deployed to any static hosting provider (shared hosting, GitHub Pages, Netlify, Vercel, Cloudflare Pages) by uploading the repository contents to the web root. No server-side runtime or build step is required.

## Maintenance Notes

- **Client logos** live in `assets/brands/` (`1.png … 14.png`) and are rendered as a duplicated set to power the seamless scrolling marquee — keep both copies in sync when adding or removing a logo.
- **Image folders contain spaces** (`Home Page`, `service page`, `about us`); they are referenced in HTML using `%20` (e.g. `assets/Home%20Page/1.png`). Keep the folder names and references in sync.
- **Placeholder/demo blocks** that are not yet populated with final content are disabled inside HTML comments tagged `[TREES-FLATU]`. Search the codebase for that tag to locate and re-enable them once real content is available.

## Contact

**Trees System**
Office # 401, Mehdi Towers, 115-A, SMCHS, Shahrah-e-Faisal, Karachi, Pakistan
📧 sales@treessystempk.com
📞 021-34553476-34550849 · 0301-8273503

---

© Trees System. All Rights Reserved.
