// src/components/view-applicant-screening.js
import { LitElement, html, css } from 'lit';
import { applicantsData } from '../data/mock.js';

class ViewApplicantScreening extends LitElement {
  static properties = { candidates: { state: true }, filter: { state: true } };
  constructor() { super(); this.candidates = applicantsData.map(a => ({ ...a })); this.filter = 'all'; }
  static styles = css`
    :host { display: block; }
    .page { max-width: 720px; margin: 0 auto; padding: 32px 24px 60px; }
    .hdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
    .back { background: none; border: none; cursor: pointer; font-size: 20px; color: var(--text-muted); padding: 0; }
    .ptit { font-family: var(--font-display); font-size: 20px; font-weight: 800; color: var(--text-primary); }
    .lbanner { background: white; border-radius: var(--radius-lg); padding: 20px; border: 1px solid var(--border-light); margin-bottom: 20px; }
    .llbl { font-size: 11px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--text-muted); }
    .ltit { font-family: var(--font-display); font-size: 22px; font-weight: 800; color: var(--text-primary); margin: 4px 0; }
    .lsub { font-size: 13px; color: var(--text-secondary); }
    .ftabs { display: flex; gap: 8px; margin-bottom: 20px; overflow-x: auto; }
    .ftabs::-webkit-scrollbar { display: none; }
    .ft { display: flex; align-items: center; gap: 6px; padding: 9px 16px; border-radius: 100px; font-size: 13px; font-weight: 600; cursor: pointer; white-space: nowrap; border: none; font-family: var(--font-body); transition: all var(--transition); }
    .ft.a { background: var(--primary); color: white; }
    .ft:not(.a) { background: white; border: 1.5px solid var(--border); color: var(--text-secondary); }
    .ccard { background: white; border-radius: var(--radius-lg); padding: 20px; border: 1px solid var(--border-light); margin-bottom: 12px; transition: all var(--transition); }
    .ccard:hover { box-shadow: var(--shadow-md); }
    .ctop { display: flex; align-items: flex-start; gap: 14px; }
    .cinfo { flex: 1; }
    .mbadge { display: inline-flex; align-items: center; gap: 5px; border-radius: 100px; padding: 4px 10px; font-size: 11px; font-weight: 800; }
    .mh { background: var(--primary); color: white; } .mm { background: var(--accent); color: white; } .ml { background: #f59e0b; color: white; }
    .at { font-size: 11px; color: var(--text-muted); margin-left: 6px; }
    .cn { font-family: var(--font-display); font-size: 16px; font-weight: 800; color: var(--text-primary); margin-bottom: 3px; }
    .cr { font-size: 13px; color: var(--text-secondary); margin-bottom: 10px; }
    .schips { display: flex; flex-wrap: wrap; gap: 6px; }
    .sch { background: var(--bg-subtle); border-radius: 100px; padding: 4px 12px; font-size: 12px; font-weight: 500; color: var(--text-secondary); }
    .cft { display: flex; align-items: center; justify-content: space-between; margin-top: 14px; }
    .vpbtn { background: none; border: none; cursor: pointer; font-size: 13px; font-weight: 700; color: var(--accent); font-family: var(--font-body); }
    .bkbtn { width: 34px; height: 34px; background: none; border: 1.5px solid var(--border); border-radius: var(--radius-sm); cursor: pointer; font-size: 16px; display: flex; align-items: center; justify-content: center; transition: all var(--transition); }
    .bkbtn:hover { border-color: var(--accent); }
    .bkbtn.s { background: #fff7ed; border-color: #f97316; }
  `;
  get filtered() { let l = this.candidates; if (this.filter === 'highly') l = l.filter(c => c.match >= 90); return l; }
  _mc(m) { return m >= 95 ? 'mh' : m >= 88 ? 'mm' : 'ml'; }
  _toggleSave(id) { this.candidates = this.candidates.map(c => c.id === id ? { ...c, saved: !c.saved } : c); }
  render() {
    return html`
      <div class="page">
        <div class="hdr"><button class="back">←</button><span class="ptit">Applicant Screening</span><span style="font-size:22px;cursor:pointer">🔍</span></div>
        <div class="lbanner"><div class="llbl">Active Listing</div><div class="ltit">Senior UX Designer</div><div class="lsub">24 total applicants · 8 new today</div></div>
        <div class="ftabs">
          <button class="ft ${this.filter==='all'?'a':''}" @click=${()=>this.filter='all'}>All Applicants ▾</button>
          <button class="ft ${this.filter==='highly'?'a':''}" @click=${()=>this.filter='highly'}>Highly Matched</button>
          <button class="ft ${this.filter==='recent'?'a':''}" @click=${()=>this.filter='recent'}>Recent</button>
        </div>
        ${this.filtered.map(c => html`
          <div class="ccard">
            <div class="ctop">
              <div class="cinfo">
                <div><span class="mbadge ${this._mc(c.match)}">${c.match}% MATCH</span><span class="at">Applied ${c.applied}</span></div>
                <div class="cn">${c.name}</div><div class="cr">${c.role}</div>
                <div class="schips">${c.skills.map(s => html`<span class="sch">${s}</span>`)}</div>
              </div>
              <cp-avatar name="${c.name}" size="60"></cp-avatar>
            </div>
            <div class="cft">
              <button class="vpbtn">View Profile &gt;</button>
              <button class="bkbtn ${c.saved?'s':''}" @click=${()=>this._toggleSave(c.id)}>🔖</button>
            </div>
          </div>`)}
      </div>`;
  }
}
customElements.define('view-applicant-screening', ViewApplicantScreening);
