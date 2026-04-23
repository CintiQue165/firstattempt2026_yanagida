// src/components/view-instant-apply.js
import { LitElement, html, css } from 'lit';

class ViewInstantApply extends LitElement {
  static properties = { editing: { type: Boolean }, submitted: { type: Boolean }, letter: { state: true } };
  constructor() {
    super(); this.editing = false; this.submitted = false;
    this.letter = "Dear Hiring Committee, I am writing to express my strong interest in the Research Assistant position. My Master's in Computer Science has provided me with a deep foundation in algorithm design and machine learning, which I am eager to apply to your current project. I have previously worked on several collaborative academic papers and value the rigor of university research...";
  }
  static styles = css`
    :host { display: block; }
    .page { max-width: 680px; margin: 0 auto; padding: 32px 24px 120px; }
    .back { background: none; border: none; cursor: pointer; font-size: 14px; font-weight: 600; color: var(--text-secondary); display: flex; align-items: center; gap: 6px; font-family: var(--font-body); margin-bottom: 20px; padding: 0; }
    .ptit { font-family: var(--font-display); font-size: 22px; font-weight: 800; color: var(--text-primary); margin-bottom: 24px; }
    .psum { background: white; border-radius: var(--radius-xl); padding: 28px; border: 1px solid var(--border-light); box-shadow: var(--shadow-sm); text-align: center; margin-bottom: 16px; }
    .uname { font-family: var(--font-display); font-size: 22px; font-weight: 800; color: var(--text-primary); margin-top: 14px; margin-bottom: 4px; display: flex; align-items: center; justify-content: center; gap: 8px; }
    .vtag { display: inline-flex; align-items: center; gap: 4px; background: #dbeafe; color: #1d4ed8; border-radius: 100px; padding: 2px 10px; font-size: 11px; font-weight: 700; }
    .vbanner { background: white; border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); padding: 18px 20px; margin-bottom: 16px; }
    .vtit2 { font-family: var(--font-display); font-size: 14px; font-weight: 700; color: var(--text-primary); margin-bottom: 6px; }
    .vtxt { font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 10px; }
    .vcred { color: var(--accent); font-weight: 700; font-size: 13px; cursor: pointer; }
    .sec { background: white; border-radius: var(--radius-lg); padding: 22px; border: 1px solid var(--border-light); margin-bottom: 16px; }
    .stit { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--text-primary); margin-bottom: 14px; }
    .docitem { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--border-light); }
    .docitem:last-child { border-bottom: none; padding-bottom: 0; }
    .dname { font-size: 14px; font-weight: 600; color: var(--text-primary); }
    .ddt { font-size: 12px; color: var(--text-muted); }
    .dlbtn { background: none; border: none; cursor: pointer; font-size: 20px; color: var(--text-muted); }
    .chdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; }
    .editbtn { background: none; border: none; cursor: pointer; font-size: 13px; font-weight: 600; color: var(--accent); font-family: var(--font-body); display: flex; align-items: center; gap: 4px; }
    .ctxt { font-size: 13px; color: var(--text-secondary); line-height: 1.7; background: var(--bg-subtle); border-radius: var(--radius-md); padding: 14px; }
    textarea { width: 100%; font-family: var(--font-body); font-size: 13px; line-height: 1.7; color: var(--text-primary); background: var(--bg-subtle); border: 1.5px solid var(--accent); border-radius: var(--radius-md); padding: 14px; resize: vertical; min-height: 140px; outline: none; box-sizing: border-box; }
    .prev { display: flex; align-items: center; justify-content: center; gap: 8px; color: var(--accent); font-size: 14px; font-weight: 700; cursor: pointer; margin: 20px 0 14px; }
    .cta { position: fixed; bottom: 0; left: var(--nav-width); right: 0; background: white; border-top: 1px solid var(--border); padding: 16px 24px; box-shadow: 0 -4px 20px rgba(13,45,94,.08); }
    .sbtn { width: 100%; padding: 16px; background: var(--primary); color: white; border: none; border-radius: var(--radius-md); font-family: var(--font-body); font-size: 15px; font-weight: 700; cursor: pointer; transition: all var(--transition); }
    .sbtn:hover { background: var(--primary-dark); transform: translateY(-1px); }
    .ov { position: fixed; inset: 0; background: rgba(13,45,94,.85); display: flex; align-items: center; justify-content: center; z-index: 100; }
    .sc { background: white; border-radius: var(--radius-xl); padding: 48px 40px; text-align: center; max-width: 380px; animation: pi .3s ease; }
    @keyframes pi { from { transform: scale(.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .si { font-size: 56px; margin-bottom: 18px; }
    .st { font-family: var(--font-display); font-size: 24px; font-weight: 800; color: var(--text-primary); margin-bottom: 10px; }
    .ss { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }
    .cbtn { margin-top: 24px; width: 100%; padding: 13px; background: var(--primary); color: white; border: none; border-radius: var(--radius-md); cursor: pointer; font-family: var(--font-body); font-size: 14px; font-weight: 700; }
    @media (max-width: 768px) { .cta { left: 0; } }
  `;
  _nav(v) { this.dispatchEvent(new CustomEvent('navigate', { detail: { view: v }, bubbles: true, composed: true })); }
  render() {
    return html`
      <div class="page">
        <button class="back" @click=${() => this._nav('job-detail')}>←</button>
        <div class="ptit">Instant Application</div>
        <div class="psum">
          <cp-avatar name="Alex Knight" size="80"></cp-avatar>
          <div class="uname">Alex Knight <span class="vtag">✓ Verified</span></div>
          <p style="font-size:14px;color:var(--text-secondary)">Master of Computer Science</p>
        </div>
        <div class="vbanner">
          <div class="vtit2">University of Tech Verification</div>
          <p class="vtxt">This profile has been officially verified by the university registrar's office for the 2023-2024 academic year.</p>
          <span class="vcred">View Credentials →</span>
        </div>
        <div class="sec">
          <div class="stit">Academic Records</div>
          <div class="docitem"><span style="font-size:20px">📄</span><div style="flex:1"><div class="dname">Official Transcript.pdf</div><div class="ddt">Uploaded Oct 12, 2023</div></div><button class="dlbtn">⬇️</button></div>
          <div class="docitem"><span style="font-size:20px">🎓</span><div style="flex:1"><div class="dname">Bachelor Degree Certificate.pdf</div><div class="ddt">Uploaded Aug 05, 2023</div></div><button class="dlbtn">⬇️</button></div>
        </div>
        <div class="sec">
          <div class="chdr"><div class="stit" style="margin-bottom:0">Cover Letter</div><button class="editbtn" @click=${() => this.editing = !this.editing}>✏️ ${this.editing ? 'Done' : 'Edit'}</button></div>
          ${this.editing ? html`<textarea .value=${this.letter} @input=${e => this.letter = e.target.value}></textarea>` : html`<div class="ctxt">${this.letter}</div>`}
        </div>
        <div class="prev">👁️ Preview Application</div>
      </div>
      <div class="cta"><button class="sbtn" @click=${() => this.submitted = true}>Submit Application ➤</button></div>
      ${this.submitted ? html`
        <div class="ov"><div class="sc">
          <div class="si">🎉</div><div class="st">Application Submitted!</div>
          <p class="ss">Your verified Career Passport application has been sent. Track your progress in the Application Tracker.</p>
          <button class="cbtn" @click=${() => { this.submitted = false; this._nav('app-tracker'); }}>Track Application →</button>
        </div></div>` : ''}`;
  }
}
customElements.define('view-instant-apply', ViewInstantApply);
