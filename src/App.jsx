import React from 'react';

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

// ─── Data ─────────────────────────────────────────────────────────────────────
const cvData = {
  name: "Adeetya Choubey",
  location: "Bhopal, Madhya Pradesh, India",
  profile: {
    intro: "I am a BS-MS student at the Department of Mathematics, IISER Bhopal.",
    interests: "I am interested in algebra. To be specific, my interests are in homological algebra, and algebraic geometry with a lot of categorical flavor.",
    ambition: "Apart from academics, I enjoy football, table tennis, badminton and some board games. I am recently exploring alot of music like indian classical, and I enjoy working on creative personal projects from time to time."
  },
  research: [{
    title: "Exploring Integrality and Genus of some specific Cayley Graphs",
    guide: "Guide: Prof. Ashish Upadhyay",
    description: "Cayley graphs are graphs which exhibit the nature of action of a group G on a set S, which is closed under inverses (typically generating set). A graph is said to be integral if each of the eigenvalues of its Adjacency Matrix is an integer. The genus of a graph is the minimum number of handles that must be added to a sphere to embed the graph on the resulting surface without any edge crossings. All of this needs to be said and done more precisely. I use computational and algebraic tools to explore these two properties of cayley graphs on finite abelian groups. (More about my work updating soon)"
  }],
  education: [
    { institution: "Indian Institute of Science Education and Research, Bhopal", degree: "BS-MS (Dual Degree), Major: Mathematics", duration: "2022 – 2027 (Expected)", grades: ["Cumulative performance: 8.81 / 10"] },
    { institution: "Puna International School, Gandhinagar", degree: "Senior Secondary (CBSE), Science Stream", duration: "2020 – 2022" },
    { institution: "Kendriya Vidyalaya", degree: "Secondary School (CBSE)", duration: "2016 – 2020" }
  ],
  responsibilities: [
    { role: "Co-founder, Openboard", institution: "IISER Bhopal", duration: "Ongoing", isOpenboard: true,
      description: "Along with my friend Samriddha we have started an independent initiative to let students come forward and speak their minds about topics they are passionate about, preferably to a general audience." },
    { role: "Department Representative, Math Dept.", institution: "IISER Bhopal", duration: "Sep 2024 – Sep 2025",
      description: "Elected representative for the 2022 batch, responsible for facilitating student concerns and academic feedback between students and faculty." },
    { role: "Core Member, Math Club", institution: "IISER Bhopal", duration: "Jun 2024 – Jul 2025",
      description: "Actively involved in organising guest lectures, weekly academic discussions, and student outreach events to foster a mathematical community." },
    { role: "Peer Counselor", institution: "IISER Bhopal", duration: "Jul 2023 – Jul 2025",
      description: "Part of the Institute Counselling Cell, offering peer support and guidance to students on academic and personal issues." }
  ],
  academicExperiences: {
    internships: [
      { title: "Summer Intern", institution: "Institute of Science, Banaras Hindu University", duration: "May 2025 – Present",
        description: "This project began with a unilateral focus on Algebraic Topology, building a strong foundation leading up to Homotopy Theory and Homology. The first phase involved studying standard textbooks and exploring papers presenting both classical problems and modern perspectives in the field. Currently, the focus has shifted towards problem-solving and applying these theoretical tools to tackle more advanced challenges." },
      { title: "Summer Intern", institution: "Institute of Science, Banaras Hindu University", duration: "May – July 2024",
        description: "This project focused on building a foundational understanding of Braid Theory, the development of related algorithms, and exploring its applications. The work involved tackling key problems such as the word problem and the conjugacy problem, studying knot invariants, and delving into other introductory topics in Knot Theory. Throughout course of this endeavour, I followed the book by Murasugi and Kurpita and other related references." }
    ],
    summerSchools: [
      { title: "Summer Program", institution: "TIFR — Centre for Applicable Mathematics", duration: "June – July 2025",
        description: "The program included courses on RKHS, Geometric Measure Theory, Geometric Function Theory, Gibbs Measure and Entropy, Multiscale problems in PDE, Microlocal Analysis and Inverse Problems, along with several keynote lectures on ongoing research in Analysis and Combinatorics." },
      { title: "Mathematics Summer Program", institution: "Indraprastha Institute of Information Technology, Delhi", duration: "June 2024",
        description: "Two week residential summer program covering some elementary aspects of Analysis, Algebra, Topology. This program included daily lectures on the aforementioned topics, along with problem solving sessions." }
    ]
  },
  events: [
    { title: "The Probabilistic Method", description: "Gave the first Openboard talk. More about that talk can be looked at on the Openboard website.", link: { url: "https://openboard-web.vercel.app/", text: "Openboard website" } },
    { title: "Khel-Culus", description: "Khel, in Hindi, stands for sport. Khel-culus represents the treatise of calculus as a sport — the name for the integration bee held during the annual math fest, Continuum, organised by the department of math at IISER Bhopal. I organised the event, along with Yash Sharma, to fruition despite several unavoidable obstacles." },
    { title: "Big-Tac-Toe", description: "A wordplay on Big + Tic-tac-toe — another name for ultimate tic-tac-toe. Held at Continuum in collaboration with the board games club, Ingenium. The event featured a knockout stage with Saurav Kanetkar emerging as the Big-Tac-Toe champion, 2025 edition.", link: { url: "https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe", text: "Ultimate Tic-Tac-Toe" } }
  ],
  contact: { email: "adeetya22@iiserb.ac.in", linkedin: "https://www.linkedin.com/in/adeetya-choubey-6b2a44254/" }
};

const pages = ['About', 'AcadEx', 'Research', 'Events', 'Resources', 'Contact'];
const pageDescriptions = {
  About: "A brief bio, my educational background, and positions of responsibility.",
  AcadEx: "Details about my research internships and summer schools.",
  Research: "An overview of my current and past research projects.",
  Events: "A summary of academic and extracurricular events I've organised or participated in.",
  Resources: "A curated list of books and links for various math topics.",
  Contact: "How to get in touch with me for collaborations or inquiries."
};

const resourcesData = [
  { category: "Algebra",
    intro: "For group theory, ring theory and modules, field theory and Galois theory, an excellent overarching resource is Abstract Algebra by Dummit and Foote (D&F). Email me if you can't find the widely available PDF.",
    courses: [
      { name: "Group Theory", details: 'Contemporary Abstract Algebra by Gallian is a great starting point. For problems, pick up Herstein if you like challenges.' },
      { name: "Ring Theory & Modules", details: "D&F" },
      { name: "Field Theory & Galois Theory", details: "D&F" },
      { name: "Commutative Algebra", details: [
        { text: "Commutative Algebra — N.S. Gopalkrishnan" },
        { text: "Introduction to Commutative Algebra — Atiyah & Macdonald", link: "http://math.univ-lyon1.fr/~mathieu/CoursM2-2020/AMD-ComAlg.pdf" },
        { text: "Commutative Ring Theory — Hideyuki Matsumura" }
      ]},
      { name: "Linear Algebra" }
    ]
  },
  { category: "Analysis",
    courses: [
      { name: "Real Analysis", details: [
        { type: 'subheading', text: 'Single Variable' },
        { text: 'Understanding Analysis — Stephen Abbott', link: 'http://ndl.ethernet.edu.et/bitstream/123456789/88631/1/2015_Book_UnderstandingAnalysis.pdf' },
        { text: 'Introduction to Real Analysis — Bartle & Sherbert', link: 'https://mashadi.staff.unri.ac.id/files/2018/10/BUKU-REAL-ANALYSIS.pdf' },
        { type: 'note', text: 'For a more rigorous treatment: Principles of Mathematical Analysis — Walter Rudin' },
        { type: 'subheading', text: 'Multivariable' },
        { text: 'Analysis on Manifolds — Munkres', link: 'https://edscl.in/pluginfile.php/2669/mod_folder/content/0/Analysis%20on%20Manifolds%20Munkres.pdf?forcedownload=1' },
        { text: 'Calculus on Manifolds — Spivak', link: 'http://strangebeautiful.com/other-texts/spivak-calc-manifolds.pdf' },
        { type: 'note', text: 'Course notes by Dr. Prahlad Vaidyanathan also available on his website.', link: 'https://home.iiserb.ac.in/~prahlad/teaching.html' }
      ]},
      { name: "Complex Analysis", details: [
        { text: 'Complex Analysis — Ahlfors', link: 'https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf' },
        { text: 'Functions of One Complex Variable — Conway', link: 'https://psm73.wordpress.com/wp-content/uploads/2009/03/conway.pdf' }
      ]},
      { name: "PDE", details: [
        { text: "PDE — John Fritz" },
        { text: "An Introduction to PDE — Yehuda Pinchover" },
        { text: "Course notes by Prof. Sivaji Ganesh, MA515, IIT Bombay", link: 'https://www.math.iitb.ac.in/~siva/ma515.2201.html' }
      ]},
      { name: "ODE", details: "Introduction to ODE — E.A. Coddington" }
    ]
  },
  { category: "Topology",
    courses: [
      { name: "General Topology", details: [
        { text: "Topology — J. Dugundji (Email if you cannot find the PDF)" },
        { text: "Topology — J. Munkres" },
        { text: "Course notes, MAT327, University of Toronto", link: 'https://www.math.toronto.edu/ivan/mat327/?resources' },
        { text: "Topology Without Tears — Sidney Morris", link: 'https://www.topologywithouttears.net/' }
      ]},
      { name: "Algebraic Topology", details: [
        { text: "Algebraic Topology — Hatcher" },
        { text: "Chapters 9+ from Munkres's Topology; for Homology, Elements of Algebraic Topology also by Munkres." },
        { text: "Lecture videos by Dr. Pierre Albin on YouTube", link: 'https://youtube.com/playlist?list=PLpRLWqLFLVTCL15U6N3o35g4uhMSBVA2b&si=jhELA_n416tTRTwC' }
      ]}
    ]
  },
  { category: "Foundations & Discrete Math",
    courses: [
      { name: "Number Theory", details: [
        { text: 'Elementary Number Theory — David Burton', link: 'https://www.researchgate.net/profile/Issam-Kaddoura/post/Do-irrational-numbers-exist-in-nature/attachment/5f580f02f97a8800014574a2/AS%3A933631606403072%401599606529112/download/david-m-burton-elementary-number-theory-mcgraw-hill-education-2010.pdf' },
        { text: 'An Introduction to the Theory of Numbers — Niven, Zuckerman & Montgomery' }
      ]},
      { name: "Graph Theory", details: "Introduction to Graph Theory by Douglas West is a great book." },
      { name: "Knot Theory" },
      { name: "Braid Groups" },
      { name: "Combinatorics", details: "Introductory Combinatorics by Richard Brualdi." },
      { name: "Probability" },
      { name: "Statistics" }
    ]
  },
  { category: "Miscellaneous", courses: [{ name: "More topics coming soon." }] }
];

// ─── Hooks ────────────────────────────────────────────────────────────────────
const useTheme = () => {
  const [theme, setTheme] = React.useState('light');
  React.useEffect(() => { setTheme(localStorage.getItem('theme') || 'light'); }, []);
  React.useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  return { theme, toggleTheme: () => setTheme(p => p === 'light' ? 'dark' : 'light') };
};

const FadeIn = ({ children, delay = 0, style = {}, className = '' }) => {
  const ref = React.useRef(null);
  const [v, setV] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.unobserve(el); } }, { threshold: 0.05, rootMargin: '0px 0px -30px 0px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`sr${v ? ' in' : ''}${className ? ' '+className : ''}`} style={{ ...style, transitionDelay: v ? `${delay}ms` : '0ms' }}>
      {children}
    </div>
  );
};

// ─── CSS ──────────────────────────────────────────────────────────────────────
const CSS = `
  :root {
    --bg: #F6F2EC;
    --surface: #FEFCF8;
    --ink: #28211D;
    --ink2: #7A6E67;
    --ink3: #B0A49C;
    --accent: #B83718;
    --border: #E4DDD5;
    --sh-sm: 0 1px 4px rgba(40,33,29,0.06);
    --sh-md: 0 4px 24px rgba(40,33,29,0.09);
    --sh-lg: 0 14px 48px rgba(40,33,29,0.11);
    --fd: 'Cormorant Garamond', Georgia, serif;
    --fb: 'Jost', system-ui, sans-serif;
    --r: 7px;
  }
  .dark {
    --bg: #1A1714;
    --surface: #221E1A;
    --ink: #ECE6DF;
    --ink2: #9D918A;
    --ink3: #5C5450;
    --accent: #D05025;
    --border: #352E29;
    --sh-sm: 0 1px 4px rgba(0,0,0,0.28);
    --sh-md: 0 4px 24px rgba(0,0,0,0.32);
    --sh-lg: 0 14px 48px rgba(0,0,0,0.40);
  }
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { background:var(--bg); color:var(--ink); font-family:var(--fb); -webkit-font-smoothing:antialiased; transition:background 0.4s,color 0.4s; }

  /* Grain overlay */
  .grain::after {
    content:'';
    position:fixed;
    inset:0;
    pointer-events:none;
    z-index:9999;
    opacity:0.038;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size:200px 200px;
  }

  /* Keyframes */
  @keyframes fadeUp { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }

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
  .ni { position:relative; background:none; border:none; cursor:pointer; font-family:var(--fb); font-weight:500; font-size:11px; letter-spacing:0.14em; text-transform:uppercase; color:var(--ink2); transition:color 0.25s; padding:3px 0; }
  .ni::after { content:''; position:absolute; bottom:0; left:0; width:0; height:1px; background:var(--accent); transition:width 0.3s cubic-bezier(0.16,1,0.3,1); }
  .ni:hover { color:var(--ink); }
  .ni:hover::after,.ni.active::after { width:100%; }
  .ni.active { color:var(--accent); }

  /* Nav: landing */
  .lni { position:relative; background:none; border:none; cursor:pointer; font-family:var(--fb); font-weight:300; font-size:15px; letter-spacing:0.04em; color:var(--ink2); transition:color 0.3s; padding:5px 0; }
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

  /* Accordion */
  .abtn { display:flex; align-items:center; justify-content:space-between; width:100%; background:none; border:none; border-bottom:1px solid var(--border); padding:15px 0; cursor:pointer; color:var(--ink); font-family:var(--fd); font-size:1.15rem; font-weight:600; transition:color 0.2s; text-align:left; gap:12px; }
  .abtn:hover { color:var(--accent); }
  .apanel { padding:18px 0 22px; border-bottom:1px solid var(--border); animation:fadeUp 0.3s ease both; }

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
  .hdr-nav { display:flex; flex-wrap:wrap; gap:4px 18px; justify-content:flex-end; }

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

// ─── Accordion ────────────────────────────────────────────────────────────────
const AccordionItem = ({ title, intro, items }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <button className="abtn" onClick={() => setOpen(o => !o)}>
        <span>{title}</span>
        <ChevronDown style={{ flexShrink: 0, color: 'var(--accent)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
      </button>
      {open && (
        <div className="apanel">
          {intro && <p style={{ fontStyle:'italic', color:'var(--ink2)', marginBottom:18, fontSize:'0.88rem', lineHeight:1.7 }}>{intro}</p>}
          <ul style={{ listStyle:'none', padding:0, display:'flex', flexDirection:'column', gap:14 }}>
            {items.map((item, idx) => (
              <li key={item.name + idx}>
                <div style={{ fontWeight:500, color:'var(--ink)', fontSize:'0.92rem', marginBottom:4 }}>{item.name}</div>
                {item.details && (
                  <div style={{ paddingLeft:16, color:'var(--ink2)', fontSize:'0.85rem', lineHeight:1.7 }}>
                    {Array.isArray(item.details) ? (
                      <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
                        {item.details.map((d, i) => {
                          const k = (d.text || '') + i;
                          if (d.type === 'subheading') return <div key={k} style={{ fontWeight:600, color:'var(--ink)', marginTop:6, fontSize:'0.85rem', letterSpacing:'0.04em' }}>{d.text}</div>;
                          if (d.type === 'note') return (
                            <p key={k} style={{ fontStyle:'italic', color:'var(--ink3)', paddingLeft:12, borderLeft:'2px solid var(--border)', margin:'2px 0', fontSize:'0.82rem' }}>
                              {d.text}{d.link && <> — <a href={d.link} target="_blank" rel="noopener noreferrer" className="lnk">link</a></>}
                            </p>
                          );
                          return (
                            <div key={k} style={{ display:'flex', gap:8, alignItems:'flex-start' }}>
                              <span style={{ color:'var(--accent)', flexShrink:0, marginTop:1, fontSize:'0.8rem' }}>↳</span>
                              <span>{d.text}{d.link && <> — <a href={d.link} target="_blank" rel="noopener noreferrer" className="lnk">link</a></>}</span>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <p style={{ fontStyle:'italic', marginTop:2 }}>{item.details}</p>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// ─── Pages ────────────────────────────────────────────────────────────────────
const AboutPage = () => (
  <div>
    <SectionHead eyebrow="About" title="Profile" />

    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))', gap:20, marginBottom:20 }}>
      <FadeIn delay={80}>
        <div className="card" style={{ padding:'34px 30px', height:'100%' }}>
          <div className="eb" style={{ marginBottom:16 }}>Bio-Sketch</div>
          <p className="iq" style={{ marginBottom:20 }}>{cvData.profile.intro}</p>
          <Divider style={{ margin:'20px 0' }} />
          <p style={{ color:'var(--ink2)', lineHeight:1.8, fontSize:'0.93rem' }}>{cvData.profile.interests}</p>
          <Divider style={{ margin:'20px 0' }} />
          <p style={{ color:'var(--ink2)', lineHeight:1.8, fontSize:'0.93rem' }}>{cvData.profile.ambition}</p>
        </div>
      </FadeIn>

      <FadeIn delay={160}>
        <div className="card" style={{ padding:'34px 30px', height:'100%' }}>
          <div className="eb" style={{ marginBottom:20 }}>Education</div>
          <div style={{ display:'flex', flexDirection:'column', gap:26 }}>
            {cvData.education.map(edu => (
              <div key={edu.institution} className="tl">
                <div className="df" style={{ fontSize:'1.02rem', fontWeight:600, color:'var(--ink)', marginBottom:4, lineHeight:1.3 }}>{edu.institution}</div>
                <div style={{ fontSize:'0.83rem', color:'var(--ink2)', marginBottom:3 }}>{edu.degree}</div>
                <div style={{ fontSize:'0.77rem', color:'var(--accent)', fontWeight:500, letterSpacing:'0.05em', marginBottom:6 }}>{edu.duration}</div>
                {edu.grades?.map(g => (
                  <span key={g} style={{ display:'inline-block', fontSize:'0.77rem', color:'var(--ink2)', background:'var(--bg)', border:'1px solid var(--border)', borderRadius:20, padding:'2px 10px' }}>{g}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>

    <FadeIn delay={240}>
      <div className="card" style={{ padding:'34px 30px' }}>
        <div className="eb" style={{ marginBottom:20 }}>Positions of Responsibility</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:26 }}>
          {cvData.responsibilities.map(resp => (
            <div key={resp.role} style={{ borderLeft:'2px solid var(--border)', paddingLeft:16 }}>
              <div className="df" style={{ fontSize:'1rem', fontWeight:600, color:'var(--ink)', marginBottom:4, lineHeight:1.3 }}>{resp.role}</div>
              <div style={{ fontSize:'0.8rem', color:'var(--ink2)', marginBottom:2 }}>{resp.institution}</div>
              <div style={{ fontSize:'0.76rem', color:'var(--accent)', fontWeight:500, letterSpacing:'0.05em', marginBottom:10 }}>{resp.duration}</div>
              <p style={{ fontSize:'0.86rem', color:'var(--ink2)', lineHeight:1.75 }}>
                {resp.isOpenboard ? (
                  <>Along with my dear friend <a href="https://samriddhas-quantum-realm.vercel.app/" target="_blank" rel="noopener noreferrer" className="lnk">Samriddha</a>, we started an independent initiative for students to speak about topics they care about, to a general audience. Learn more about <a href="https://openboard-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="lnk">Openboard</a>.</>
                ) : resp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  </div>
);

const AcademicExperiencesPage = () => (
  <div>
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
                {i < cvData.academicExperiences.internships.length - 1 && <Divider style={{ margin:'28px 0' }} />}
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
                {i < cvData.academicExperiences.summerSchools.length - 1 && <Divider style={{ margin:'28px 0' }} />}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  </div>
);

const ResearchPage = () => (
  <div>
    <SectionHead eyebrow="Research" title="What I work on" />
    {cvData.research.map((item, i) => (
      <FadeIn key={item.title} delay={80 * i}>
        <div className="card" style={{ padding:'40px 36px', marginBottom:20 }}>
          <div className="eb" style={{ marginBottom:12 }}>Current Project</div>
          <h3 className="df" style={{ fontSize:'clamp(1.25rem,3vw,1.75rem)', fontWeight:600, color:'var(--ink)', marginBottom:6, lineHeight:1.3 }}>{item.title}</h3>
          <div style={{ fontSize:'0.82rem', color:'var(--ink2)', fontWeight:500, marginBottom:2 }}>{item.guide}</div>
          <Divider style={{ margin:'24px 0' }} />
          <p style={{ fontSize:'0.95rem', color:'var(--ink2)', lineHeight:1.85 }}>
            <strong style={{ color:'var(--ink)', fontWeight:600 }}>Cayley graphs</strong> exhibit the nature of the action of a group G on a set S closed under inverses. A graph is <strong style={{ color:'var(--ink)', fontWeight:600 }}>integral</strong> if each eigenvalue of its adjacency matrix is an integer. The <strong style={{ color:'var(--ink)', fontWeight:600 }}>genus</strong> is the minimum number of handles that must be added to a sphere to embed the graph on the resulting surface without edge crossings. I use computational and algebraic tools to explore these two properties of Cayley graphs on finite abelian groups.
          </p>
          <p style={{ marginTop:16, fontSize:'0.85rem', fontStyle:'italic', color:'var(--ink3)' }}>More about my work updating soon.</p>
        </div>
      </FadeIn>
    ))}
  </div>
);

const EventsPage = () => (
  <div>
    <SectionHead eyebrow="Events" title="Things I've made happen" />
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:20 }}>
      {cvData.events.map((ev, i) => (
        <FadeIn key={ev.title} delay={80 * i}>
          <div className="card" style={{ padding:'30px 26px', height:'100%' }}>
            <div className="eb" style={{ marginBottom:10 }}>Event</div>
            <h3 className="df" style={{ fontSize:'1.4rem', fontWeight:600, color:'var(--ink)', marginBottom:16, lineHeight:1.2 }}>{ev.title}</h3>
            <p style={{ fontSize:'0.88rem', color:'var(--ink2)', lineHeight:1.8 }}>
              {ev.link ? (
                <>{ev.description.replace(ev.link.text, '')}<a href={ev.link.url} target="_blank" rel="noopener noreferrer" className="lnk">{ev.link.text}</a>.</>
              ) : ev.description}
            </p>
          </div>
        </FadeIn>
      ))}
    </div>
  </div>
);

const ResourcesPage = () => (
  <div>
    <SectionHead eyebrow="Resources" title="A reading list" />
    <FadeIn delay={80} style={{ marginBottom:16 }}>
      <p style={{ fontSize:'0.82rem', fontStyle:'italic', color:'var(--ink3)', marginBottom:28 }}>
        All book links are freely accessible online. If any rights-holder objects, please email me and I'll remove the link promptly. Thank you.
      </p>
    </FadeIn>
    <FadeIn delay={140}>
      <div className="card" style={{ padding:'28px 32px' }}>
        {resourcesData.map(cat => (
          <AccordionItem key={cat.category} title={cat.category} intro={cat.intro} items={cat.courses} />
        ))}
      </div>
    </FadeIn>
  </div>
);

const ContactPage = () => (
  <div>
    <SectionHead eyebrow="Contact" title="Get in touch" />
    <div style={{ maxWidth:500 }}>
      <FadeIn delay={80}>
        <div className="card" style={{ padding:'38px 34px' }}>
          <p className="df" style={{ fontSize:'1.1rem', fontStyle:'italic', color:'var(--ink2)', marginBottom:32, lineHeight:1.7 }}>
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
          <div style={{ fontSize:'0.78rem', color:'var(--ink3)', letterSpacing:'0.05em' }}>{cvData.location}</div>
        </div>
      </FadeIn>
    </div>
  </div>
);

// ─── App ──────────────────────────────────────────────────────────────────────
function App() {
  const [activePage, setActivePage] = React.useState('About');
  const { theme, toggleTheme } = useTheme();
  const [showLanding, setShowLanding] = React.useState(true);
  const [hovered, setHovered] = React.useState(null);

  React.useEffect(() => {
    const href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Jost:wght@300;400;500;600&display=swap";
    if (!document.querySelector(`link[href="${href}"]`)) {
      const l = document.createElement('link'); l.href = href; l.rel = 'stylesheet';
      document.head.appendChild(l);
    }
  }, []);

  React.useEffect(() => {
    const saved = sessionStorage.getItem('activePage');
    if (saved && pages.includes(saved)) { setActivePage(saved); setShowLanding(false); }
  }, []);

  const goTo = (page) => { setActivePage(page); setShowLanding(false); sessionStorage.setItem('activePage', page); window.scrollTo(0, 0); };
  const goHome = () => { setShowLanding(true); sessionStorage.removeItem('activePage'); window.scrollTo(0, 0); };

  const renderPage = () => {
    switch (activePage) {
      case 'About': return <AboutPage />;
      case 'AcadEx': return <AcademicExperiencesPage />;
      case 'Research': return <ResearchPage />;
      case 'Events': return <EventsPage />;
      case 'Resources': return <ResourcesPage />;
      case 'Contact': return <ContactPage />;
      default: return <AboutPage />;
    }
  };

  const base = { minHeight:'100vh', background:'var(--bg)', color:'var(--ink)', fontFamily:'var(--fb)', transition:'background 0.4s,color 0.4s' };

  // ── Landing ──
  if (showLanding) return (
    <div className="grain" style={{ ...base, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'48px 24px', textAlign:'center', position:'relative', overflow:'hidden' }}>
      <style>{CSS}</style>

      {/* Faint grid */}
      <div style={{ position:'fixed', inset:0, pointerEvents:'none', zIndex:0,
        backgroundImage:'linear-gradient(rgba(40,33,29,0.028) 1px,transparent 1px),linear-gradient(90deg,rgba(40,33,29,0.028) 1px,transparent 1px)',
        backgroundSize:'48px 48px' }} />

      <div style={{ position:'absolute', top:20, right:24, zIndex:10 }}>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

      <div style={{ position:'relative', zIndex:1, maxWidth:800, width:'100%' }}>
        {/* Ornament */}
        <div className="au eb" style={{ marginBottom:22, display:'flex', alignItems:'center', gap:14, justifyContent:'center' }}>
          <span style={{ display:'block', width:40, height:1, background:'var(--border)' }} />
          Mathematics
          <span style={{ display:'block', width:40, height:1, background:'var(--border)' }} />
        </div>

        {/* Name - Simplified as requested: No surname, no donut animation */}
        <h1 className="df au d1" style={{ fontSize:'clamp(3rem,13vw,7.5rem)', fontWeight:700, lineHeight:0.93, color:'var(--ink)', marginBottom:26, letterSpacing:'-0.02em' }}>
          Adeetya
        </h1>

        {/* Subtitle */}
        <p className="au d2" style={{ fontSize:'11px', fontWeight:400, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink3)', marginBottom:48 }}>
          Algebra&nbsp;&nbsp;·&nbsp;&nbsp;Topology&nbsp;&nbsp;·&nbsp;&nbsp;IISER Bhopal
        </p>

        {/* Decorative rule */}
        <div className="au d3" style={{ display:'flex', margin:'0 auto 48px', maxWidth:320, height:1, background:'linear-gradient(to right, transparent, var(--border), transparent)' }} />

        {/* Navigation */}
        <nav className="au d4" style={{ display:'flex', flexWrap:'wrap', gap:'12px 32px', justifyContent:'center', marginBottom:28 }}>
          {pages.map(page => (
            <button key={page} className="lni" onClick={() => goTo(page)}
              onMouseEnter={() => setHovered(page)} onMouseLeave={() => setHovered(null)}>
              {page}
            </button>
          ))}
        </nav>

        {/* Hover description */}
        <div className="au d5" style={{ height:32, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <p className="df" style={{ fontSize:'0.88rem', fontStyle:'italic', color:'var(--ink3)', transition:'opacity 0.35s ease', opacity: hovered ? 1 : 0 }}>
            {hovered ? pageDescriptions[hovered] : ''}
          </p>
        </div>
      </div>
    </div>
  );

  // ── Inner pages ──
  return (
    <div className="grain" style={base}>
      <style>{CSS}</style>

      <header style={{ position:'sticky', top:0, zIndex:20, background:'color-mix(in srgb, var(--bg) 85%, transparent)', backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)', borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', padding:'0 24px' }}>
          <div className="hdr-inner">
            <button onClick={goHome} style={{ background:'none', border:'none', cursor:'pointer', padding:0, textAlign:'left' }}>
              <div className="df" style={{ fontSize:'1.2rem', fontWeight:600, color:'var(--ink)', letterSpacing:'-0.01em', lineHeight:1.2 }}>{cvData.name}</div>
              <div style={{ fontSize:'9px', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--ink3)', marginTop:2 }}>Mathematics · IISER Bhopal</div>
            </button>
            <div className="hdr-right">
              <nav className="hdr-nav">
                {pages.map(page => (
                  <button key={page} className={`ni${activePage === page ? ' active' : ''}`} onClick={() => goTo(page)}>{page}</button>
                ))}
              </nav>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </div>
        </div>
      </header>

      <main style={{ maxWidth:1100, margin:'0 auto', padding:'68px 24px 88px' }}>
        {renderPage()}
      </main>

      <footer style={{ borderTop:'1px solid var(--border)', padding:'22px 24px', textAlign:'center' }}>
        <p style={{ fontSize:'0.76rem', color:'var(--ink3)', letterSpacing:'0.05em' }}>
          © {new Date().getFullYear()} Adeetya Choubey &nbsp;·&nbsp; You may use, share, and adapt with proper credits.
        </p>
      </footer>
    </div>
  );
}

export default App;
