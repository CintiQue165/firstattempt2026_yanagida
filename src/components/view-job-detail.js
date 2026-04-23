// src/components/view-job-detail.js
import { LitElement, html, css } from 'lit';
import { jobDetail } from '../data/mock.js';

class ViewJobDetail extends LitElement {
  static styles = css`
    :host { display: block; }
    .page { max-width: 720px; margin: 0 auto; padding: 32px 24px 100px; }
    .back { background: none; border: none; cursor: pointer; font-size: 14px; font-weight: 600; color: var(--text-secondary); display: flex; align-items: center; gap: 6px; font-family: var(--font-body); margin-bottom: 20px; padding: 0; }
    .jhdr { background: white; border-radius: var(--radius-xl); padding: 32px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); text-align: center; margin-bottom: 16px; }
    .jlogo { width: 72px; height: 72px; border-radius: var(--radius-lg); background: var(--bg-subtle); margin: 0 auto 16px; display: flex; align-items: center; justify-content: center; font-size: 36px; border: 1px solid var(--border-light); }
    .jtit { font-family: var(--font-display); font-size: 24px; font-weight: 800; color: var(--text-primary); margin-bottom: 6px; }
    .jmet { font-size: 14px; color: var(--text-secondary); margin-bottom: 4px; }
    .jsub { font-size: 12px; color: var(--text-muted); }
    .mcard { background: linear-gradient(135deg,#eff6ff,#dbeafe); border: 1.5px solid #bfdbfe; border-radius: var(--radius-lg); padding: 20px 24px; display: flex; align-items: center; gap: 20px; margin-bottom: 16px; }
    .minfo { flex: 1; }
    .mlbl { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--primary); }
    .msub { font-size: 13px; color: var(--text-secondary); margin-top: 3px; }
    .acard { background: white; border-radius: var(--radius-lg); padding: 24px; border: 1px solid var(--border-light); margin-bottom: 16px; }
    .atit { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 16px; }
    .glbl { font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 10px; }
    .chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; }
    .chip { display: flex; align-items: center; gap: 6px; border-radius: 100px; padding: 6px 14px; font-size: 13px; font-weight: 500; border: 1px solid var(--border-light); }
    .cm { background: #dcfce7; color: #15803d; border-color: #bbf7d0; }
    .cg { background: #fff7ed; color: #c2410c; border-color: #fed7aa; }
    .rcard { background: white; border-radius: var(--radius-lg); padding: 24px; border: 1px solid var(--border-light); margin-bottom: 16px; }
    .rtit { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--accent); margin-bottom: 14px; }
    .rdesc { font-size: 14px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 16px; }
    .ri { display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px; font-size: 14px; color: var(--text-secondary); line-height: 1.5; }
    .ri::before { content: '→'; color: var(--accent); font-weight: 700; flex-shrink: 0; }
    .cta { position: fixed; bottom: 0; left: var(--nav-width); right: 0; background: white; border-top: 1px solid var(--border); padding: 16px 24px; display: flex; gap: 12px; box-shadow: 0 -4px 20px rgba(13,45,94,.08); }
    .apbtn { flex: 1; padding: 15px; background: var(--primary); color: white; border: none; border-radius: var(--radius-md); font-family: var(--font-body); font-size: 15px; font-weight: 700; cursor: pointer; transition: all var(--transition); display: flex; align-items: center; justify-content: center; gap: 8px; }
    .apbtn:hover { background: var(--primary-dark); }
    .bkbtn { width: 52px; height: 52px; border: 1.5px solid var(--border); border-radius: var(--radius-md); background: none; cursor: pointer; font-size: 22px; display: flex; align-items: center; justify-content: center; }
    @media (max-width: 768px) { .cta { left: 0; } }
  `;
  _nav(v) { this.dispatchEvent(new CustomEvent('navigate', { detail: { view: v }, bubbles: true, composed: true })); }
  render() {
    const j = jobDetail;
    return html`
      <div class="page">
        <button class="back" @click=${() => this._nav('job-search')}>← Job Details</button>
        <div class="jhdr">
          <div class="jlogo">${j.logo}</div>
          <div class="jtit">${j.title}</div>
          <div class="jmet">${j.company} · ${j.location}</div>
          <div class="jsub">Posted ${j.posted} · ${j.applicants} applicants</div>
        </div>
        <div class="mcard">
          <div class="minfo"><div class="mlbl">Passport Match Score</div><div class="msub">Based on your verified skills and experience</div></div>
          <cp-progress-ring value="${j.match}" size="80"></cp-progress-ring>
        </div>
        <div class="acard">
          <div class="atit">Skill Match Analysis</div>
          <div class="glbl">MATCHED SKILLS (${j.matchedSkills.length})</div>
          <div class="chips">${j.matchedSkills.map(s => html`<span class="chip cm">ℹ️ ${s}</span>`)}</div>
          <div class="glbl">POTENTIAL GAPS (${j.gapSkills.length})</div>
          <div class="chips">${j.gapSkills.map(s => html`<span class="chip cg">⚠️ ${s}</span>`)}</div>
        </div>
        <div class="rcard">
          <div class="rtit">About the Role</div>
          <p class="rdesc">${j.description}</p>
          ${j.responsibilities.map(r => html`<div class="ri">${r}</div>`)}
        </div>
      </div>
      <div class="cta">
        <button class="apbtn" @click=${() => this._nav('instant-apply')}>🛡️ Apply with Career Passport</button>
        <button class="bkbtn">🔖</button>
      </div>`;
  }
}
customElements.define('view-job-detail', ViewJobDetail);
