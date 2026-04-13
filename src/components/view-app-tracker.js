// src/components/view-app-tracker.js
import { LitElement, html, css } from 'lit';
import { appData } from '../data/mock.js';

class ViewAppTracker extends LitElement {
  static styles = css`
    :host { display: block; }
    .page { max-width: 680px; margin: 0 auto; padding: 32px 24px 60px; }
    .ptit { font-family: var(--font-display); font-size: 22px; font-weight: 800; color: var(--text-primary); margin-bottom: 24px; }
    .card { background: white; border-radius: var(--radius-xl); padding: 28px; border: 1px solid var(--border-light); box-shadow: var(--shadow-md); }
    .jhdr { text-align: center; margin-bottom: 24px; }
    .clogo { width: 64px; height: 64px; border-radius: var(--radius-lg); background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 14px; border: 1px solid var(--border-light); }
    .jtit { font-family: var(--font-display); font-size: 22px; font-weight: 800; color: var(--text-primary); margin-bottom: 4px; }
    .jco { font-size: 14px; color: var(--text-secondary); margin-bottom: 12px; }
    .sbadge { display: inline-block; background: var(--bg-subtle); border-radius: var(--radius-md); padding: 7px 20px; font-size: 14px; font-weight: 600; color: var(--text-secondary); }
    .stepper { display: flex; align-items: center; margin: 28px 0; }
    .si { display: flex; flex-direction: column; align-items: center; flex: 1; position: relative; }
    .si::before { content: ''; position: absolute; top: 16px; right: 50%; left: -50%; height: 2px; background: var(--border); z-index: 0; }
    .si:first-child::before { display: none; }
    .si.done::before, .si.act::before { background: var(--primary); }
    .sc { width: 32px; height: 32px; border-radius: 50%; border: 2px solid var(--border); background: white; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; color: var(--text-muted); z-index: 1; position: relative; }
    .si.done .sc { background: var(--primary); border-color: var(--primary); color: white; }
    .si.act .sc { background: white; border-color: var(--primary); color: var(--primary); box-shadow: 0 0 0 4px rgba(13,45,94,.12); }
    .sl { font-size: 10px; font-weight: 700; letter-spacing: .05em; text-transform: uppercase; color: var(--text-muted); margin-top: 7px; text-align: center; }
    .si.done .sl, .si.act .sl { color: var(--primary); }
    .rmsg { background: var(--bg-subtle); border-radius: var(--radius-lg); padding: 18px; margin-bottom: 24px; display: flex; gap: 14px; }
    .rname { font-size: 14px; font-weight: 700; color: var(--text-primary); }
    .rrole { font-size: 12px; color: var(--text-muted); margin-bottom: 10px; }
    .rtxt { font-size: 13px; color: var(--text-secondary); line-height: 1.6; font-style: italic; }
    .tltit { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 16px; }
    .tlitem { display: flex; gap: 14px; margin-bottom: 16px; position: relative; }
    .tlitem::before { content: ''; position: absolute; left: 7px; top: 24px; bottom: -8px; width: 2px; background: var(--border); }
    .tlitem:last-child::before { display: none; }
    .tldot { width: 16px; height: 16px; border-radius: 50%; background: var(--border); flex-shrink: 0; margin-top: 2px; z-index: 1; }
    .tldot.a { background: var(--primary); }
    .tlev { font-size: 14px; font-weight: 600; color: var(--text-primary); }
    .tlt { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
  `;
  render() {
    const a = appData;
    return html`
      <div class="page">
        <div class="ptit">Application Status</div>
        <div class="card">
          <div class="jhdr">
            <div class="clogo">🔴</div>
            <div class="jtit">${a.title}</div>
            <div class="jco">${a.company} · ${a.location}</div>
            <span class="sbadge">In Progress</span>
          </div>
          <div class="stepper">
            ${a.steps.map((s, i) => { const d = i < a.currentStep, ac = i === a.currentStep; return html`<div class="si ${d?'done':''} ${ac?'act':''}"><div class="sc">${d?'✓':ac?'📋':i===4?'⭐':''}</div><div class="sl">${s.toUpperCase()}</div></div>`; })}
          </div>
          <div class="rmsg">
            <cp-avatar name="${a.recruiter.name}" size="44"></cp-avatar>
            <div style="flex:1">
              <div class="rname">${a.recruiter.name}</div>
              <div class="rrole">${a.recruiter.role}</div>
              <div class="rtxt">"${a.message}"</div>
            </div>
            <div style="font-size:22px;cursor:pointer;flex-shrink:0">💬</div>
          </div>
          <div class="tltit">Timeline of Events</div>
          ${a.timeline.map(ev => html`
            <div class="tlitem">
              <div class="tldot ${ev.active?'a':''}"></div>
              <div><div class="tlev">${ev.event}</div><div class="tlt">${ev.time}</div></div>
            </div>`)}
        </div>
      </div>`;
  }
}
customElements.define('view-app-tracker', ViewAppTracker);
