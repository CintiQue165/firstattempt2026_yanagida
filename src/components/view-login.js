// src/components/view-login.js
import { LitElement, html, css } from 'lit';

class ViewLogin extends LitElement {
  static properties = { tab: {}, email: {}, pw: {}, showPw: { type: Boolean }, loading: { type: Boolean }, err: {} };
  constructor() { super(); this.tab = 'alumni'; this.email = ''; this.pw = ''; this.showPw = false; this.loading = false; this.err = ''; }

  static styles = css`
    :host { display: block; min-height: 100vh; }
    .page { min-height: 100vh; display: flex; background: linear-gradient(135deg, #0d1b2e 0%, #1a3a6b 50%, #0d2d5e 100%); }
    .hero { flex: 1; display: flex; flex-direction: column; justify-content: flex-end; padding: 60px; position: relative; overflow: hidden; }
    .hero::before { content: ''; position: absolute; inset: 0; background: url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E"); }
    .hc { position: relative; z-index: 1; }
    .htitle { font-family: var(--font-display); font-size: 52px; font-weight: 800; color: white; line-height: 1.05; letter-spacing: -.03em; margin-bottom: 16px; }
    .htitle span { color: #60a5fa; }
    .hdesc { font-size: 16px; color: rgba(255,255,255,.6); max-width: 380px; line-height: 1.6; }
    .hstats { display: flex; gap: 40px; margin-top: 40px; }
    .hstat .num { font-family: var(--font-display); font-size: 32px; font-weight: 800; color: white; line-height: 1; }
    .hstat .lbl { font-size: 12px; color: rgba(255,255,255,.45); margin-top: 4px; }
    .form-panel { width: 480px; background: white; display: flex; flex-direction: column; justify-content: center; padding: 60px 52px; }
    .flogo { font-family: var(--font-display); font-weight: 800; font-size: 20px; color: var(--primary); letter-spacing: -.02em; margin-bottom: 8px; }
    .fgreet { font-size: 28px; font-weight: 700; color: var(--text-primary); font-family: var(--font-display); margin-bottom: 6px; }
    .fsub { font-size: 14px; color: var(--text-secondary); margin-bottom: 32px; }
    .tabs { display: flex; background: var(--bg-subtle); border-radius: var(--radius-md); padding: 4px; margin-bottom: 28px; }
    .tab { flex: 1; padding: 9px; text-align: center; cursor: pointer; font-size: 13px; font-weight: 600; border-radius: 8px; color: var(--text-secondary); transition: all var(--transition); }
    .tab.active { background: var(--primary); color: white; box-shadow: 0 2px 8px rgba(13,45,94,.25); }
    .field { margin-bottom: 18px; }
    label { display: block; font-size: 13px; font-weight: 600; color: var(--text-primary); margin-bottom: 7px; }
    .iw { position: relative; }
    .iicon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); font-size: 16px; }
    input { width: 100%; padding: 12px 14px 12px 42px; border: 1.5px solid var(--border); border-radius: var(--radius-md); font-family: var(--font-body); font-size: 14px; color: var(--text-primary); background: white; outline: none; transition: border-color var(--transition); box-sizing: border-box; }
    input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(30,107,220,.1); }
    .eye { position: absolute; right: 14px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; font-size: 16px; padding: 2px; }
    .forgot { text-align: right; margin-top: -10px; margin-bottom: 20px; }
    .forgot a { font-size: 13px; color: var(--accent); font-weight: 500; cursor: pointer; }
    .err { background: #fef2f2; border: 1px solid #fecaca; color: #dc2626; border-radius: var(--radius-sm); padding: 10px 14px; font-size: 13px; margin-bottom: 16px; }
    .signin { width: 100%; padding: 14px; background: var(--primary); color: white; border: none; border-radius: var(--radius-md); font-family: var(--font-body); font-size: 15px; font-weight: 700; cursor: pointer; transition: all var(--transition); }
    .signin:hover { background: var(--primary-dark); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(13,45,94,.3); }
    .divider { display: flex; align-items: center; gap: 14px; margin: 20px 0; font-size: 12px; color: var(--text-muted); }
    .divider::before, .divider::after { content: ''; flex: 1; height: 1px; background: var(--border); }
    .sbtn { width: 100%; padding: 11px 14px; background: white; border: 1.5px solid var(--border); border-radius: var(--radius-md); font-family: var(--font-body); font-size: 14px; font-weight: 500; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; color: var(--text-primary); margin-bottom: 10px; transition: all var(--transition); }
    .sbtn:hover { background: var(--bg-subtle); border-color: var(--accent); }
    .glogo { font-weight: 800; font-size: 15px; background: linear-gradient(90deg,#4285F4,#EA4335,#FBBC05,#34A853); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .signup { text-align: center; margin-top: 24px; font-size: 13px; color: var(--text-secondary); }
    .signup a { color: var(--accent); font-weight: 700; cursor: pointer; }
    @media (max-width: 900px) { .hero { display: none; } .form-panel { width: 100%; padding: 40px 28px; } }
  `;

  _signIn() {
    if (!this.email || !this.pw) { this.err = 'Please enter your email/ID and password.'; return; }
    this.loading = true; this.err = '';
    setTimeout(() => {
      this.loading = false;
      this.dispatchEvent(new CustomEvent('login', { detail: { role: this.tab }, bubbles: true, composed: true }));
    }, 800);
  }
  _kd(e) { if (e.key === 'Enter') this._signIn(); }

  render() {
    return html`
      <div class="page">
        <div class="hero">
          <div class="hc">
            <div class="htitle">Your career,<br><span>verified.</span></div>
            <p class="hdesc">Connect your verified academic credentials with exclusive alumni opportunities on the Blue Knight Career Passport.</p>
            <div class="hstats">
              <div class="hstat"><div class="num">15K+</div><div class="lbl">Alumni Network</div></div>
              <div class="hstat"><div class="num">94%</div><div class="lbl">Employment Rate</div></div>
              <div class="hstat"><div class="num">$85k</div><div class="lbl">Avg. Package</div></div>
            </div>
          </div>
        </div>
        <div class="form-panel">
          <div class="flogo">Career Passport</div>
          <div class="fgreet">Welcome Back</div>
          <p class="fsub">Access your professional network and career tools.</p>
          <div class="tabs">
            ${['alumni','employer','staff'].map(r => html`
              <div class="tab ${this.tab===r?'active':''}" @click=${()=>{this.tab=r;this.err=''}}>
                ${r.charAt(0).toUpperCase()+r.slice(1)}
              </div>`)}
          </div>
          ${this.err ? html`<div class="err">${this.err}</div>` : ''}
          <div class="field">
            <label>Email or ID</label>
            <div class="iw"><span class="iicon">✉️</span><input type="text" placeholder="Enter your email or ID" .value=${this.email} @input=${e=>this.email=e.target.value} @keydown=${this._kd}/></div>
          </div>
          <div class="field">
            <label>Password</label>
            <div class="iw"><span class="iicon">🔒</span><input type="${this.showPw?'text':'password'}" placeholder="••••••••" .value=${this.pw} @input=${e=>this.pw=e.target.value} @keydown=${this._kd}/><button class="eye" @click=${()=>this.showPw=!this.showPw}>${this.showPw?'🙈':'👁️'}</button></div>
          </div>
          <div class="forgot"><a>Forgot Password?</a></div>
          <button class="signin" @click=${this._signIn}>${this.loading?'⏳ Signing In...':'Sign In →'}</button>
          <div class="divider">OR CONTINUE WITH</div>
          <button class="sbtn"><span class="glogo">G</span> Sign in with Google</button>
          <button class="sbtn">⊞ Single Sign-On (SSO)</button>
          <p class="signup">New to Career Passport? <a>Request Access</a></p>
        </div>
      </div>`;
  }
}
customElements.define('view-login', ViewLogin);
