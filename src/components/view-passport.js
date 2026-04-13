// src/components/view-passport.js
import { LitElement, html, css } from 'lit';
import { currentUser } from '../data/mock.js';

class ViewPassport extends LitElement {
  static styles = css`
    :host { display: block; }
    .page { max-width: 680px; margin: 0 auto; padding: 36px 24px 80px; }
    .ptitle { font-family: var(--font-display); font-size: 13px; font-weight: 700; color: var(--text-muted); letter-spacing: .1em; text-transform: uppercase; margin-bottom: 24px; display: flex; align-items: center; gap: 12px; }
    .ptitle::after { content: ''; flex: 1; height: 1px; background: var(--border); }
    .profile-card { background: white; border-radius: var(--radius-xl); padding: 36px; border: 1px solid var(--border-light); box-shadow: var(--shadow-md); text-align: center; position: relative; overflow: hidden; }
    .profile-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 90px; background: linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 100%); }
    .av-wrap { position: relative; display: inline-block; margin-bottom: 14px; z-index: 1; }
    .av-ring { width: 92px; height: 92px; border-radius: 50%; background: var(--primary); display: flex; align-items: center; justify-content: center; border: 4px solid white; box-shadow: 0 4px 16px rgba(13,45,94,.2); font-family: var(--font-display); font-weight: 800; font-size: 32px; color: white; }
    .vdot { position: absolute; bottom: 2px; right: 2px; width: 24px; height: 24px; border-radius: 50%; background: var(--success); border: 3px solid white; display: flex; align-items: center; justify-content: center; font-size: 11px; color: white; }
    .uname { font-family: var(--font-display); font-size: 24px; font-weight: 800; color: var(--text-primary); margin-bottom: 6px; }
    .urole { font-size: 14px; color: var(--text-secondary); margin-bottom: 20px; }
    .gen-btn { display: flex; align-items: center; justify-content: center; gap: 10px; background: var(--primary); color: white; border: none; border-radius: var(--radius-md); padding: 14px 28px; font-family: var(--font-body); font-size: 15px; font-weight: 700; cursor: pointer; transition: all var(--transition); width: 100%; margin-bottom: 28px; }
    .gen-btn:hover { background: var(--primary-dark); transform: translateY(-1px); box-shadow: var(--shadow-md); }
    .stats-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-bottom: 28px; }
    .sbox { background: var(--bg-subtle); border-radius: var(--radius-md); padding: 16px 12px; text-align: center; }
    .snum { font-family: var(--font-display); font-size: 26px; font-weight: 800; color: var(--primary); }
    .slbl { font-size: 10px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; color: var(--text-muted); margin-top: 3px; }
    .sec { margin-bottom: 20px; text-align: left; }
    .sec-hdr { display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; }
    .sec-title { font-family: var(--font-display); font-size: 16px; font-weight: 700; color: var(--text-primary); }
    .lbtn { background: none; border: none; cursor: pointer; font-size: 13px; font-weight: 600; color: var(--accent); font-family: var(--font-body); }
    .honor { display: flex; align-items: center; gap: 14px; background: white; border-radius: var(--radius-md); padding: 14px 16px; border: 1px solid var(--border-light); margin-bottom: 8px; }
    .hicon { width: 40px; height: 40px; border-radius: var(--radius-sm); background: var(--bg-subtle); display: flex; align-items: center; justify-content: center; font-size: 20px; flex-shrink: 0; }
    .htit { font-size: 14px; font-weight: 700; color: var(--text-primary); }
    .hdesc { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
    .skills-wrap { display: flex; flex-wrap: wrap; gap: 8px; }
    .skill { background: var(--bg-subtle); border: 1px solid var(--border); border-radius: 100px; padding: 6px 16px; font-size: 13px; font-weight: 500; color: var(--text-secondary); cursor: default; transition: all var(--transition); }
    .skill:hover { background: var(--primary); color: white; border-color: var(--primary); }
    .add-s { background: none; border: 1.5px dashed var(--border); border-radius: 100px; padding: 6px 16px; font-size: 13px; color: var(--accent); cursor: pointer; font-family: var(--font-body); font-weight: 600; transition: all var(--transition); }
    .add-s:hover { border-color: var(--accent); }
  `;
  render() {
    const u = currentUser;
    return html`
      <div class="page">
        <div class="ptitle">Career Passport</div>
        <div class="profile-card">
          <div class="av-wrap"><div class="av-ring">AJ</div><div class="vdot">✓</div></div>
          <div class="uname">${u.name}</div>
          <div class="urole">Verified Alumnus · Class of ${u.graduationYear}</div>
          <button class="gen-btn">📄 Generate Professional CV</button>
          <div class="stats-row">
            <div class="sbox"><div class="snum">${u.gpa}</div><div class="slbl">GPA</div></div>
            <div class="sbox"><div class="snum">${u.certificates}</div><div class="slbl">Certificates</div></div>
            <div class="sbox"><div class="snum">${u.honors}</div><div class="slbl">Honors</div></div>
          </div>
          <div class="sec">
            <div class="sec-hdr"><span class="sec-title">Academic Honors</span><button class="lbtn">View All</button></div>
            ${u.academicHonors.map(h => html`<div class="honor"><div class="hicon">${h.icon}</div><div><div class="htit">${h.title}</div><div class="hdesc">${h.desc}</div></div></div>`)}
          </div>
          <div class="sec">
            <div class="sec-hdr"><span class="sec-title">Professional Skills</span><button class="lbtn">Edit</button></div>
            <div class="skills-wrap">${u.skills.map(s => html`<span class="skill">${s}</span>`)}<button class="add-s">+ Add Skill</button></div>
          </div>
        </div>
      </div>`;
  }
}
customElements.define('view-passport', ViewPassport);
