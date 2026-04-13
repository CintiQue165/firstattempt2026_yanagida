// src/components/view-admin-analytics.js
import { LitElement, html, css } from 'lit';
import { adminStats } from '../data/mock.js';

class ViewAdminAnalytics extends LitElement {
  static styles = css`
    :host { display: block; }
    .page { max-width: 800px; margin: 0 auto; padding: 32px 24px 80px; }
    .phdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
    .ptit { font-family: var(--font-display); font-size: 22px; font-weight: 800; color: var(--text-primary); }
    .sgrid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-bottom: 20px; }
    .sc { background: white; border-radius: var(--radius-lg); padding: 20px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); }
    .slbl { font-size: 12px; font-weight: 600; color: var(--text-muted); letter-spacing: .04em; margin-bottom: 6px; }
    .sval { font-family: var(--font-display); font-size: 28px; font-weight: 800; color: var(--text-primary); line-height: 1; }
    .str { font-size: 12px; font-weight: 700; margin-top: 5px; }
    .ssub { font-size: 11px; color: var(--text-muted); margin-top: 4px; }
    .up { color: var(--success); } .dn { color: var(--danger); }
    .pb { height: 4px; background: var(--border); border-radius: 2px; margin-top: 8px; }
    .pf { height: 100%; background: var(--accent); border-radius: 2px; }
    .ccard { background: white; border-radius: var(--radius-lg); padding: 24px; border: 1px solid var(--border-light); margin-bottom: 20px; }
    .chdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
    .ctit { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--text-primary); }
    .pp { display: flex; align-items: center; gap: 6px; background: var(--bg-subtle); border-radius: var(--radius-sm); padding: 6px 12px; font-size: 12px; font-weight: 600; color: var(--text-secondary); cursor: pointer; border: none; font-family: var(--font-body); }
    .bchart { display: flex; align-items: flex-end; gap: 8px; height: 100px; margin-bottom: 10px; }
    .bg { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 6px; height: 100%; justify-content: flex-end; }
    .bar { width: 100%; border-radius: 4px 4px 0 0; min-height: 4px; transition: all var(--transition); }
    .xlbl { flex: 1; text-align: center; font-size: 10px; font-weight: 700; color: var(--text-muted); letter-spacing: .04em; }
    .dwrap { display: flex; flex-direction: column; align-items: center; margin-bottom: 20px; }
    .srow { display: flex; align-items: center; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid var(--border-light); }
    .srow:last-child { border-bottom: none; }
    .sleft { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--text-primary); font-weight: 500; }
    .sdot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
    .spct { font-family: var(--font-display); font-size: 14px; font-weight: 700; color: var(--text-primary); }
    .plcard { background: white; border-radius: var(--radius-lg); padding: 24px; border: 1px solid var(--border-light); }
    .plhdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
    .va { background: none; border: none; cursor: pointer; font-size: 13px; font-weight: 600; color: var(--accent); font-family: var(--font-body); }
    .thdr { display: grid; grid-template-columns: 2fr 2fr 2fr; gap: 10px; font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid var(--border-light); }
    .prow { display: grid; grid-template-columns: 2fr 2fr 2fr; gap: 10px; align-items: start; padding: 12px 0; border-bottom: 1px solid var(--border-light); }
    .prow:last-child { border-bottom: none; }
    .pcell { display: flex; align-items: flex-start; gap: 10px; }
    .pname { font-size: 13px; font-weight: 700; color: var(--text-primary); line-height: 1.2; }
    .pcoh { font-size: 11px; color: var(--text-muted); margin-top: 2px; }
    .pco { font-size: 13px; font-weight: 600; color: var(--text-primary); }
    .pro { font-size: 13px; color: var(--text-secondary); }
  `;
  _bc(i) { return ['#cbd5e1','#93c5fd','#94a3b8','#1e3a5f','#3b82f6','#64748b'][i % 6]; }
  render() {
    const s = adminStats, mx = Math.max(...s.trendData);
    return html`
      <div class="page">
        <div class="phdr">
          <div style="display:flex;align-items:center;gap:12px"><span style="font-size:24px">📊</span><span class="ptit">Admin Analytics</span></div>
          <div style="display:flex;gap:14px"><span style="font-size:22px;cursor:pointer">🔍</span><span style="font-size:22px;cursor:pointer">🔔</span></div>
        </div>
        <div class="sgrid">
          <div class="sc"><div class="slbl">Employment Rate</div><div class="sval">${s.employmentRate}%</div><div class="str up">+1.2%</div><div class="pb"><div class="pf" style="width:${s.employmentRate}%"></div></div></div>
          <div class="sc"><div class="slbl">Total Placements</div><div class="sval">${s.totalPlacements.toLocaleString()}</div><div class="str up">+5%</div><div class="ssub">vs last cohort</div></div>
          <div class="sc"><div class="slbl">Avg. Package</div><div class="sval">$${Math.round(s.avgPackage/1000)}k</div><div class="str dn">-2%</div><div class="ssub">Industry avg: $78k</div></div>
          <div class="sc"><div class="slbl">Alumni Network</div><div class="sval">${(s.alumniNetwork/1000).toFixed(0)}K</div><div class="str up">+10%</div><div class="ssub">Global reach</div></div>
        </div>
        <div class="ccard">
          <div class="chdr"><span class="ctit">Employment Trends</span><button class="pp">Last 6 Months ▾</button></div>
          <div class="bchart">${s.trendData.map((v,i) => html`<div class="bg"><div class="bar" style="height:${Math.round((v/mx)*100)}%;background:${this._bc(i)}"></div></div>`)}</div>
          <div style="display:flex">${s.trendLabels.map(l => html`<div class="xlbl">${l}</div>`)}</div>
        </div>
        <div class="ccard">
          <div class="ctit" style="margin-bottom:20px">Sector Distribution</div>
          <div class="dwrap">
            <svg width="160" height="160" viewBox="0 0 160 160" style="margin-bottom:16px">
              ${(() => { let off = 0; const r=60,cx=80,cy=80,c=2*Math.PI*r; return s.sectors.map(sec => { const d=(sec.pct/100)*c,g=c-d; const el=html`<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${sec.color}" stroke-width="20" stroke-dasharray="${d} ${g}" stroke-dashoffset="${-off}" style="transform:rotate(-90deg);transform-origin:50% 50%"/>`; off+=d; return el; }); })()}
              <text x="80" y="75" text-anchor="middle" font-family="Sora" font-size="22" font-weight="800" fill="#0d1b2e">45%</text>
              <text x="80" y="92" text-anchor="middle" font-family="DM Sans" font-size="11" font-weight="600" fill="#8fa0b5">TECH</text>
            </svg>
            <div style="width:100%">${s.sectors.map(sec => html`<div class="srow"><div class="sleft"><div class="sdot" style="background:${sec.color}"></div>${sec.name}</div><div class="spct">${sec.pct}%</div></div>`)}</div>
          </div>
        </div>
        <div class="plcard">
          <div class="plhdr"><span style="font-family:var(--font-display);font-size:16px;font-weight:700">Recent Placements</span><button class="va">View All</button></div>
          <div class="thdr"><span>STUDENT</span><span>COMPANY</span><span>ROLE</span></div>
          ${s.recentPlacements.map(p => html`
            <div class="prow">
              <div class="pcell"><cp-avatar name="${p.name}" size="36"></cp-avatar><div><div class="pname">${p.name}</div><div class="pcoh">${p.cohort}</div></div></div>
              <div class="pco">${p.company}</div>
              <div class="pro">${p.role}</div>
            </div>`)}
        </div>
      </div>`;
  }
}
customElements.define('view-admin-analytics', ViewAdminAnalytics);
