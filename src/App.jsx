import React, { useState, useEffect, useRef } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Icons ────────────────────────────────────────────────────────────────────
const Sun = (p) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
  </svg>
);
const Moon = (p) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);
const Linkedin = (p) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const Mail = (p) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);
const ChevronDown = (p) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6"/>
  </svg>
);
const ExternalLink = (p) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);
const ArrowRight = (p) => (
  <svg {...p} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const cvData = {
  name: "Adeetya Choubey",
  location: "Bhopal, Madhya Pradesh, India",
  profile: {
    intro: "I am a math undegrad, at IISER Bhopal.",
    interests: "I am interested in algebra. To be specific, my interests are in homological algebra, and algebraic geometry with a lot of categorical flavor.",
    ambition: "Apart from academics, I enjoy football, table tennis, badminton and some board games. I am recently exploring a lot of music, outside of my usual interests, like Indian classical and Rock, and I enjoy working on creative personal projects from time to time."
  },
  research: [{
    title: "Exploring Integrality and Genus of some specific Cayley Graphs",
    guide: "Guide: Prof. Ashish Upadhyay",
    description: "Cayley graphs are graphs which exhibit the nature of action of a group G on a set S, which is closed under inverses (typically generating set). A graph is said to be integral if each of the eigenvalues of its Adjacency Matrix is an integer. The genus of a graph is the minimum number of handles that must be added to a sphere to embed the graph on the resulting surface without any edge crossings. The goal was to work towards finding out the fields for which the 'generalised' cayley graphs are integral and what genus do they have."
  }],
  
  education: [
    { institution: "Indian Institute of Science Education and Research, Bhopal", degree: "BS-MS (Dual Degree), Major: Mathematics", duration: "2022 – 2027 (Expected)", grades: ["Cumulative performance: 8.81 / 10"] },
    { institution: "Puna International School, Gandhinagar", degree: "Senior Secondary (CBSE), Science Stream", duration: "2020 – 2022" },
    { institution: "Kendriya Vidyalaya", degree: "Secondary School (CBSE)", duration: "2016 – 2020" }
  ],
  responsibilities: [
    { role: "Department Representative, Math Dept.", institution: "IISER Bhopal", duration: "Sep 2024 – Sep 2025",
      description: "Elected representative for the batch of 2022, responsible for facilitating student concerns and academic feedback between students and faculty." },
    { role: "Core Member, Math Club", institution: "IISER Bhopal", duration: "Jun 2024 – Jul 2025",
      description: "Actively involved in organising guest lectures, weekly academic discussions, and student outreach events to foster a mathematical community." },
    { role: "Peer Counselor", institution: "IISER Bhopal", duration: "Jul 2023 – Jul 2025",
      description: "Part of the Institute Counselling Cell, offering peer support and guidance to students on academic and personal issues." }
  ],
  openboard: {
    role: "Co-founder, Openboard",
    institution: "IISER Bhopal",
    duration: "Ongoing",
    cofounder: { name: "Samriddha", url: "https://samriddhas-quantum-realm.vercel.app/" },
    website: "https://openboard-web.vercel.app/",
    description: "Along with my friend Samriddha we have started an independent initiative to let students come forward and speak their minds about topics they are passionate about, preferably to a general audience.",
    mission: "Openboard is a student-run platform at IISER Bhopal dedicated to independent, idea-driven talks. We believe that intellectual curiosity should have an outlet beyond the classroom; a space where students can address a general audience on topics they genuinely care about, spanning mathematics, science, philosophy, art, and beyond.",
    talks: [
      { title: "The Probabilistic Method", speaker: "Adeetya Choubey", description: "The inaugural Openboard talk. The probabilistic method is a non-constructive technique in combinatorics and graph theory for proving the existence of a combinatorial object with certain properties." }
    ]
  },
  academicExperiences: {
    internships: [
      { title: "Summer Intern", institution: "Institute of Science, Banaras Hindu University", duration: "May 2025 – Present",
        description: "This project began with a unilateral focus on Algebraic Topology, building a strong foundation leading up to Homotopy Theory and Homology. The first phase involved studying standard textbooks and exploring papers presenting both classical problems and modern perspectives in the field. Currently, the focus has shifted towards problem-solving and applying these theoretical tools to tackle more advanced challenges." },
      { title: "Summer Intern", institution: "Institute of Science, Banaras Hindu University", duration: "May – July 2024",
        description: "This project focused on building a foundational understanding of Braid Theory, the development of related algorithms, and exploring its applications. The work involved tackling key problems such as the word problem and the conjugacy problem, studying knot invariants, and delving into other introductory topics in Knot Theory." }
    ],
    summerSchools: [
      { title: "Summer Program", institution: "TIFR — Centre for Applicable Mathematics", duration: "June – July 2025",
        description: "The program included short courses on RKHS, Geometric Measure Theory, Geometric Function Theory, Gibbs Measure and Entropy, Multiscale problems in PDE, Microlocal Analysis and Inverse Problems, along with several keynote lectures on ongoing research in Analysis and Combinatorics." },
      { title: "Mathematics Summer Program", institution: "Indraprastha Institute of Information Technology, Delhi", duration: "June 2024",
        description: "Two week residential summer program covering some elementary aspects of Analysis, Algebra, Topology. This program included daily lectures on the aforementioned topics, along with problem solving sessions." }
    ]
  },
  events: [
    { title: "The Probabilistic Method", tag: "Openboard Talk",
      description: "Gave the first Openboard talk. More about that talk can be looked at on the Openboard website.",
      link: { url: "https://openboard-web.vercel.app/", text: "Openboard website" } },
    { title: "खेल-culus", tag: "Organised",
      description: "खेल, in Hindi, stands for sport. खेल-culus (khel-culus; /kʰeːl/) represents the treatise of calculus as a sport — the name for the integration bee held during the annual math fest, Continuum, organised by the department of math at IISER Bhopal. I organised the event, along with Yash Sharma, to fruition despite several unavoidable obstacles." },
    { title: "Big-Tac-Toe", tag: "Organised",
      description: "A wordplay on Big + Tic-tac-toe — another name for ultimate tic-tac-toe. Held at Continuum in collaboration with the board games club, Ingenium. The event featured a knockout stage with Saurav Kanetkar emerging as the Big-Tac-Toe champion, 2025 edition.",
      link: { url: "https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe", text: "Ultimate Tic-Tac-Toe" } },
    { title: "Realizing Grassmannian as a Projective Variety and the Segre embedding", tag: "Seminar Talk",
      description: "Department Seminar presentation on the classical result that the Grassmannian Gr(k, n) embeds into projective space via the Plücker embedding, making it a projective variety. The focus then shifted to discussing the Segre embedding and how it helps to see product of two projective spaces as a projective variety embedded into a much larger projective space." }
  ],
  contact: { email: "adeetya22@iiserb.ac.in", linkedin: "https://www.linkedin.com/in/adeetya-choubey-6b2a44254/" }
};

const navPages = [
  { label: 'AcadEx',    path: '/acadex',    desc: 'Academic internships and summer schools.' },
  { label: 'Research',  path: '/research',  desc: 'Research projects.' },
  { label: 'Events',    path: '/events',    desc: 'Academic and extracurricular events I\'ve organised.' },
  { label: 'Resources', path: '/resources', desc: 'Curated resources for various math topics.' },
  { label: 'OpenBoard', path: '/openboard', desc: 'An independent student-led ideas initiative.' },
  { label: 'Contact',   path: '/contact',   desc: 'Get in touch for collaborations or inquiries.' },
];

const bentoCategories = [
  { category: "Algebra",                  icon: "𝔸", span: 2},
  { category: "Analysis",                  icon: "∫", span: 1},
  { category: "Topology",                  icon: "𝕋", span: 1},
  { category: "Algebraic Geometry",        icon: "𝕍", span: 1},
  { category: "Homological Algebra",       icon: "⟶", span: 1},
  { category: "Category Theory",           icon: "⊸", span: 1},
  { category: "Foundations & Discrete",    icon: "#",  span: 2},
  { category: "Miscellaneous",             icon: "∞",  span: 1},
];

// ─── Hooks ────────────────────────────────────────────────────────────────────
const useTheme = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => { setTheme(localStorage.getItem('theme') || 'light'); }, []);
  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return { theme, toggleTheme: () => setTheme(p => p === 'light' ? 'dark' : 'light') };
};

// ─── CSS ──────────────────────────────────────────────────────────────────────
const CSS = `
  :root {
    --bg:      #FFFFF0;
    --surface: #FDFDF5;
    --ink:     #1C1012;
    --ink2:    #4A2D33;
    --ink3:    #9B7A80;
    --accent:  #722F37;
    --border:  #E8DECE;
    --sh-sm:   0 1px 4px rgba(114,47,55,0.07);
    --sh-md:   0 4px 24px rgba(114,47,55,0.10);
    --sh-lg:   0 14px 48px rgba(114,47,55,0.13);
    --fd: 'Cormorant Garamond', Georgia, serif;
    --fb: 'Jost', system-ui, sans-serif;
    --r:  7px;
  }
  .dark {
    --bg:      #1A1714;
    --surface: #221E1A;
    --ink:     #F0EDE8;
    --ink2:    #C8BAB8;
    --ink3:    #7A6A6D;
    --accent:  #A84050;
    --border:  #352E29;
    --sh-sm:   0 1px 4px rgba(0,0,0,0.28);
    --sh-md:   0 4px 24px rgba(0,0,0,0.32);
    --sh-lg:   0 14px 48px rgba(0,0,0,0.40);
  }
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; zoom: 1.1; }
  body { background:var(--bg); color:var(--ink); font-family:var(--fb); -webkit-font-smoothing:antialiased; transition:background 0.4s,color 0.4s; margin:0; }

  /* Grain overlay */
  .grain::after {
    content:''; position:fixed; inset:0; pointer-events:none; z-index:9999; opacity:0.032;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size:200px 200px;
  }

  /* Keyframes */
  @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  @keyframes pulse  { 0%,100%{opacity:1} 50%{opacity:0.45} }

  .au  { animation:fadeUp 0.85s cubic-bezier(0.16,1,0.3,1) both; }
  .d1  { animation-delay:0.08s; }
  .d2  { animation-delay:0.18s; }
  .d3  { animation-delay:0.30s; }
  .d4  { animation-delay:0.44s; }
  .d5  { animation-delay:0.60s; }
  .d6  { animation-delay:0.76s; }

  /* Scroll reveal */
  .sr { opacity:0; transform:translateY(18px); transition:opacity 0.75s cubic-bezier(0.16,1,0.3,1),transform 0.75s cubic-bezier(0.16,1,0.3,1); }
  .sr.in { opacity:1; transform:translateY(0); }

  /* Paper card */
  .card { background:var(--surface); border:1px solid var(--border); border-radius:var(--r); box-shadow:var(--sh-sm); transition:box-shadow 0.35s ease,transform 0.35s ease; }
  .card:hover { box-shadow:var(--sh-lg); transform:translateY(-2px); }

  /* Nav: inner pages */
  .ni { position:relative; background:none; border:none; cursor:pointer; font-family:var(--fb); font-weight:500; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:var(--ink2); transition:color 0.25s; padding:3px 0; text-decoration:none; display:inline-block; }
  .ni::after { content:''; position:absolute; bottom:0; left:0; width:0; height:1px; background:var(--accent); transition:width 0.3s cubic-bezier(0.16,1,0.3,1); }
  .ni:hover { color:var(--ink); }
  .ni:hover::after,.ni.active::after { width:100%; }
  .ni.active { color:var(--accent); }

  /* Nav: landing */
  .lni { position:relative; background:none; border:none; cursor:pointer; font-family:var(--fb); font-weight:300; font-size:15px; letter-spacing:0.04em; color:var(--ink2); transition:color 0.3s; padding:5px 0; text-decoration:none; display:inline-block; }
  .lni::after { content:''; position:absolute; bottom:0; left:0; width:0; height:1px; background:var(--accent); transition:width 0.4s cubic-bezier(0.16,1,0.3,1); }
  .lni:hover { color:var(--ink); }
  .lni:hover::after { width:100%; }

  /* Theme toggle */
  .tt { width:34px; height:34px; border-radius:50%; border:1px solid var(--border); background:none; cursor:pointer; display:flex; align-items:center; justify-content:center; color:var(--ink2); transition:border-color 0.25s,color 0.25s; flex-shrink:0; }
  .tt:hover { border-color:var(--accent); color:var(--accent); }

  /* Eyebrow label */
  .eb { font-family:var(--fb); font-size:10px; font-weight:600; letter-spacing:0.24em; text-transform:uppercase; color:var(--accent); }

  /* Display font helper */
  .df { font-family:var(--fd); }

  /* Timeline dot + line */
  .tl { position:relative; padding-left:22px; }
  .tl::before { content:''; position:absolute; left:0; top:10px; width:5px; height:5px; border-radius:50%; background:var(--accent); }
  .tl::after { content:''; position:absolute; left:2px; top:18px; bottom:-18px; width:1px; background:var(--border); }
  .tl:last-child::after { display:none; }

  /* Inline link */
  .lnk { color:var(--accent); text-decoration:none; border-bottom:1px solid transparent; transition:border-color 0.2s; }
  .lnk:hover { border-bottom-color:var(--accent); }

  /* Divider */
  .dv { border:none; border-top:1px solid var(--border); }

  /* Intro quote style */
  .iq { font-family:var(--fd); font-size:clamp(1.15rem,2.2vw,1.45rem); font-style:italic; font-weight:400; line-height:1.7; color:var(--ink); }

  /* Contact link block */
  .clink { display:flex; align-items:center; gap:14px; padding:14px 20px; border:1px solid var(--border); border-radius:var(--r); text-decoration:none; transition:border-color 0.25s, background 0.25s; }
  .clink:hover { border-color:var(--accent); background:var(--bg); }

  /* Responsive header layout */
  .hdr-inner { display:flex; justify-content:space-between; align-items:center; padding:15px 0; gap:20px; }
  .hdr-right { display:flex; align-items:center; gap:18px; }
  .hdr-nav { display:flex; flex-wrap:wrap; gap:4px 18px; justify-content:flex-end; align-items:center; }

  /* Bento grid */
  .bento-grid { display:grid; gap:14px; grid-template-columns:repeat(4, 1fr); }
  .bento-span-2 { grid-column: span 2; }
  .bento-card { background:var(--surface); border:1px solid var(--border); border-radius:calc(var(--r) + 2px); padding:26px 22px 22px; transition:box-shadow 0.35s,transform 0.3s; position:relative; overflow:hidden; }
  .bento-card:hover { box-shadow:var(--sh-md); transform:translateY(-3px); }
  .bento-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg, var(--accent), transparent); opacity:0; transition:opacity 0.3s; }
  .bento-card:hover::before { opacity:1; }
  .bento-icon { font-size:2rem; margin-bottom:12px; font-family:var(--fd); line-height:1; color:var(--accent); opacity:0.75; }
  .bento-wip { display:inline-flex; align-items:center; gap:6px; font-size:0.72rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--ink3); border:1px solid var(--border); border-radius:20px; padding:3px 10px; margin-top:10px; }
  .wip-dot { width:6px; height:6px; border-radius:50%; background:var(--accent); opacity:0.6; animation:pulse 2s ease-in-out infinite; }

  /* OpenBoard tag */
  .ob-tag { display:inline-flex; align-items:center; gap:5px; font-size:0.72rem; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:var(--accent); border:1px solid var(--accent); border-radius:20px; padding:3px 10px; opacity:0.8; }

  /* Event tag */
  .ev-tag { display:inline-block; font-size:0.7rem; font-weight:600; letter-spacing:0.14em; text-transform:uppercase; color:var(--accent); border:1px dashed var(--accent); border-radius:20px; padding:2px 9px; margin-bottom:10px; opacity:0.75; }

  /* Crimson CTA button */
  .cta-btn { display:inline-flex; align-items:center; gap:8px; background:var(--accent); color:#fff; border:none; border-radius:var(--r); padding:10px 20px; font-family:var(--fb); font-size:0.82rem; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; cursor:pointer; text-decoration:none; transition:opacity 0.2s,transform 0.2s; }
  .cta-btn:hover { opacity:0.88; transform:translateY(-1px); }

  /* Grassmannian card accent border */
  .grass-card { background:var(--surface); border:1px solid var(--border); border-left:3px solid var(--accent); border-radius:var(--r); box-shadow:var(--sh-sm); padding:36px 32px; transition:box-shadow 0.3s; }
  .grass-card:hover { box-shadow:var(--sh-md); }

  @media(max-width:768px) {
    .bento-grid { grid-template-columns:repeat(2,1fr); }
    .bento-span-2 { grid-column: span 2; }
  }
  @media(max-width:480px) {
    .bento-grid { grid-template-columns:1fr; }
    .bento-span-2 { grid-column: span 1; }
  }
  @media(max-width:600px) {
    .hdr-inner { flex-direction:column; align-items:flex-start; gap:10px; padding:12px 0; }
    .hdr-right { width:100%; justify-content:space-between; }
    .hdr-nav { justify-content:flex-start; gap:4px 14px; }
  }
`;

// ─── Small helpers ─────────────────────────────────────────────────────────────
const ThemeToggle = ({ theme, toggleTheme }) => (
  <button onClick={toggleTheme} className="tt" aria-label="Toggle theme">
    {theme === 'light' ? <Moon /> : <Sun />}
  </button>
);

const Divider = ({ style = {} }) => <hr className="dv" style={style} />;

const SectionHead = ({ eyebrow, title }) => (
  <FadeIn style={{ marginBottom: 52 }}>
    <div className="eb" style={{ marginBottom: 10 }}>{eyebrow}</div>
    <h2 className="df" style={{ fontSize: 'clamp(2.3rem,5vw,3.1rem)', fontWeight: 600, lineHeight: 1.08, color: 'var(--ink)', letterSpacing: '-0.01em' }}>{title}</h2>
  </FadeIn>
);

const FadeIn = ({ children, delay = 0, style = {}, className = '' }) => {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.unobserve(el); } }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`sr${v ? ' in' : ''}${className ? ' ' + className : ''}`} style={{ ...style, transitionDelay: v ? `${delay}ms` : '0ms' }}>
      {children}
    </div>
  );
};

// ─── Page transition wrapper ───────────────────────────────────────────────────
const pageVar = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.22 } },
};
const PageWrapper = ({ children }) => (
  <motion.div variants={pageVar} initial="initial" animate="animate" exit="exit">
    {children}
  </motion.div>
);

// ─── Navbar ───────────────────────────────────────────────────────────────────
const Navbar = ({ theme, toggleTheme }) => {
  const location = useLocation();
  return (
    <header style={{ position:'sticky', top:0, zIndex:20, background:'color-mix(in srgb, var(--bg) 86%, transparent)', backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)', borderBottom:'1px solid var(--border)' }}>
      <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
        <div className="hdr-inner">
          <Link to="/" style={{ textDecoration:'none' }}>
            <div className="df" style={{ fontSize:'1.2rem', fontWeight:600, color:'var(--ink)', letterSpacing:'-0.01em', lineHeight:1.2 }}>{cvData.name}</div>
            <div style={{ fontSize:'9px', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--ink3)', marginTop:2 }}>Mathematics · IISER Bhopal</div>
          </Link>
          <div className="hdr-right">
            <nav className="hdr-nav">
              {navPages.map(({ label, path }) => (
                <Link key={path} to={path} className={`ni${location.pathname === path ? ' active' : ''}`}>{label}</Link>
              ))}
            </nav>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer style={{ borderTop:'1px solid var(--border)', padding:'22px 24px', textAlign:'center' }}>
    <p style={{ fontSize:'0.76rem', color:'var(--ink3)', letterSpacing:'0.05em' }}>
      © {new Date().getFullYear()} Adeetya Choubey &nbsp;·&nbsp; You may use, share, and adapt with proper credits.
    </p>
  </footer>
);

// ─── Home Page ────────────────────────────────────────────────────────────────
const HomePage = ({ theme, toggleTheme }) => {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="grain" style={{ minHeight:'100vh', background:'var(--bg)', color:'var(--ink)', fontFamily:'var(--fb)' }}>
      {/* Faint grid bg */}
      <div style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:0,
        backgroundImage:'linear-gradient(rgba(114,47,55,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(114,47,55,0.025) 1px,transparent 1px)',
        backgroundSize:'48px 48px' }} />

      <div style={{ position:'absolute', top:20, right:24, zIndex:10 }}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* ── Hero ── */}
      <section style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'80px 24px 40px', textAlign:'center', position:'relative', zIndex:1 }}>

        {/* Ornament */}
        <div className="au eb" style={{ marginBottom:22, display:'flex', alignItems:'center', gap:14, justifyContent:'center' }}>
          <span style={{ display:'block', width:40, height:1, background:'var(--border)' }} />
          Mathematics
          <span style={{ display:'block', width:40, height:1, background:'var(--border)' }} />
        </div>

        {/* Name */}
        <h1 className="df au d1" style={{ fontSize:'clamp(3rem,13vw,7.5rem)', fontWeight:700, lineHeight:0.93, color:'var(--ink)', marginBottom:26, letterSpacing:'-0.02em' }}>
          Adeetya
        </h1>

        {/* Subtitle */}
        <p className="au d2" style={{ fontSize:'16px', fontWeight:400, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink3)', marginBottom:32 }}>
          Algebra&nbsp;&nbsp;·&nbsp;&nbsp;Topology&nbsp;&nbsp;·&nbsp;&nbsp;Category Theory
        </p>

        {/* Integrated Bio Sketch */}
        <p className="au d3 df" style={{ maxWidth:560, fontSize:'clamp(1rem,2vw,1.2rem)', fontStyle:'italic', color:'var(--ink2)', lineHeight:1.72, marginBottom:16 }}>
          {cvData.profile.intro}
        </p>
        <p className="au d3" style={{ maxWidth:520, fontSize:'0.9rem', color:'var(--ink3)', lineHeight:1.75, marginBottom:44 }}>
          {cvData.profile.interests}
        </p>

        {/* Decorative rule */}
        <div className="au d4" style={{ display:'flex', margin:'0 auto 44px', maxWidth:320, height:1, background:'linear-gradient(to right, transparent, var(--border), transparent)' }} />

        {/* Navigation */}
        <nav className="au d4" style={{ display:'flex', flexWrap:'wrap', gap:'12px 32px', justifyContent:'center', marginBottom:24 }}>
          {navPages.map(({ label, path }) => (
            <Link key={path} to={path} className="lni"
              onMouseEnter={() => setHovered(label)}
              onMouseLeave={() => setHovered(null)}>
              {label}
            </Link>
          ))}
        </nav>

        {/* Hover description */}
        <div className="au d5" style={{ height:28, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <p className="df" style={{ fontSize:'0.88rem', fontStyle:'italic', color:'var(--ink3)', transition:'opacity 0.35s ease', opacity: hovered ? 1 : 0 }}>
            {hovered ? navPages.find(p => p.label === hovered)?.desc : ''}
          </p>
        </div>

        {/* Scroll cue */}
        <div className="au d6" style={{ marginTop:40, display:'flex', flexDirection:'column', alignItems:'center', gap:6, color:'var(--ink3)', fontSize:'0.72rem', letterSpacing:'0.14em', textTransform:'uppercase' }}>
          <span>Scroll</span>
          <ChevronDown style={{ animation:'fadeUp 1.2s ease infinite alternate' }} />
        </div>
      </section>

      {/* ── Below-fold content ── */}
      <section style={{ maxWidth:960, margin:'0 auto', padding:'20px 24px 80px', position:'relative', zIndex:1 }}>


        {/* Bio + Education Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:20, marginBottom:20 }}>

          {/* Full bio card */}
          <FadeIn delay={80}>
            <div className="card" style={{ padding:'32px 28px', height:'100%' }}>
              <div className="eb" style={{ marginBottom:14 }}>Bio-Sketch</div>
              <p className="iq" style={{ marginBottom:18 }}>{cvData.profile.intro}</p>
              <Divider style={{ margin:'18px 0' }} />
              <p style={{ color:'var(--ink2)', lineHeight:1.8, fontSize:'0.91rem' }}>{cvData.profile.interests}</p>
              <Divider style={{ margin:'18px 0' }} />
              <p style={{ color:'var(--ink2)', lineHeight:1.8, fontSize:'0.91rem' }}>{cvData.profile.ambition}</p>
            </div>
          </FadeIn>

          {/* Education card */}
          <FadeIn delay={160}>
            <div className="card" style={{ padding:'32px 28px', height:'100%' }}>
              <div className="eb" style={{ marginBottom:18 }}>Education</div>
              <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
                {cvData.education.map(edu => (
                  <div key={edu.institution} className="tl">
                    <div className="df" style={{ fontSize:'1rem', fontWeight:600, color:'var(--ink)', marginBottom:4, lineHeight:1.3 }}>{edu.institution}</div>
                    <div style={{ fontSize:'0.82rem', color:'var(--ink2)', marginBottom:3 }}>{edu.degree}</div>
                    <div style={{ fontSize:'0.76rem', color:'var(--accent)', fontWeight:500, letterSpacing:'0.05em', marginBottom:6 }}>{edu.duration}</div>
                    {edu.grades?.map(g => (
                      <span key={g} style={{ display:'inline-block', fontSize:'0.75rem', color:'var(--ink2)', background:'var(--bg)', border:'1px solid var(--border)', borderRadius:20, padding:'2px 10px' }}>{g}</span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Positions of Responsibility */}
        <FadeIn delay={220}>
          <div className="card" style={{ padding:'32px 28px' }}>
            <div className="eb" style={{ marginBottom:18 }}>Positions of Responsibility</div>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))', gap:24 }}>
              {cvData.responsibilities.map(resp => (
                <div key={resp.role} style={{ borderLeft:'2px solid var(--border)', paddingLeft:16 }}>
                  <div className="df" style={{ fontSize:'0.98rem', fontWeight:600, color:'var(--ink)', marginBottom:4, lineHeight:1.3 }}>{resp.role}</div>
                  <div style={{ fontSize:'0.79rem', color:'var(--ink2)', marginBottom:2 }}>{resp.institution}</div>
                  <div style={{ fontSize:'0.74rem', color:'var(--accent)', fontWeight:500, letterSpacing:'0.05em', marginBottom:10 }}>{resp.duration}</div>
                  <p style={{ fontSize:'0.85rem', color:'var(--ink2)', lineHeight:1.75 }}>{resp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
};

// ─── Academic Experiences Page ─────────────────────────────────────────────────
const AcademicExperiencesPage = () => (
  <PageWrapper>
    <SectionHead eyebrow="Academic Experiences" title="Where I've learned" />
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))', gap:20 }}>
      <FadeIn delay={80}>
        <div className="card" style={{ padding:'34px 30px', height:'100%' }}>
          <div className="eb" style={{ marginBottom:20 }}>Research Internships</div>
          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {cvData.academicExperiences.internships.map((exp, i) => (
              <div key={exp.duration}>
                <div className="df" style={{ fontSize:'1.05rem', fontWeight:600, color:'var(--ink)', marginBottom:4, lineHeight:1.3 }}>{exp.title}</div>
                <div style={{ fontSize:'0.83rem', color:'var(--ink2)', marginBottom:2 }}>{exp.institution}</div>
                <div style={{ fontSize:'0.77rem', color:'var(--accent)', fontWeight:500, letterSpacing:'0.05em', marginBottom:12 }}>{exp.duration}</div>
                <p style={{ fontSize:'0.88rem', color:'var(--ink2)', lineHeight:1.8 }}>{exp.description}</p>
                {i < cvData.academicExperiences.internships.length - 1 && <Divider style={{ margin:'26px 0' }} />}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      <FadeIn delay={160}>
        <div className="card" style={{ padding:'34px 30px', height:'100%' }}>
          <div className="eb" style={{ marginBottom:20 }}>Summer Schools</div>
          <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
            {cvData.academicExperiences.summerSchools.map((exp, i) => (
              <div key={exp.institution}>
                <div className="df" style={{ fontSize:'1.05rem', fontWeight:600, color:'var(--ink)', marginBottom:4, lineHeight:1.3 }}>{exp.title}</div>
                <div style={{ fontSize:'0.83rem', color:'var(--ink2)', marginBottom:2 }}>{exp.institution}</div>
                <div style={{ fontSize:'0.77rem', color:'var(--accent)', fontWeight:500, letterSpacing:'0.05em', marginBottom:12 }}>{exp.duration}</div>
                <p style={{ fontSize:'0.88rem', color:'var(--ink2)', lineHeight:1.8 }}>{exp.description}</p>
                {i < cvData.academicExperiences.summerSchools.length - 1 && <Divider style={{ margin:'26px 0' }} />}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </PageWrapper>
);

// ─── Research Page ─────────────────────────────────────────────────────────────
const ResearchPage = () => (
  <PageWrapper>
    <SectionHead eyebrow="Research" title="What I work on" />

    {cvData.research.map((item, i) => (
      <FadeIn key={item.title} delay={80 * i}>
        <div className="card" style={{ padding:'40px 36px', marginBottom:20 }}>
          <div className="eb" style={{ marginBottom:12 }}>Current Project</div>
          <h3 className="df" style={{ fontSize:'clamp(1.25rem,3vw,1.75rem)', fontWeight:600, color:'var(--ink)', marginBottom:6, lineHeight:1.3 }}>{item.title}</h3>
          <div style={{ fontSize:'0.82rem', color:'var(--ink2)', fontWeight:500, marginBottom:2 }}>{item.guide}</div>
          <Divider style={{ margin:'22px 0' }} />
          <p style={{ fontSize:'0.95rem', color:'var(--ink2)', lineHeight:1.85 }}>
            <strong style={{ color:'var(--ink)', fontWeight:600 }}>Cayley graphs</strong> exhibit the nature of the action of a group G on a set S closed under inverses. A graph is <strong style={{ color:'var(--ink)', fontWeight:600 }}>integral</strong> if each eigenvalue of its adjacency matrix is an integer. The <strong style={{ color:'var(--ink)', fontWeight:600 }}>genus</strong> is the minimum number of handles that must be added to a sphere to embed the graph on the resulting surface without edge crossings. I use computational and algebraic tools to explore these two properties of Cayley graphs on finite abelian groups.
          </p>
          <p style={{ marginTop:14, fontSize:'0.85rem', fontStyle:'italic', color:'var(--ink3)' }}>More about my work updating soon.</p>
        </div>
      </FadeIn>
    ))}

    
  </PageWrapper>
);

// ─── Events Page ───────────────────────────────────────────────────────────────
const EventsPage = () => (
  <PageWrapper>
    <SectionHead eyebrow="Events" title="Things I've made happen" />
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:20 }}>
      {cvData.events.map((ev, i) => (
        <FadeIn key={ev.title} delay={80 * i}>
          <div className="card" style={{ padding:'30px 26px', height:'100%' }}>
            <div className="ev-tag">{ev.tag}</div>
            <h3 className="df" style={{ fontSize:'1.4rem', fontWeight:600, color:'var(--ink)', marginBottom:16, lineHeight:1.2 }}>{ev.title}</h3>
            <p style={{ fontSize:'0.88rem', color:'var(--ink2)', lineHeight:1.8 }}>
              {ev.link ? (
                <>
                  {ev.description.split(ev.link.text)[0]}
                  <a href={ev.link.url} target="_blank" rel="noopener noreferrer" className="lnk">{ev.link.text}</a>
                  {ev.description.split(ev.link.text)[1]}
                </>
              ) : ev.description}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  </PageWrapper>
);

// ─── Resources Page (Bento) ───────────────────────────────────────────────────
const ResourcesPage = () => (
  <PageWrapper>
    <SectionHead eyebrow="Resources" title="A reading list" />
    <FadeIn delay={60} style={{ marginBottom:28 }}>
      <p style={{ fontSize:'0.9rem', color:'var(--ink3)', fontStyle:'italic', lineHeight:1.7 }}>
        Curated references for each area are being compiled and will appear here. Each section is a work in progress — check back soon.
      </p>
    </FadeIn>

    <div className="bento-grid">
      {bentoCategories.map((cat, i) => (
        <FadeIn key={cat.category} delay={60 * i} className={cat.span === 2 ? 'bento-span-2' : ''}>
          <div className="bento-card" style={{ height:'100%' }}>
            <div className="bento-icon">{cat.icon}</div>
            <div className="eb" style={{ marginBottom:8 }}>{cat.category}</div>
            <p style={{ fontSize:'0.84rem', color:'var(--ink3)', lineHeight:1.7, marginBottom:0 }}>{cat.desc}</p>
            <div className="bento-wip">
              <span className="wip-dot" />
              Work in Progress
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  </PageWrapper>
);

// ─── OpenBoard Page ───────────────────────────────────────────────────────────
const OpenBoardPage = () => (
  <PageWrapper>
    <SectionHead eyebrow="OpenBoard" title="Ideas, spoken freely" />

    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:20, marginBottom:20 }}>

      {/* About OpenBoard */}
      <FadeIn delay={80}>
        <div className="card" style={{ padding:'34px 30px', height:'100%' }}>
          <div style={{ display:'flex', gap:10, alignItems:'center', marginBottom:20 }}>
            <div className="eb">Initiative</div>
            <span className="ob-tag">Student-run</span>
          </div>

          <p className="iq" style={{ marginBottom:20 }}>
            A space for students to speak about what they care about, to a general audience.
          </p>
          <Divider style={{ margin:'20px 0' }} />
          <p style={{ fontSize:'0.9rem', color:'var(--ink2)', lineHeight:1.82 }}>
            {cvData.openboard.mission}
          </p>
          <div style={{ marginTop:24 }}>
            <a href={cvData.openboard.website} target="_blank" rel="noopener noreferrer" className="cta-btn">
              Visit Openboard <ExternalLink />
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Co-founder section */}
      <FadeIn delay={160}>
        <div className="card" style={{ padding:'34px 30px', height:'100%' }}>
          <div className="eb" style={{ marginBottom:16 }}>Co-founder</div>
          <div className="df" style={{ fontSize:'1.5rem', fontWeight:600, color:'var(--ink)', marginBottom:4 }}>{cvData.openboard.role}</div>
          <div style={{ fontSize:'0.82rem', color:'var(--ink2)', marginBottom:2 }}>{cvData.openboard.institution}</div>
          <div style={{ fontSize:'0.77rem', color:'var(--accent)', fontWeight:500, letterSpacing:'0.05em', marginBottom:20 }}>{cvData.openboard.duration}</div>
          <p style={{ fontSize:'0.9rem', color:'var(--ink2)', lineHeight:1.82 }}>
            Along with my friend{' '}
            <a href={cvData.openboard.cofounder.url} target="_blank" rel="noopener noreferrer" className="lnk">{cvData.openboard.cofounder.name}</a>
            , we started an independent initiative to let students come forward and speak their minds about topics they are passionate about, preferably to a general audience.
          </p>
          <Divider style={{ margin:'22px 0' }} />
          <div className="eb" style={{ marginBottom:12 }}>From the team</div>
          <p style={{ fontSize:'0.84rem', color:'var(--ink3)', fontStyle:'italic', lineHeight:1.75 }}>
            We welcome all disciplines. If you have an idea you'd like to talk about, reach out.
          </p>
        </div>
      </FadeIn>
    </div>

    {/* Talks section */}
    <FadeIn delay={240}>
      <div className="card" style={{ padding:'34px 30px' }}>
        <div className="eb" style={{ marginBottom:20 }}>Talks so far</div>
        <div style={{ display:'flex', flexDirection:'column', gap:0 }}>
          {cvData.openboard.talks.map((talk, i) => (
            <div key={talk.title}>
              <div style={{ display:'flex', flexWrap:'wrap', gap:12, alignItems:'flex-start' }}>
                <div style={{ flex:1, minWidth:220 }}>
                  <div className="df" style={{ fontSize:'1.1rem', fontWeight:600, color:'var(--ink)', marginBottom:4, lineHeight:1.3 }}>{talk.title}</div>
                  <div style={{ fontSize:'0.8rem', color:'var(--accent)', fontWeight:500, letterSpacing:'0.05em', marginBottom:10 }}>{talk.speaker}</div>
                  <p style={{ fontSize:'0.88rem', color:'var(--ink2)', lineHeight:1.8 }}>{talk.description}</p>
                </div>
                <a href={cvData.openboard.website} target="_blank" rel="noopener noreferrer" className="lnk" style={{ fontSize:'0.78rem', display:'flex', alignItems:'center', gap:5, marginTop:4 }}>
                  View <ExternalLink />
                </a>
              </div>
              {i < cvData.openboard.talks.length - 1 && <Divider style={{ margin:'24px 0' }} />}
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  </PageWrapper>
);

// ─── Contact Page (full viewport centered) ────────────────────────────────────
const ContactPage = () => (
  <PageWrapper>
    <div style={{
      display:'flex', alignItems:'center', justifyContent:'center',
      minHeight:'calc(100vh - 62px)',  /* subtract sticky navbar height */
      padding:'40px 24px',
    }}>
      <div style={{ width:'100%', maxWidth:480 }}>

        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:40 }}>
          <div className="eb" style={{ marginBottom:10 }}>Contact</div>
          <h2 className="df" style={{ fontSize:'clamp(2.4rem,5vw,3.2rem)', fontWeight:600, lineHeight:1.08, color:'var(--ink)', letterSpacing:'-0.01em', marginBottom:0 }}>
            Get in touch
          </h2>
        </div>

        {/* Card */}
        <FadeIn delay={80}>
          <div className="card" style={{ padding:'40px 36px' }}>
            <p className="df" style={{ fontSize:'1.08rem', fontStyle:'italic', color:'var(--ink2)', marginBottom:32, lineHeight:1.72, textAlign:'center' }}>
              Feel free to reach out for collaborations, academic discussions, or just a friendly exchange of ideas.
            </p>

            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              <a href={`mailto:${cvData.contact.email}`} className="clink">
                <Mail style={{ color:'var(--accent)', flexShrink:0 }} />
                <span style={{ fontSize:'0.88rem', color:'var(--ink2)' }}>{cvData.contact.email}</span>
              </a>
              <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="clink">
                <Linkedin style={{ color:'var(--accent)', flexShrink:0 }} />
                <span style={{ fontSize:'0.88rem', color:'var(--ink2)' }}>LinkedIn Profile</span>
              </a>
            </div>

            <Divider style={{ margin:'28px 0 20px' }} />

            <div style={{ textAlign:'center', fontSize:'0.78rem', color:'var(--ink3)', letterSpacing:'0.05em' }}>
              {cvData.location}
            </div>
          </div>
        </FadeIn>

        {/* Social footnote */}
        <p style={{ textAlign:'center', marginTop:20, fontSize:'0.78rem', color:'var(--ink3)', fontStyle:'italic' }}>
          Response times vary — email is most reliable.
        </p>
      </div>
    </div>
  </PageWrapper>
);

// ─── Inner layout (Navbar + main + footer) ────────────────────────────────────
const InnerLayout = ({ theme, toggleTheme, children }) => (
  <>
    <Navbar theme={theme} toggleTheme={toggleTheme} />
    <main style={{ maxWidth:1100, margin:'0 auto', padding:'60px 24px 88px' }}>
      {children}
    </main>
    <Footer />
  </>
);

// ─── Scroll to top on route change ────────────────────────────────────────────
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// ─── Animated Routes ──────────────────────────────────────────────────────────
function AnimatedRoutes({ theme, toggleTheme }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>

        {/* Home — no navbar */}
        <Route path="/" element={<HomePage theme={theme} toggleTheme={toggleTheme} />} />

        {/* Inner pages — wrapped in Navbar layout */}
        <Route path="/acadex" element={
          <InnerLayout theme={theme} toggleTheme={toggleTheme}>
            <AcademicExperiencesPage />
          </InnerLayout>
        } />
        <Route path="/research" element={
          <InnerLayout theme={theme} toggleTheme={toggleTheme}>
            <ResearchPage />
          </InnerLayout>
        } />
        <Route path="/events" element={
          <InnerLayout theme={theme} toggleTheme={toggleTheme}>
            <EventsPage />
          </InnerLayout>
        } />
        <Route path="/resources" element={
          <InnerLayout theme={theme} toggleTheme={toggleTheme}>
            <ResourcesPage />
          </InnerLayout>
        } />
        <Route path="/openboard" element={
          <InnerLayout theme={theme} toggleTheme={toggleTheme}>
            <OpenBoardPage />
          </InnerLayout>
        } />
        <Route path="/contact" element={
          <InnerLayout theme={theme} toggleTheme={toggleTheme}>
            <ContactPage />
          </InnerLayout>
        } />

        {/* Fallback */}
        <Route path="*" element={
          <InnerLayout theme={theme} toggleTheme={toggleTheme}>
            <div style={{ textAlign:'center', padding:'80px 24px' }}>
              <div className="eb" style={{ marginBottom:12 }}>404</div>
              <h2 className="df" style={{ fontSize:'2.5rem', color:'var(--ink)', marginBottom:20 }}>Page not found</h2>
              <Link to="/" className="cta-btn" style={{ display:'inline-flex' }}>Go home</Link>
            </div>
          </InnerLayout>
        } />

      </Routes>
    </AnimatePresence>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const { theme, toggleTheme } = useTheme();

  // Inject Google Fonts
  useEffect(() => {
    const href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Jost:wght@300;400;500;600&display=swap";
    if (!document.querySelector(`link[href="${href}"]`)) {
      const l = document.createElement('link');
      l.href = href; l.rel = 'stylesheet';
      document.head.appendChild(l);
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <style>{CSS}</style>
      <div className="grain" style={{ minHeight:'100vh', background:'var(--bg)', color:'var(--ink)', fontFamily:'var(--fb)', transition:'background 0.4s,color 0.4s' }}>
        <AnimatedRoutes theme={theme} toggleTheme={toggleTheme} />
      </div>
    </BrowserRouter>
  );
}
