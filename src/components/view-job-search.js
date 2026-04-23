// src/components/view-job-search.js
import { LitElement, html, css } from 'lit';
import { jobListings } from '../data/mock.js';

class ViewJobSearch extends LitElement {
  static properties = { jobs: { state: true }, search: { state: true } };
  constructor() { super(); this.jobs = jobListings.map(j => ({ ...j })); this.search = ''; }
  static styles = css`
    :host { display: block; }
    .page { max-width: 720px; margin: 0 auto; padding: 32px 24px 80px; }
    .hdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
    .ptitle { font-family: var(--font-display); font-size: 22px; font-weight: 800; color: var(--text-primary); }
    .sw { position: relative; margin-bottom: 16px; }
    .sw input { width: 100%; padding: 13px 52px 13px 46px; border: 1.5px solid var(--border); border-radius: var(--radius-lg); font-family: var(--font-body); font-size: 14px; background: white; color: var(--text-primary); outline: none; transition: border-color var(--transition); box-sizing: border-box; }
    .sw input:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(30,107,220,.1); }
    .si { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); font-size: 18px; }
    .frow { display: flex; gap: 8px; margin-bottom: 24px; overflow-x: auto; padding-bottom: 4px; }
    .frow::-webkit-scrollbar { display: none; }
    .fc { display: flex; align-items: center; gap: 5px; padding: 7px 14px; border-radius: 100px; font-size: 13px; font-weight: 600; cursor: pointer; white-space: nowrap; transition: all var(--transition); border: none; font-family: var(--font-body); }
    .fc.a { background: var(--primary); color: white; }
    .fc:not(.a) { background: white; border: 1.5px solid var(--border); color: var(--text-secondary); }
    .shdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
    .stit { font-family: var(--font-display); font-size: 17px; font-weight: 700; color: var(--text-primary); }
    .sa { background: none; border: none; cursor: pointer; color: var(--accent); font-size: 13px; font-weight: 600; font-family: var(--font-body); }
    .jcard { background: white; border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 20px; margin-bottom: 14px; transition: all var(--transition); cursor: pointer; }
    .jcard:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); border-color: rgba(30,107,220,.2); }
    .jtop { display: flex; align-items: flex-start; gap: 14px; }
    .jlogo { width: 48px; height: 48px; border-radius: var(--radius-md); background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; font-size: 24px; flex-shrink: 0; border: 1px solid var(--border-light); }
    .jmeta { flex: 1; min-width: 0; }
    .jtitle { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 3px; }
    .jco { font-size: 13px; color: var(--text-secondary); }
    .mpill { display: flex; align-items: center; gap: 5px; border-radius: 100px; padding: 6px 12px; flex-shrink: 0; font-size: 13px; font-weight: 700; }
    .mh { background: #dcfce7; color: #15803d; } .mm { background: #dbeafe; color: #1d4ed8; } .ml { background: #fef3c7; color: #92400e; }
    .jdet { display: flex; align-items: center; gap: 16px; margin-top: 14px; flex-wrap: wrap; }
    .di { display: flex; align-items: center; gap: 5px; font-size: 12px; color: var(--text-muted); }
    .jact { display: flex; gap: 10px; margin-top: 14px; }
    .abtn { flex: 1; padding: 11px; background: var(--primary); color: white; border: none; border-radius: var(--radius-md); font-family: var(--font-body); font-size: 14px; font-weight: 700; cursor: pointer; transition: all var(--transition); }
    .abtn:hover { background: var(--primary-dark); }
    .svbtn { width: 42px; height: 42px; background: none; border: 1.5px solid var(--border); border-radius: var(--radius-md); cursor: pointer; font-size: 18px; transition: all var(--transition); display: flex; align-items: center; justify-content: center; }
    .svbtn.s { background: #fff7ed; border-color: #f97316; }
  `;
  get filtered() { return this.search ? this.jobs.filter(j => j.title.toLowerCase().includes(this.search.toLowerCase()) || j.company.toLowerCase().includes(this.search.toLowerCase())) : this.jobs; }
  _nav(v) { this.dispatchEvent(new CustomEvent('navigate', { detail: { view: v }, bubbles: true, composed: true })); }
  _mc(m) { return m >= 95 ? 'mh' : m >= 88 ? 'mm' : 'ml'; }
  _toggleSave(id) { this.jobs = this.jobs.map(j => j.id === id ? { ...j, saved: !j.saved } : j); }
  render() {
    return html`
      <div class="page">
        <div class="hdr"><div class="ptitle">Job Search</div><span style="font-size:22px;cursor:pointer">🔔</span></div>
        <div class="sw"><span class="si">🔍</span><input type="text" placeholder="Search job title, company..." .value=${this.search} @input=${e => this.search = e.target.value}/></div>
        <div class="frow">
          <button class="fc a">Degree ▾</button><button class="fc">Skills ▾</button>
          <button class="fc">Location ▾</button><button class="fc">Remote</button><button class="fc">Fresh Grad</button>
        </div>
        <div class="shdr"><span class="stit">Hand-Picked for You</span><button class="sa">See all</button></div>
        ${this.filtered.map(j => html`
          <div class="jcard" @click=${() => this._nav('job-detail')}>
            <div class="jtop">
              <div class="jlogo">${j.logo}</div>
              <div class="jmeta"><div class="jtitle">${j.title}</div><div class="jco">${j.company} · ${j.location}</div></div>
              <div class="mpill ${this._mc(j.match)}">⚙️ ${j.match}% Match</div>
            </div>
            <div class="jdet"><div class="di">💰 ${j.salary}</div><div class="di">💼 ${j.type}</div><div class="di">🕐 ${j.posted}</div></div>
            <div class="jact" @click=${e => e.stopPropagation()}>
              <button class="abtn" @click=${() => this._nav('instant-apply')}>Apply Now</button>
              <button class="svbtn ${j.saved ? 's' : ''}" @click=${() => this._toggleSave(j.id)}>🔖</button>
            </div>
          </div>`)}
      </div>`;
  }
}
customElements.define('view-job-search', ViewJobSearch);
