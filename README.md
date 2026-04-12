# Career Passport — Yanagida

![Lit](https://img.shields.io/badge/Framework-Lit-324fff?style=for-the-badge&logo=lit&logoColor=white)
![HTML](https://img.shields.io/badge/Language-HTML%2FJS-orange?style=for-the-badge&logo=html5&logoColor=white)
![No Build](https://img.shields.io/badge/Build-None%20Required-success?style=for-the-badge)

**Career Passport** is a web-based alumni job placement platform built for Blue Knight University. It allows **verified alumni** to showcase their academic credentials, apply to exclusive job listings, and track their applications in real time. **Employers** can post jobs, screen applicants by match score, and manage their hiring pipeline. **Staff administrators** can monitor graduate employment analytics and generate placement reports.

This project was built as part of **Module 4: Job Posting** for the course 4-112 (MW 7:30AM–9:00AM).

---

## Framework

**Lit** — a lightweight web components library by Google. Lit is used to build all UI components in a modular, reactive, and scoped-CSS architecture. No build tools or bundlers are required.

> Official docs: https://lit.dev

---

## Module

**Module 4: Job Posting**

Screens covered:
- Unified Login (Alumni / Employer / Staff)
- Career Passport (Alumni Profile)
- Job Search
- Job Detail with Skill Match Analysis
- Digital Vault (Secure Document Storage)
- Instant Application
- Application Status Tracker
- Employer Dashboard
- Post a Career Opportunity (4-step form)
- Applicant Screening
- Admin Analytics Dashboard

---

## Getting Started / Installation

This project is a **single HTML file** — no frameworks to install, no terminal required.

### Option A — Simplest (Just open in browser)

1. Download or clone this repository
2. Open `career-passport.html` in any modern browser (Chrome, Edge, Firefox, Safari)
3. That's it — the app runs immediately

> ⚠️ Requires an internet connection on first load to fetch fonts (Google Fonts) and the Lit framework (jsDelivr CDN). After that, the browser caches everything.

---

### Option B — Clone via Git (Windows PowerShell)

```bash
# Step 1: Install Git if you don't have it
winget install Git.Git

# Step 2: Clone the repository
git clone https://github.com/YOUR_USERNAME/firstattempt2026_yanagida.git

# Step 3: Navigate into the folder
cd firstattempt2026_yanagida

# Step 4: Open the file in your default browser
start career-passport.html
```

### Option C — Clone via Git (Mac/Linux Terminal)

```bash
# Step 1: Clone the repository
git clone https://github.com/YOUR_USERNAME/firstattempt2026_yanagida.git

# Step 2: Navigate into the folder
cd firstattempt2026_yanagida

# Step 3: Open the file in your browser
open career-passport.html        # macOS
xdg-open career-passport.html   # Linux
```

---

### Option D — Run with a Local Server (Optional)

```bash
# Using Python (comes pre-installed on most systems)
python -m http.server 8080

# Then open your browser and go to:
# http://localhost:8080/career-passport.html
```

---

## How to Use the App

| Role | How to Log In | What You'll See |
|---|---|---|
| **Alumni** | Click "Alumni" tab → enter any email + password | Career Passport, Job Search, Digital Vault, Apply, Tracker |
| **Employer** | Click "Employer" tab → enter any email + password | Dashboard, Post Job, Applicant Screening |
| **Staff** | Click "Staff" tab → enter any email + password | Admin Analytics Dashboard |

> All data is mock/static — no real backend or authentication.

---

## AI Tools Used

| Tool | Usage |
|---|---|
| **Claude (Anthropic)** | Primary code generation — converted Activity #10 high-fidelity mobile UI designs into a full Lit web application |
| **ChatGPT** | Secondary reference for Lit component patterns |
| **GitHub Copilot (VS Code)** | Inline code suggestions during editing |

---

## Prompt

The following prompt was used to generate the complete working application:

```
You are a senior frontend developer specializing in modern web components using the Lit 
framework. Your task is to convert the existing UI design from these screenshots into a 
fully functional, responsive frontend web application using Lit, focusing solely on 
frontend development with no backend, database, or authentication logic.

The application must follow a modular, component-based architecture where each major 
section of the interface — such as the navigation bar, main content area, cards, forms, 
and modals — is built as a separate, reusable Lit component.

The design should closely match the original layout, including spacing, typography, 
colors, and overall visual hierarchy, ensuring a pixel-accurate implementation. Styling 
should be handled with scoped CSS within Lit components, with optional use of global 
CSS variables to maintain theme consistency across colors, fonts, and spacing.

The interface must be fully responsive across desktop, tablet, and mobile devices, using 
flexible layouts such as Flexbox or CSS Grid, along with appropriate breakpoints. 
Interactivity should be implemented using Lit's reactive properties and state management, 
including UI behaviors such as toggles, dropdowns, tabs, and modals, while using static 
or mock JSON data rather than a real backend.

The code should be clean, readable, and well-structured, written in modern JavaScript 
using ES modules, with clear comments explaining each component. The final output should 
include a complete and runnable frontend project structure with an index.html file, a 
main JavaScript entry point, and all necessary component files organized appropriately, 
ensuring the application runs smoothly in a modern browser using a simple local 
development server.
```

---

## Screenshots

### 01 — Login Screen (Alumni Tab)
![Login Alumni](images/01-login-alumni.png)

### 02 — Login Screen (Employer Tab)
![Login Employer](images/02-login-employer.png)

### 03 — Career Passport (Alumni Profile)
![Career Passport](images/03-career-passport.png)

### 04 — Job Search
![Job Search](images/04-job-search.png)

### 05 — Job Detail with Skill Match Analysis
![Job Detail](images/05-job-detail.png)

### 06 — Digital Vault
![Digital Vault](images/06-digital-vault.png)

### 07 — Instant Application
![Instant Apply](images/07-instant-apply.png)

### 08 — Application Status Tracker
![App Tracker](images/08-app-tracker.png)

### 09 — Employer Dashboard
![Employer Dashboard](images/09-employer-dashboard.png)

### 10 — Post a Career Opportunity
![Post Job](images/10-post-job.png)

### 11 — Applicant Screening
![Applicant Screening](images/11-applicant-screening.png)

### 12 — Admin Analytics Dashboard
![Admin Analytics](images/12-admin-analytics.png)

---

## File Structure

```
firstattempt2026_yanagida/
│
├── career-passport.html     ← Main app (single file, open directly in browser)
├── README.md                ← This file
└── images/                  ← Screenshots folder
    ├── 01-login-alumni.png
    ├── 02-login-employer.png
    ├── 03-career-passport.png
    ├── 04-job-search.png
    ├── 05-job-detail.png
    ├── 06-digital-vault.png
    ├── 07-instant-apply.png
    ├── 08-app-tracker.png
    ├── 09-employer-dashboard.png
    ├── 10-post-job.png
    ├── 11-applicant-screening.png
    └── 12-admin-analytics.png
```

---

## Author

**Maki Yanagida**
Course: 4-112 | MW 7:30AM – 9:00AM
Module 4: Job Posting
