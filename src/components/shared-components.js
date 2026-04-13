// src/components/shared-components.js
// Reusable primitive UI components
import { LitElement, html, css } from 'lit';

// ── cp-avatar ──────────────────────────────────────────────
class CpAvatar extends LitElement {
  static properties = { name: {}, size: { type: Number } };
  static styles = css`
    :host { display: inline-block; }
    .av { border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: var(--font-display); font-weight: 700; color: white; flex-shrink: 0; }
  `;
  get initials() { return (this.name || 'U').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase(); }
  get bg() {
    const c = ['#0d2d5e','#1e6bdc','#0ea5aa','#7c3aed','#db2777'];
    let h = 0;
    for (const ch of (this.name || '')) h = (h * 31 + ch.charCodeAt(0)) % c.length;
    return c[h];
  }
  render() {
    const s = this.size || 40, fs = Math.round(s * 0.36);
    return html`<div class="av" style="width:${s}px;height:${s}px;font-size:${fs}px;background:${this.bg}">${this.initials}</div>`;
  }
}
customElements.define('cp-avatar', CpAvatar);

// ── cp-progress-ring ───────────────────────────────────────
class CpProgressRing extends LitElement {
  static properties = { value: { type: Number }, size: { type: Number }, color: {} };
  static styles = css`
    :host { display: inline-block; }
    .wrap { position: relative; display: inline-flex; align-items: center; justify-content: center; }
    .lbl { position: absolute; font-family: var(--font-display); font-weight: 800; color: var(--primary); }
  `;
  render() {
    const s = this.size || 80, r = s / 2 - 6, c = 2 * Math.PI * r;
    const fill = c - (c * (this.value || 0)) / 100, fs = Math.round(s * 0.22);
    return html`
      <div class="wrap" style="width:${s}px;height:${s}px">
        <svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" style="transform:rotate(-90deg)">
          <circle cx="${s/2}" cy="${s/2}" r="${r}" fill="none" stroke="#e2e8f0" stroke-width="8"/>
          <circle cx="${s/2}" cy="${s/2}" r="${r}" fill="none" stroke="${this.color||'var(--primary)'}" stroke-width="8" stroke-dasharray="${c}" stroke-dashoffset="${fill}" stroke-linecap="round"/>
        </svg>
        <div class="lbl" style="font-size:${fs}px">${this.value}%</div>
      </div>`;
  }
}
customElements.define('cp-progress-ring', CpProgressRing);

// ── cp-toggle ──────────────────────────────────────────────
class CpToggle extends LitElement {
  static properties = { checked: { type: Boolean } };
  static styles = css`
    :host { display: inline-block; cursor: pointer; }
    .t { width: 44px; height: 24px; border-radius: 12px; background: var(--border); position: relative; transition: background var(--transition); }
    .t.on { background: var(--accent); }
    .th { width: 18px; height: 18px; border-radius: 50%; background: white; position: absolute; top: 3px; left: 3px; transition: transform var(--transition); box-shadow: 0 1px 4px rgba(0,0,0,.15); }
    .t.on .th { transform: translateX(20px); }
  `;
  _t() { this.checked = !this.checked; this.dispatchEvent(new CustomEvent('change', { detail: this.checked })); }
  render() { return html`<div class="t ${this.checked?'on':''}" @click=${this._t}><div class="th"></div></div>`; }
}
customElements.define('cp-toggle', CpToggle);
