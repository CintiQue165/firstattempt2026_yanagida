// src/components/view-employer-dashboard.js
import { LitElement, html, css } from 'lit';
import { empDash } from '../data/mock.js';

class ViewEmployerDashboard extends LitElement {
  static styles = css`
    :host { display: block; }
    .page { max-width: 800px; margin: 0 auto; padding: 32px 24px 60px; }
    .phdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
    .ptit { font-family: var(--font-display); font-size: 22px; font-weight: 800; color: var(--text-primary); }
    .sgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 20px; }
    .sc { background: white; border-radius: var(--radius-lg); padding: 20px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); }
    .slbl { font-size: 12px; font-weight: 600; color: var(--text-muted); letter-spacing: .05em; margin-bottom: 8px; }
    .sval { font-family: var(--font-display); font-size: 32px; font-weight: 800; color: var(--text-primary); line-height: 1; }
    .str { font-size: 12px; font-weight: 700; margin-top: 5px; }
    .up { color: var(--success); } .dn { color: var(--danger); }
    .pcard { background: white; border-radius: var(--radius-lg); padding: 22px; border: 1px solid var(--border-light); margin-bottom: 20px; }
    .chdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px; }
    .ctit { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--text-primary); }
    .csub { font-size: 12px; color: var(--text-muted); margin-bottom: 20px; }
    .tp { display: flex; align-items: center; gap: 6px; background: var(--bg-subtle); border-radius: var(--radius-sm); padding: 5px 12px; font-size: 12px; font-weight: 600; color: var(--text-secondary); cursor: pointer; }
    .bars { display: flex; align-items: flex-end; gap: 8px; height: 80px; margin-bottom: 12px; }
    .bg { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 6px; height: 100%; justify-content: flex-end; }
    .bar { width: 100%; border-radius: 4px 4px 0 0; background: var(--bg-subtle); transition: background var(--transition); cursor: pointer; min-height: 8px; }
    .bar:hover { background: var(--accent-light); } .bar.a { background: var(--primary); }
    .slrow { display: flex; }
    .sll { flex: 1; text-align: center; font-size: 9px; font-weight: 700; letter-spacing: .05em; color: var(--text-muted); text-transform: uppercase; }
    .sll.a { color: var(--primary); }
    .mcard { background: white; border-radius: var(--radius-lg); padding: 22px; border: 1px solid var(--border-light); }
    .mhdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
    .va { background: none; border: none; cursor: pointer; font-size: 13px; font-weight: 600; color: var(--accent); font-family: var(--font-body); }
    .mi { display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid var(--border-light); }
    .mi:last-child { border-bottom: none; padding-bottom: 0; }
    .mn { font-size: 14px; font-weight: 700; color: var(--text-primary); }
    .mr { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
    .ibtn { padding: 9px 16px; background: var(--primary); color: white; border: none; border-radius: var(--radius-md); font-family: var(--font-body); font-size: 13px; font-weight: 700; cursor: pointer; transition: all var(--transition); white-space: nowrap; }
    .ibtn:hover { background: var(--primary-dark); }
  `;
  _nav(v) { this.dispatchEvent(new CustomEvent('navigate', { detail: { view: v }, bubbles: true, composed: true })); }
  render() {
    const d = empDash, mx = Math.max(...d.pipeline.map(s => s.count));
    return html`
      <div class="page">
        <div class="phdr"><div class="ptit">Employer Dashboard</div><div style="display:flex;gap:14px"><span style="font-size:22px;cursor:pointer">🔍</span><span style="font-size:22px;cursor:pointer">🔔</span></div></div>
        <div class="sgrid">
          <div class="sc"><div class="slbl">Active Posts</div><div class="sval">${d.activePosts}</div><div class="str up">↑ 2%</div></div>
          <div class="sc"><div class="slbl">Applicants</div><div class="sval">${d.applicants}</div><div class="str up">↑ 15%</div></div>
          <div class="sc" style="grid-column:1/-1"><div class="slbl">Interviews</div><div class="sval">${d.interviews}</div><div class="str dn">↓ 5%</div></div>
        </div>
        <div class="pcard">
          <div class="chdr"><div><div class="ctit">Pipeline Overview</div><div class="csub">Real-time candidate conversion</div></div><div class="tp">Last 30 days ▾</div></div>
          <div class="bars">${d.pipeline.map(s => html`<div class="bg"><div class="bar ${s.stage==='Interview'?'a':''}" style="height:${Math.round((s.count/mx)*100)}%" title="${s.stage}: ${s.count}"></div></div>`)}</div>
          <div class="slrow">${d.pipeline.map(s => html`<div class="sll ${s.stage==='Interview'?'a':''}">${s.stage}</div>`)}</div>
        </div>
        <div class="mcard">
          <div class="mhdr"><span class="ctit">Top Matches</span><button class="va">View All</button></div>
          ${d.topMatches.map(m => html`
            <div class="mi">
              <cp-avatar name="${m.name}" size="44"></cp-avatar>
              <div style="flex:1"><div class="mn">${m.name}</div><div class="mr">${m.role} · ${m.match}% match</div></div>
              <button class="ibtn">Quick Invite</button>
            </div>`)}
        </div>
      </div>`;
  }
}
customElements.define('view-employer-dashboard', ViewEmployerDashboard);
