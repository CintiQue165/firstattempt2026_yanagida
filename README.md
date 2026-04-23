# Career Passport — Yanagida

![Lit](https://img.shields.io/badge/Framework-Lit-324fff?style=for-the-badge&logo=lit&logoColor=white)
![Vite](https://img.shields.io/badge/Bundler-Vite-646cff?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/Language-JavaScript-f7df1e?style=for-the-badge&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-Ready-5a0fc8?style=for-the-badge&logo=pwa&logoColor=white)
![No Backend](https://img.shields.io/badge/Backend-None-success?style=for-the-badge)

**Career Passport** is a web-based alumni job placement platform built for Blue Knight University. It allows **verified alumni** to showcase their academic credentials, apply to exclusive job listings, and track their applications in real time. **Employers** can post jobs, screen applicants by match score, and manage their hiring pipeline. **Staff administrators** can monitor graduate employment analytics and generate placement reports.

This project was built as part of **Module 4: Job Posting** for the course **4-112 (MW 7:30AM–9:00AM)** using the **Lit Web Components framework** with **Vite** as the development server.

---

## Framework

**Lit** — a lightweight web components library by Google. Each screen of the application is built as a separate, reusable Lit component with scoped CSS, reactive properties, and event-based communication between components.

> Official docs: https://lit.dev

---

## Module

**Module 4: Job Posting**

Screens covered:
- Unified Login (Alumni / Employer / Staff)
- Career Passport — Alumni Profile
- Job Search with live filtering
- Job Detail with Skill Match Analysis
- Digital Vault — Secure Document Storage
- Instant Application with editable Cover Letter
- Application Status Tracker
- Employer Dashboard with Pipeline Chart
- Post a Career Opportunity — 4-step form
- Applicant Screening with match filters
- Admin Analytics Dashboard with charts

---

## PWA (Progressive Web App) — `feature/pwa-ready`

This branch converts the Career Passport into a fully installable, offline-capable Progressive Web App.

### What was added

| File | Purpose |
|---|---|
| `public/manifest.json` | Defines app name, icons, colors, and display mode |
| `public/service-worker.js` | Handles caching and offline support |
| `public/icons/icon-192.png` | App icon (small) |
| `public/icons/icon-512.png` | App icon (large) |
| `index.html` | Updated with PWA meta tags and manifest link |
| `src/main.js` | Updated to register the service worker |

### Caching Strategy

**Cache-First with Network Fallback:**
1. On first load — all core files are cached (HTML, CSS, JS, icons)
2. On repeat visits — files are served instantly from cache
3. On network failure — app still loads from cache (works offline)
4. On cache update — increment `CACHE_NAME` version in `service-worker.js`

### How to Test PWA Features

```bash
npm install
npm run dev
```

Then in Chrome:
1. Open **DevTools (F12)** → **Application** tab
2. Click **Service Workers** — should show `✅ activated and running`
3. Click **Manifest** — should show app name, icons, and colors
4. Look for the **install icon** in the Chrome address bar → click to install
5. Go to **Network** tab → set to **Offline** → refresh → app still loads ✅

---

## File Structure

```
firstattempt2026_yanagida/
│
├── public/                             ← PWA assets
│   ├── manifest.json                   ← PWA manifest
│   ├── service-worker.js               ← Caching + offline logic
│   └── icons/
│       ├── icon-192.png                ← App icon (192x192)
│       └── icon-512.png                ← App icon (512x512)
├── index.html                          ← App entry point (PWA meta tags added)
├── package.json                        ← Project dependencies (Lit + Vite)
├── package-lock.json                   ← Locked dependency versions
├── vite.config.js                      ← Vite dev server configuration
├── README.md                           ← This file
├── images/                             ← Screenshots
│   ├── 01-login-alumni.png
│   ├── 02-login-employer.png
│   ├── 03-career-passport.png
│   ├── 04-job-search.png
│   ├── 05-job-detail.png
│   ├── 06-digital-vault.png
│   ├── 07-instant-apply.png
│   ├── 08-app-tracker.png
│   ├── 09-employer-dashboard.png
│   ├── 10-post-job.png
│   ├── 11-applicant-screening.png
│   └── 12-admin-analytics.png
└── src/
    ├── main.js                         ← Imports all components + SW registration
    ├── styles/
    │   └── global.css                  ← Global CSS variables & reset
    ├── data/
    │   └── mock.js                     ← Static mock data for all views
    └── components/
        ├── shared-components.js        ← cp-avatar, cp-toggle, cp-progress-ring
        ├── sidebar-nav.js              ← Role-based sidebar navigation
        ├── app-shell.js                ← Root layout + view routing
        ├── view-login.js               ← Unified login screen
        ├── view-passport.js            ← Alumni career passport
        ├── view-job-search.js          ← Alumni job board
        ├── view-job-detail.js          ← Job detail + skill match
        ├── view-digital-vault.js       ← Secure document vault
        ├── view-instant-apply.js       ← One-click application
        ├── view-app-tracker.js         ← Application status tracker
        ├── view-employer-dashboard.js  ← Employer overview
        ├── view-post-job.js            ← 4-step job posting form
        ├── view-applicant-screening.js ← Recruiter applicant list
        └── view-admin-analytics.js     ← Admin analytics dashboard
```

---

## Installation

### Requirements
- **Node.js** v18 or higher — download at https://nodejs.org (choose LTS version)
- **npm** (comes bundled with Node.js)

---

### Steps

```bash
# Step 1: Clone the repository
git clone https://github.com/CintiQue165/firstattempt2026_yanagida.git

# Step 2: Navigate into the project folder
cd firstattempt2026_yanagida

# Step 3: Switch to the PWA branch (optional)
git checkout feature/pwa-ready

# Step 4: Install dependencies (installs Lit + Vite automatically)
npm install

# Step 5: Start the development server
npm run dev
```

Then open your browser and go to:
```
http://localhost:3000
```

> ⚠️ **Windows PowerShell users:** If you get a script execution error, open PowerShell as Administrator and run:
> ```powershell
> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
> ```
> Or use **Command Prompt (cmd)** instead — it works without any changes.

---

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder, ready to deploy anywhere.

---

## How to Use the App

| Role | How to Log In | What You'll See |
|---|---|---|
| **Alumni** | Click "Alumni" tab → enter any email + any password | Career Passport, Job Search, Digital Vault, Apply, Tracker |
| **Employer** | Click "Employer" tab → enter any email + any password | Dashboard, Post Job, Applicant Screening |
| **Staff** | Click "Staff" tab → enter any email + any password | Admin Analytics Dashboard |

> All data is static/mock — no real backend or authentication required.

---

## AI Tools Used

| Tool | Usage |
|---|---|
| **Claude (Anthropic)** | Primary — generated the entire Lit web application and PWA conversion from Activity #10 UI designs |
| **ChatGPT** | Secondary reference for Lit component patterns |
| **GitHub Copilot (VS Code)** | Inline code suggestions during editing |

---

## Master Prompt

### Original App Generation Prompt

The following prompt was used to generate the complete working Lit application:

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

### PWA Conversion Master Prompt

The following prompt was used to convert the existing Lit app into a Progressive Web App:

```
I am an Information Technology student working on an existing web application stored
in a public GitHub repository. The project is built using Lit Framework.

I want to transform this project into a fully functional Progressive Web App (PWA)
using best practices, and I am working in a new Git branch called: feature/pwa-ready.

Guide me step-by-step through the entire PWA conversion process. Assume I am still
learning, but keep explanations practical and focused on implementation.

Requirements:
1. Manifest File — Generate a complete manifest.json with name, short_name, start_url,
   display, background_color, theme_color, and icons (192x192 and 512x512)
2. Service Worker — Create service-worker.js with install, activate, and fetch events.
   Show how to register it in main.js
3. Caching Strategy — Implement cache-first with network fallback. Cache HTML, CSS,
   JS, and images. Ensure offline support and prevent stale cache issues
4. App Icons — Explain placement and linking in manifest and HTML
5. Testing — Show how to verify service worker, trigger install prompt, and test offline
6. Framework-specific adjustments for Lit + Vite
7. Give exact file names, full copy-paste code, and folder structure
8. List common errors and quick fixes

Do NOT give vague explanations. I need actionable code and clear reasoning for each
step so I can explain this in an architecture presentation.
```

---

## AI Hallucinations & Errors Fixed Manually

During the PWA conversion process using Claude AI, the following issues were
encountered and had to be corrected manually:

### 1. ❌ Hallucination — Wrong Service Worker File Location
**What the AI generated:**
The AI initially placed `service-worker.js` inside the `src/` folder.

**Why it was wrong:**
Vite does not serve files from `src/` as static assets. Service workers must be
served from the root URL (`/service-worker.js`), which means they must live in
the `public/` folder so Vite copies them to the build output root.

**Fix applied:**
Moved `service-worker.js` to `public/service-worker.js`.

---

### 2. ❌ Hallucination — Missing `public/` Folder in Project
**What the AI generated:**
The AI assumed a `public/` folder already existed in the project and gave
instructions to place files there without explaining it needed to be created first.

**Why it was wrong:**
The original Lit + Vite project did not have a `public/` folder. Vite only
creates one if you explicitly add it. Uploading to GitHub without creating the
folder first caused file path errors.

**Fix applied:**
Manually created the `public/` folder on GitHub by using
**Add file → Create new file** and typing `public/manifest.json` as the filename,
which forces GitHub to create the folder.

---

### 3. ❌ Hallucination — Incorrect Icon Paths in Manifest
**What the AI initially wrote:**
```json
"src": "icons/icon-192.png"
```

**Why it was wrong:**
Without the leading `/`, the path is treated as relative to the current page URL,
which breaks icon loading when navigating to sub-routes. PWA icon paths must be
absolute from the root.

**Fix applied:**
```json
"src": "/icons/icon-192.png"
```

---

### 4. ❌ Hallucination — Service Worker Registration Placed Before Component Imports
**What the AI generated:**
The AI placed the service worker registration code at the top of `main.js`,
before all the Lit component imports.

**Why it was wrong:**
Service worker registration should happen after the page has fully loaded
(`window.addEventListener('load', ...)`). Placing it at the top risked slowing
down the initial component registration and caused a race condition where the
SW tried to cache files before they were available.

**Fix applied:**
Moved the SW registration block to the bottom of `main.js`, inside a
`window.addEventListener('load', ...)` callback so it only runs after
all components are registered and the page is ready.

---

### 5. ❌ Error — `npm` Script Execution Blocked on Windows
**What happened:**
Running `npm install` in Windows PowerShell returned:
```
File cannot be loaded because running scripts is disabled on this system.
```

**Why it happened:**
Windows PowerShell has a default execution policy that blocks unsigned scripts,
including npm's `.ps1` launcher.

**Fix applied:**
Either ran the following command in PowerShell as Administrator:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
Or switched to **Command Prompt (cmd)** which does not have this restriction.

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

## Author

**Maki Yanagida**
Course: 4-112 | MW 7:30AM – 9:00AM
Module 4: Job Posting
