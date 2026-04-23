// src/components/app-shell.js
// Root layout — handles sidebar + view routing
import { LitElement, html, css } from 'lit';

class AppShell extends LitElement {
  static properties = { view: {}, role: {}, loggedIn: { type: Boolean }, sidebarOpen: { type: Boolean } };
  constructor() { super(); this.view = 'login'; this.role = 'alumni'; this.loggedIn = false; this.sidebarOpen = false; }

  static styles = css`
    :host { display: block; }
    .layout { display: flex; min-height: 100vh; }
    .overlay { display: none; position: fixed; inset: 0; background: rgba(0,0,0,.4); z-index: 40; }
    .overlay.open { display: block; }
    main { flex: 1; overflow-y: auto; min-height: 100vh; background: var(--bg); }
    .mtop { display: none; position: sticky; top: 0; z-index: 30; background: var(--primary); padding: 12px 18px; align-items: center; justify-content: space-between; }
    .mlogo { font-family: var(--font-display); font-weight: 800; color: white; font-size: 17px; letter-spacing: -.02em; }
    .ham { background: none; border: none; cursor: pointer; color: white; font-size: 22px; padding: 4px; display: flex; }
    @media (max-width: 768px) { .mtop { display: flex; } }
  `;

  _login(e) {
    this.loggedIn = true; this.role = e.detail.role;
    this.view = this.role === 'employer' ? 'employer-dashboard' : this.role === 'staff' ? 'admin-analytics' : 'passport';
  }
  _nav(e) { this.view = e.detail.view; this.sidebarOpen = false; }

  _getView() {
    if (!this.loggedIn) return html`<view-login @login=${this._login}></view-login>`;
    switch (this.view) {
      case 'passport':              return html`<view-passport @navigate=${this._nav}></view-passport>`;
      case 'job-search':            return html`<view-job-search @navigate=${this._nav}></view-job-search>`;
      case 'job-detail':            return html`<view-job-detail @navigate=${this._nav}></view-job-detail>`;
      case 'digital-vault':         return html`<view-digital-vault></view-digital-vault>`;
      case 'instant-apply':         return html`<view-instant-apply @navigate=${this._nav}></view-instant-apply>`;
      case 'app-tracker':           return html`<view-app-tracker></view-app-tracker>`;
      case 'employer-dashboard':    return html`<view-employer-dashboard @navigate=${this._nav}></view-employer-dashboard>`;
      case 'post-job':              return html`<view-post-job @navigate=${this._nav}></view-post-job>`;
      case 'applicant-screening':   return html`<view-applicant-screening></view-applicant-screening>`;
      case 'admin-analytics':       return html`<view-admin-analytics></view-admin-analytics>`;
      default:                      return html`<view-passport @navigate=${this._nav}></view-passport>`;
    }
  }

  render() {
    if (!this.loggedIn) return html`<view-login @login=${this._login}></view-login>`;
    return html`
      <div class="layout">
        <div class="overlay ${this.sidebarOpen ? 'open' : ''}" @click=${() => this.sidebarOpen = false}></div>
        <sidebar-nav .role=${this.role} .activeView=${this.view} .open=${this.sidebarOpen} @navigate=${this._nav}></sidebar-nav>
        <main>
          <div class="mtop">
            <span class="mlogo">Career Passport</span>
            <button class="ham" @click=${() => this.sidebarOpen = !this.sidebarOpen}>☰</button>
          </div>
          ${this._getView()}
        </main>
      </div>`;
  }
}
customElements.define('app-shell', AppShell);
