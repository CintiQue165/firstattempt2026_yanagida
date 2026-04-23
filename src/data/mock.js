// src/data/mock.js — All static mock data

export const currentUser = {
  name: 'Alex Johnson', graduationYear: 2020, gpa: 3.9,
  certificates: 12, honors: 5, verified: true,
  skills: ['Product Strategy', 'Data Analysis', 'SQL', 'Python', 'Project Management', 'UX Research'],
  academicHonors: [
    { icon: '🏆', title: "Dean's List", desc: 'Awarded for 6 consecutive semesters' },
    { icon: '🎓', title: 'Summa Cum Laude', desc: 'Top 1% of the graduating class' },
  ],
};

export const vaultDocs = [
  { id: 1, icon: '🎓', title: 'e-Diploma', subtitle: 'University of Excellence · 2023', verifiedDate: 'VERIFIED OCT 12' },
  { id: 2, icon: '📄', title: 'Academic Transcript', subtitle: 'Official Grade Report', verifiedDate: 'VERIFIED SEP 28' },
  { id: 3, icon: '☁️', title: 'AWS Cloud Practitioner', subtitle: 'Certification ID: AWS-88219', verifiedDate: 'VERIFIED AUG 15' },
];

export const jobListings = [
  { id: 1, logo: '🔷', title: 'Senior Product Designer', company: 'TechFlow Systems', location: 'San Francisco, CA', salary: '$140k–$180k', type: 'Full-time', posted: '2 days ago', match: 98, saved: false },
  { id: 2, logo: '🟢', title: 'Frontend Engineer (React)', company: 'Lumina Creative', location: 'Remote', salary: '$120k–$155k', type: 'Contract', posted: '5 hours ago', match: 92, saved: false },
  { id: 3, logo: '🔵', title: 'UX Research Lead', company: 'Blue Knight Corp', location: 'Austin, TX', salary: '$150k–$200k', type: 'Full-time', posted: '1 week ago', match: 89, saved: true },
];

export const jobDetail = {
  logo: '🔷', title: 'Senior Product Designer',
  company: 'TechFlow Inc.', location: 'San Francisco, CA',
  posted: '2 days ago', applicants: 142, match: 85,
  matchedSkills: ['React Basics', 'Motion Design', 'Figma', 'UX Writing', 'Prototyping', 'Design Systems'],
  gapSkills: ['Swift UI', 'Advanced Animation'],
  description: 'We are looking for a Senior Product Designer to join our core product team. You will be responsible for leading the design of new features from concept to execution, working closely with engineering and product management.',
  responsibilities: [
    'Drive the design vision for our flagship platform.',
    'Collaborate with cross-functional teams to define requirements.',
    'Create high-fidelity prototypes and design specifications.',
    'Mentor junior designers and contribute to our design system.',
  ],
};

export const appData = {
  title: 'Senior Software Engineer', company: 'Google', location: 'Mountain View, CA',
  steps: ['applied', 'viewed', 'shortlisted', 'interview', 'hired'],
  currentStep: 3,
  recruiter: { name: 'Sarah Jenkins', role: 'Senior Technical Recruiter' },
  message: "Hi Alex! Great news – the team was really impressed with your portfolio. We'd like to move forward with a technical interview. Are you available this Thursday?",
  timeline: [
    { event: 'Interview Invitation Sent', time: 'Today, 10:45 AM', active: true },
    { event: 'Application Shortlisted', time: 'Yesterday, 02:15 PM', active: false },
    { event: 'Resume Viewed by Hiring Manager', time: 'Oct 24, 2023', active: false },
    { event: 'Application Submitted', time: 'Oct 22, 2023', active: false },
  ],
};

export const empDash = {
  activePosts: 12, applicants: 458, interviews: 24,
  topMatches: [
    { name: 'Alex Morgan', role: 'Senior UX Designer', match: 96 },
    { name: 'Sarah Jenkins', role: 'Frontend Architect', match: 94 },
    { name: 'David Chen', role: 'Product Manager', match: 92 },
  ],
  pipeline: [
    { stage: 'Sourced', count: 145 }, { stage: 'Applied', count: 98 },
    { stage: 'Screened', count: 54 }, { stage: 'Interview', count: 24 },
    { stage: 'Offer', count: 8 },
  ],
};

export const applicantsData = [
  { id: 1, name: 'Alex Rivera', role: 'Senior Designer at TechFlow', match: 98, applied: '2h ago', skills: ['Figma', 'Prototyping', 'Design Ops'], saved: false },
  { id: 2, name: 'Sarah Jenkins', role: 'Product Designer at CreativeCo', match: 92, applied: '1d ago', skills: ['User Research', 'Adobe XD'], saved: false },
  { id: 3, name: 'Marcus Chen', role: 'UX Consultant (Freelance)', match: 85, applied: '3d ago', skills: ['Strategic Design', 'Workshop'], saved: false },
];

export const adminStats = {
  employmentRate: 94.2, totalPlacements: 1250, avgPackage: 85000, alumniNetwork: 15000,
  trendData: [42, 58, 52, 78, 68, 63],
  trendLabels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],
  sectors: [
    { name: 'Technology', pct: 45, color: '#0d2d5e' },
    { name: 'Finance', pct: 25, color: '#3b82f6' },
    { name: 'Healthcare', pct: 30, color: '#bfdbfe' },
  ],
  recentPlacements: [
    { name: 'Alex Johnson', cohort: "CS Class of '23", company: 'TechCorp Inc.', role: 'Full Stack Dev' },
    { name: 'Sarah Chen', cohort: "Data Science '23", company: 'FinEdge Solutions', role: 'Data Analyst' },
    { name: 'Marcus Wright', cohort: "Marketing '24", company: 'Creative Agency', role: 'Content Lead' },
  ],
};
