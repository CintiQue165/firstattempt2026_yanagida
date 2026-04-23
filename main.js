// src/main.js — Main entry point

// ── 1. Shared primitives (used by all views) ───────────────
import './components/shared-components.js';

// ── 2. Navigation ──────────────────────────────────────────
import './components/sidebar-nav.js';

// ── 3. Alumni views ────────────────────────────────────────
import './components/view-login.js';
import './components/view-passport.js';
import './components/view-job-search.js';
import './components/view-job-detail.js';
import './components/view-digital-vault.js';
import './components/view-instant-apply.js';
import './components/view-app-tracker.js';

// ── 4. Employer views ──────────────────────────────────────
import './components/view-employer-dashboard.js';
import './components/view-post-job.js';
import './components/view-applicant-screening.js';

// ── 5. Admin / Staff views ─────────────────────────────────
import './components/view-admin-analytics.js';

// ── 6. App shell (root layout, must load last) ─────────────
import './components/app-shell.js';

// ── 7. Root app element ────────────────────────────────────
import { LitElement, html, css } from 'lit';

class CareerPassportApp extends LitElement {
  static styles = css`
    :host { display: block; min-height: 100vh; }
  `;
  render() {
    return html`<app-shell></app-shell>`;
  }
}
customElements.define('career-passport-app', CareerPassportApp);

// ── 8. PWA: Register Service Worker ────────────────────────
// We check if the browser supports service workers first.
// 'serviceWorker' in navigator = browser compatibility check
// We wait for the page to fully load before registering
// so it doesn't slow down the initial page render.

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('[PWA] Service Worker registered! Scope:', registration.scope);
      })
      .catch((error) => {
        console.error('[PWA] Service Worker registration failed:', error);
      });
  });
} else {
  console.warn('[PWA] Service Workers are not supported in this browser.');
}
