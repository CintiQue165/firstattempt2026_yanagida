// src/components/view-post-job.js
import { LitElement, html, css } from 'lit';

class ViewPostJob extends LitElement {
  static properties = { step: { type: Number }, form: { state: true }, submitted: { type: Boolean } };
  constructor() {
    super(); this.step = 1; this.submitted = false;
    this.form = { jobTitle: '', employmentType: '', location: 'onsite', showSalary: true, alumniExclusive: false, description: '', salaryMin: '', salaryMax: '' };
  }
  static styles = css`
    :host { display: block; }
    .page { max-width: 680px; margin: 0 auto; padding: 32px 24px 100px; }
    .crow { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
    .cbtn { background: none; border: none; cursor: pointer; font-size: 22px; color: var(--text-muted); }
    .plbl { font-family: var(--font-display); font-size: 17px; font-weight: 700; color: var(--text-primary); }
    .pdots { display: flex; gap: 8px; justify-content: center; margin-bottom: 32px; }
    .dot { width: 28px; height: 6px; border-radius: 3px; background: var(--border); transition: background var(--transition); }
    .dot.a { background: var(--primary); } .dot.d { background: var(--accent-light); }
    .stit { font-family: var(--font-display); font-size: 28px; font-weight: 800; color: var(--text-primary); margin-bottom: 6px; }
    .ssub { font-size: 14px; color: var(--text-secondary); margin-bottom: 28px; }
    .field { margin-bottom: 22px; }
    label { display: block; font-size: 13px; font-weight: 700; color: var(--text-primary); margin-bottom: 8px; }
    input, select, textarea { width: 100%; padding: 13px 16px; border: 1.5px solid var(--border); border-radius: var(--radius-md); font-family: var(--font-body); font-size: 14px; color: var(--text-primary); background: white; outline: none; transition: border-color var(--transition); box-sizing: border-box; }
    input:focus, select:focus, textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px rgba(30,107,220,.1); }
    textarea { min-height: 120px; resize: vertical; }
    .lgrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
    .lbtn { border: 1.5px solid var(--border); background: white; border-radius: var(--radius-md); padding: 14px 10px; cursor: pointer; font-family: var(--font-body); font-size: 13px; font-weight: 600; color: var(--text-secondary); display: flex; flex-direction: column; align-items: center; gap: 6px; transition: all var(--transition); }
    .lbtn:hover { border-color: var(--accent); }
    .lbtn.a { border-color: var(--primary); background: rgba(13,45,94,.04); color: var(--primary); box-shadow: 0 0 0 1px var(--primary); }
    .topt { display: flex; align-items: center; gap: 14px; background: white; border-radius: var(--radius-md); padding: 16px 18px; border: 1px solid var(--border-light); margin-bottom: 10px; }
    .tico { width: 36px; height: 36px; background: var(--bg-subtle); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
    .ttit { font-size: 14px; font-weight: 700; color: var(--text-primary); }
    .tsub { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
    .srow { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .trow { display: flex; align-items: center; justify-content: space-between; margin-top: 20px; }
    .tavs { display: flex; }
    .cta { position: fixed; bottom: 0; left: var(--nav-width); right: 0; background: white; border-top: 1px solid var(--border); padding: 16px 24px; box-shadow: 0 -4px 20px rgba(13,45,94,.08); }
    .cbtn2 { width: 100%; padding: 15px; background: var(--primary); color: white; border: none; border-radius: var(--radius-md); font-family: var(--font-body); font-size: 15px; font-weight: 700; cursor: pointer; transition: all var(--transition); }
    .cbtn2:hover { background: var(--primary-dark); }
    .dn { text-align: center; font-size: 12px; color: var(--text-muted); margin-top: 8px; }
    .ov { position: fixed; inset: 0; background: rgba(13,45,94,.85); display: flex; align-items: center; justify-content: center; z-index: 100; }
    .scard { background: white; border-radius: var(--radius-xl); padding: 48px 40px; text-align: center; max-width: 380px; animation: pi .3s ease; }
    @keyframes pi { from { transform: scale(.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
    .sicon { font-size: 56px; margin-bottom: 18px; }
    .stitle { font-family: var(--font-display); font-size: 24px; font-weight: 800; color: var(--text-primary); margin-bottom: 10px; }
    .ssub2 { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }
    .closebtn { margin-top: 24px; width: 100%; padding: 13px; background: var(--primary); color: white; border: none; border-radius: var(--radius-md); cursor: pointer; font-family: var(--font-body); font-size: 14px; font-weight: 700; }
    @media (max-width: 768px) { .cta { left: 0; } }
  `;
  _nav(v) { this.dispatchEvent(new CustomEvent('navigate', { detail: { view: v }, bubbles: true, composed: true })); }
  _next() { if (this.step < 4) this.step++; else this.submitted = true; }
  _s1() {
    const f = this.form;
    return html`
      <div class="stit">Basic Information</div>
      <p class="ssub">Step 1 of 4: Tell us the fundamentals of the role you're hiring for.</p>
      <div class="field"><label>Job Title</label><input type="text" placeholder="e.g. Senior Product Designer" .value=${f.jobTitle} @input=${e => this.form = { ...f, jobTitle: e.target.value }}/></div>
      <div class="field"><label>Employment Type</label><select @change=${e => this.form = { ...f, employmentType: e.target.value }}><option value="">Select employment type</option><option>Full-time</option><option>Part-time</option><option>Contract</option><option>Internship</option></select></div>
      <div class="field"><label>Location Preference</label>
        <div class="lgrid">${['onsite','remote','hybrid'].map(l => html`<button class="lbtn ${f.location===l?'a':''}" @click=${() => this.form={...f,location:l}}><span style="font-size:22px">${l==='onsite'?'🏢':l==='remote'?'☁️':'🔄'}</span>${l.charAt(0).toUpperCase()+l.slice(1)}</button>`)}</div>
      </div>
      <div class="topt"><div class="tico">💰</div><div style="flex:1"><div class="ttit">Show salary range</div><div class="tsub">Recommended for 2x more applications</div></div><cp-toggle .checked=${f.showSalary} @change=${e => this.form={...f,showSalary:e.detail}}></cp-toggle></div>
      <div class="topt"><div class="tico">🎓</div><div style="flex:1"><div class="ttit">Alumni Exclusive</div><div class="tsub">Only show this role to verified alumni</div></div><cp-toggle .checked=${f.alumniExclusive} @change=${e => this.form={...f,alumniExclusive:e.detail}}></cp-toggle></div>`;
  }
  _s2() {
    const f = this.form;
    return html`
      <div class="stit">Job Description</div>
      <p class="ssub">Step 2 of 4: Describe the role in detail.</p>
      <div class="field"><label>Description</label><textarea placeholder="Describe the role, responsibilities, and what makes it exciting..." .value=${f.description} @input=${e => this.form={...f,description:e.target.value}}></textarea></div>
      <div class="field"><label>Required Degree</label><select><option>Select degree requirement</option><option>Bachelor's</option><option>Master's</option><option>PhD</option><option>Any Degree</option></select></div>
      <div class="field"><label>Required Skills</label><input type="text" placeholder="e.g. React, Figma, Product Strategy (comma-separated)"/></div>`;
  }
  _s3() {
    const f = this.form;
    return html`
      <div class="stit">Compensation</div>
      <p class="ssub">Step 3 of 4: Set your budget and timeline.</p>
      <div class="field"><label>Salary Range (Annual USD)</label><div class="srow"><input type="number" placeholder="Min (e.g. 80000)" .value=${f.salaryMin} @input=${e=>this.form={...f,salaryMin:e.target.value}}/><input type="number" placeholder="Max (e.g. 120000)" .value=${f.salaryMax} @input=${e=>this.form={...f,salaryMax:e.target.value}}/></div></div>
      <div class="field"><label>Application Deadline</label><input type="date"/></div>`;
  }
  _s4() {
    const f = this.form;
    return html`
      <div class="stit">Review &amp; Submit</div>
      <p class="ssub">Step 4 of 4: Review your job post before submitting.</p>
      <div style="background:var(--bg-subtle);border-radius:var(--radius-lg);padding:20px">
        <div style="font-family:var(--font-display);font-size:18px;font-weight:800;margin-bottom:12px">${f.jobTitle||'Untitled Position'}</div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;color:var(--text-secondary)">
          <span>💼 ${f.employmentType||'—'}</span><span>📍 ${f.location}</span>
          <span>💰 ${f.salaryMin?`$${f.salaryMin}–$${f.salaryMax}`:'Not specified'}</span>
          ${f.alumniExclusive?html`<span style="color:var(--accent)">🎓 Alumni Exclusive</span>`:''}
        </div>
        ${f.description?html`<p style="margin-top:14px;font-size:13px;color:var(--text-secondary);line-height:1.6">${f.description.slice(0,200)}</p>`:''}
      </div>
      <div style="margin-top:16px;padding:16px;background:#fff7ed;border-radius:var(--radius-md);border:1px solid #fed7aa;font-size:13px;color:#92400e">⏳ This job post will be reviewed by our admin team before going live. Usually within 24 hours.</div>`;
  }
  render() {
    return html`
      <div class="page">
        <div class="crow"><button class="cbtn" @click=${()=>this._nav('employer-dashboard')}>✕</button><span class="plbl">Post a Career Opportunity</span><div style="width:22px"></div></div>
        <div class="pdots">${[1,2,3,4].map(n=>html`<div class="dot ${n===this.step?'a':n<this.step?'d':''}"></div>`)}</div>
        ${this.step===1?this._s1():this.step===2?this._s2():this.step===3?this._s3():this._s4()}
        <div class="trow">
          <div class="tavs">
            <cp-avatar name="Team A" size="32"></cp-avatar>
            <cp-avatar name="Team B" size="32" style="margin-left:-10px"></cp-avatar>
            <cp-avatar name="Team C" size="32" style="margin-left:-10px"></cp-avatar>
          </div>
          <span style="font-size:13px;color:var(--text-muted);font-weight:600">Hiring Team (4)</span>
        </div>
      </div>
      <div class="cta">
        <button class="cbtn2" @click=${this._next}>${this.step<4?'Continue →':'Submit for Admin Approval'}</button>
        <p class="dn">Drafts are saved automatically as you type.</p>
      </div>
      ${this.submitted?html`
        <div class="ov"><div class="scard">
          <div class="sicon">🚀</div><div class="stitle">Submitted for Review</div>
          <p class="ssub2">Your job posting has been submitted. Our team will review and approve it within 24 hours.</p>
          <button class="closebtn" @click=${()=>{this.submitted=false;this._nav('employer-dashboard')}}>Back to Dashboard</button>
        </div></div>`:''}`;
  }
}
customElements.define('view-post-job', ViewPostJob);
