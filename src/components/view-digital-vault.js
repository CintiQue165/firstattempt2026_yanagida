// src/components/view-digital-vault.js
import { LitElement, html, css } from 'lit';
import { vaultDocs } from '../data/mock.js';

class ViewDigitalVault extends LitElement {
  static properties = { autoLock: { type: Boolean } };
  constructor() { super(); this.autoLock = true; }
  static styles = css`
    :host { display: block; }
    .page { max-width: 680px; margin: 0 auto; padding: 32px 24px 60px; }
    .hdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
    .hl { display: flex; align-items: center; gap: 14px; }
    .vicon { width: 46px; height: 46px; background: var(--primary); border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; font-size: 22px; color: white; }
    .vtit { font-family: var(--font-display); font-size: 20px; font-weight: 800; color: var(--text-primary); }
    .vsub { font-size: 12px; color: var(--text-muted); font-weight: 600; letter-spacing: .06em; text-transform: uppercase; }
    .sbanner { display: flex; align-items: center; justify-content: space-between; background: linear-gradient(135deg,#eff6ff,#dbeafe); border: 1.5px solid #bfdbfe; border-radius: var(--radius-lg); padding: 18px 22px; margin-bottom: 28px; }
    .slbl { font-size: 12px; font-weight: 700; color: var(--primary); letter-spacing: .06em; text-transform: uppercase; margin-bottom: 4px; }
    .sval { font-family: var(--font-display); font-size: 20px; font-weight: 800; color: var(--primary); }
    .shdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
    .stit { font-family: var(--font-display); font-size: 18px; font-weight: 700; color: var(--text-primary); }
    .cbadge { background: var(--bg-subtle); border-radius: 100px; padding: 3px 12px; font-size: 12px; font-weight: 700; color: var(--text-secondary); }
    .dcard { background: white; border-radius: var(--radius-lg); padding: 20px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); margin-bottom: 12px; transition: all var(--transition); }
    .dcard:hover { box-shadow: var(--shadow-md); border-color: rgba(30,107,220,.15); }
    .dtop { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 14px; }
    .dico { width: 44px; height: 44px; background: #eff6ff; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: center; font-size: 22px; flex-shrink: 0; }
    .dname { font-family: var(--font-display); font-size: 15px; font-weight: 700; color: var(--text-primary); margin-bottom: 3px; }
    .dsub { font-size: 13px; color: var(--text-secondary); }
    .dver { display: flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 700; color: var(--success); letter-spacing: .05em; margin-top: 5px; }
    .dver::before { content: '✓'; display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; background: var(--success); border-radius: 50%; color: white; font-size: 9px; }
    .dact { display: flex; align-items: center; gap: 10px; }
    .abtn { width: 38px; height: 38px; border-radius: var(--radius-sm); background: var(--bg-subtle); border: none; cursor: pointer; font-size: 16px; display: flex; align-items: center; justify-content: center; transition: all var(--transition); }
    .abtn:hover { background: var(--primary); color: white; }
    .vbtn { margin-left: auto; padding: 9px 20px; background: var(--primary); color: white; border: none; border-radius: var(--radius-md); font-family: var(--font-body); font-size: 13px; font-weight: 700; cursor: pointer; transition: all var(--transition); }
    .vbtn:hover { background: var(--primary-dark); }
    .divider { height: 1px; background: var(--border-light); margin: 24px 0; }
    .alrow { display: flex; align-items: center; gap: 14px; background: white; border-radius: var(--radius-lg); padding: 18px 20px; border: 1px solid var(--border-light); }
    .alico { width: 38px; height: 38px; background: var(--bg-subtle); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; font-size: 18px; }
    .altit { font-size: 14px; font-weight: 700; color: var(--text-primary); }
    .alsub { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
  `;
  render() {
    return html`
      <div class="page">
        <div class="hdr">
          <div class="hl"><div class="vicon">🔒</div><div><div class="vtit">Digital Vault</div><div class="vsub">Secure Storage</div></div></div>
          <span style="font-size:22px;cursor:pointer">⚙️</span>
        </div>
        <div class="sbanner"><div><div class="slbl">Vault Status</div><div class="sval">Encrypted &amp; Secure</div></div><div style="font-size:36px">🛡️</div></div>
        <div class="shdr"><span class="stit">Verified Records</span><span class="cbadge">${vaultDocs.length} Items</span></div>
        ${vaultDocs.map(d => html`
          <div class="dcard">
            <div class="dtop"><div class="dico">${d.icon}</div><div><div class="dname">${d.title}</div><div class="dsub">${d.subtitle}</div><div class="dver">${d.verifiedDate}</div></div></div>
            <div class="dact"><button class="abtn">⬇️</button><button class="abtn">↗️</button><button class="vbtn">View</button></div>
          </div>`)}
        <div class="divider"></div>
        <div class="alrow">
          <div class="alico">🔐</div>
          <div style="flex:1"><div class="altit">Vault Auto-Lock</div><div class="alsub">Lock vault after 5 minutes of inactivity</div></div>
          <cp-toggle .checked=${this.autoLock} @change=${e => this.autoLock = e.detail}></cp-toggle>
        </div>
      </div>`;
  }
}
customElements.define('view-digital-vault', ViewDigitalVault);
