// src/components/sidebar-nav.js
import { LitElement, html, css } from 'lit';

const NAV = {
  alumni: [
    { id: 'passport', icon: '🪪', label: 'Career Passport' },
    { id: 'job-search', icon: '🔍', label: 'Job Search' },
    { id: 'digital-vault', icon: '🔒', label: 'Digital Vault' },
    { id: 'instant-apply', icon: '⚡', label: 'Instant Apply' },
    { id: 'app-tracker', icon: '📊', label: 'Applications' },
  ],
  employer: [
    { id: 'employer-dashboard', icon: '📋', label: 'Dashboard' },
    { id: 'post-job', icon: '📝', label: 'Post a Job' },
    { id: 'applicant-screening', icon: '👥', label: 'Applicants' },
  ],
  staff: [
    { id: 'admin-analytics', icon: '📈', label: 'Analytics' },
    { id: 'applicant-screening', icon: '👥', label: 'Screening' },
  ],
};

class SidebarNav extends LitElement {
  static properties = { role: {}, activeView: {}, open: { type: Boolean } };
  static styles = css`
    :host { display: block; }
    nav { width: var(--nav-width); min-height: 100vh; background: var(--primary-dark); display: flex; flex-direction: column; position: sticky; top: 0; height: 100vh; overflow-y: auto; transition: transform var(--transition); flex-shrink: 0; }
    .logo-area { padding: 28px 20px 20px; border-bottom: 1px solid rgba(255,255,255,.08); }
    .logo { font-family: var(--font-display); font-weight: 800; color: white; font-size: 18px; letter-spacing: -.02em; }
    .logo-sub { font-size: 10px; color: rgba(255,255,255,.4); font-weight: 500; letter-spacing: .1em; text-transform: uppercase; margin-top: 2px; }
    .role-badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(255,255,255,.1); border-radius: 100px; padding: 4px 12px; margin-top: 14px; font-size: 11px; color: rgba(255,255,255,.7); font-weight: 600; text-transform: capitalize; }
    .rdot { width: 6px; height: 6px; border-radius: 50%; background: #10b981; }
    .nav-section { padding: 16px 12px; flex: 1; }
    .nav-lbl { font-size: 10px; font-weight: 700; letter-spacing: .1em; color: rgba(255,255,255,.3); text-transform: uppercase; padding: 0 8px; margin-bottom: 8px; }
    .nav-item { display: flex; align-items: center; gap: 12px; padding: 11px 14px; border-radius: var(--radius-md); color: rgba(255,255,255,.6); font-size: 14px; font-weight: 500; cursor: pointer; transition: all var(--transition); margin-bottom: 2px; user-select: none; }
    .nav-item:hover { background: rgba(255,255,255,.08); color: rgba(255,255,255,.9); }
    .nav-item.active { background: rgba(255,255,255,.12); color: white; font-weight: 600; }
    .nav-item.active::before { content: ''; width: 3px; height: 20px; background: var(--accent-light); border-radius: 2px; margin-right: -2px; margin-left: -6px; }
    .nav-icon { font-size: 18px; width: 22px; text-align: center; flex-shrink: 0; }
    .bottom-area { padding: 16px 12px; border-top: 1px solid rgba(255,255,255,.08); }
    .user-card { display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: var(--radius-md); background: rgba(255,255,255,.06); }
    .uname { font-size: 13px; font-weight: 600; color: white; }
    .usub { font-size: 11px; color: rgba(255,255,255,.45); }
    @media (max-width: 768px) {
      nav { position: fixed; left: 0; top: 0; z-index: 50; transform: translateX(-100%); }
      nav.open { transform: translateX(0); box-shadow: var(--shadow-lg); }
    }
  `;
  _nav(id) { this.dispatchEvent(new CustomEvent('navigate', { detail: { view: id }, bubbles: true, composed: true })); }
  render() {
    const items = NAV[this.role] || NAV.alumni;
    const uname = this.role === 'employer' ? 'TechFlow Inc.' : this.role === 'staff' ? 'Admin Staff' : 'Alex Johnson';
    return html`
      <nav class="${this.open ? 'open' : ''}">
        <div class="logo-area">
          <div class="logo">Career Passport</div>
          <div class="logo-sub">Blue Knight Network</div>
          <div class="role-badge"><span class="rdot"></span>${this.role || 'alumni'}</div>
        </div>
        <div class="nav-section">
          <div class="nav-lbl">Navigation</div>
          ${items.map(i => html`
            <div class="nav-item ${this.activeView === i.id ? 'active' : ''}" @click=${() => this._nav(i.id)}>
              <span class="nav-icon">${i.icon}</span>${i.label}
            </div>`)}
        </div>
        <div class="bottom-area">
          <div class="user-card">
            <cp-avatar name="${uname}" size="32"></cp-avatar>
            <div><div class="uname">${uname}</div><div class="usub">${this.role || 'alumni'} account</div></div>
          </div>
        </div>
      </nav>`;
  }
}
customElements.define('sidebar-nav', SidebarNav);
