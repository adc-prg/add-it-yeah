import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Icon Imports ---
// Using slightly tweaked icons for a more consistent feel
const Sun = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
  </svg>
);
const Moon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);
const Linkedin = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
);
const Mail = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
);
// NEW: Mobius Strip icon for a touch of topology
const MobiusStrip = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 4s-4.5 2-4.5 6c0 4.5 4.5 6 4.5 6s4.5-2 4.5-6c0-4.5-4.5-6-4.5-6Z" />
        <path d="M12 16s-4.5-2-4.5-6" />
        <path d="M12 4s4.5 2 4.5 6" />
    </svg>
);
// NEW: Klein Bottle icon for the background pattern
const KleinBottleIcon = ({ className }) => (
    <svg className={className} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M62.5 87.5C62.5 78.3917 55.6083 71.5 46.5 71.5C37.3917 71.5 30.5 78.3917 30.5 87.5C30.5 96.6083 37.3917 103.5 46.5 103.5H50V50C50 38.9543 41.0457 30 30 30H12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M62.5 87.5H75C83.2843 87.5 90 80.7843 90 72.5C90 64.2157 83.2843 57.5 75 57.5H46.5C37.3917 57.5 30.5 50.6083 30.5 41.5C30.5 32.3917 37.3917 25.5 46.5 25.5H50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


// --- Data ---
const cvData = {
  name: "Adeetya Choubey",
  location: "Bhopal, Madhya Pradesh, India",
  profile: {
    intro: "Math undergraduate, enrolled in the dual degree BS-MS program at IISER Bhopal.",
    interests: "I have strong interests in Abstract Algebra and Topology, which also slightly extend to some elementary functional analysis. I have tried to engage deeply with the fields and topics that intrigue me through the medium of guided reading projects and summer training programs.",
    ambition: "My academic trajectory is motivated by a long term goal of entering mathematical research and academia."
  },
  education: [
    { institution: "Indian Institute of Science Education and Research, Bhopal", degree: "BS-MS (Dual Degree), Major: Mathematics", duration: "2022 – 2027 (Expected)", grades: ["Cumulative performance: 8.73/10"] },
    { institution: "Puna International School, Gandhinagar", degree: "Senior Secondary (CBSE), Science Stream", duration: "2020–2022", grades: ["Grade: 87%"] },
    { institution: "Kendriya Vidyalaya", degree: "Secondary School (CBSE)", duration: "2016–2020", grades: ["Grade: 91.6%"] }
  ],
  responsibilities: [
    { role: "Department Representative, Math Dept.", institution: "IISER Bhopal", duration: "Sep 2024 – Present", description: "Elected representative for the 2022 batch, responsible for facilitating student concerns and academic feedback between students and faculty." },
    { role: "Core Member, Math Club", institution: "IISER Bhopal", duration: "Jun 2024 – Present", description: "Actively involved in organizing guest lectures, weekly academic discussions, and student outreach events to foster a mathematical community." },
    { role: "Peer Counselor", institution: "IISER Bhopal", duration: "Jul 2023 – Present", description: "Part of the Institute Counselling Cell, offering peer support and guidance to students on academic and personal issues." },
    { role: "Founding Student Advisor, Ingenium", institution: "IISER Bhopal", duration: "Ongoing", description: "Ingenium is the board games club of IISER Bhopal, the brainchild of Dhruv Dua, my peer at IISER Bhopal. The aim of the club is to inculcate a culture of different kinds of games apart from the conventional ones, at IISERB." }
  ],
  academicExperiences: {
      internships: [
          { title: "Research Intern", institution: "Institute of Science, Banaras Hindu University", duration: "May 2025 – Present", description: "This ongoing project began with a unilateral focus on Algebraic Topology, building a strong foundation leading up to Homotopy Theory and Homology. The first phase has involved studying standard textbooks and exploring papers that present both classical and modern perspectives in the field. Currently, the focus has shifted towards problem-solving and applying these theoretical tools to tackle more advanced challenges." },
          { title: "Summer Research Intern", institution: "Institute of Science, Banaras Hindu University", duration: "May – July 2024", description: "This summer project focused on building a foundational understanding of Braid Theory, the development of related algorithms, and exploring its applications. The work involved tackling key problems such as the word problem and the conjugacy problem, studying knot invariants, and delving into other introductory topics in Knot Theory." }
      ],
      summerSchools: [
          { title: "Summer Program", institution: "TIFR - Centre for Applicable Mathematics", duration: "June 2025 - July 2025", description: " The program included courses on Reproducing Kernel Hilbert Spaces, Geometric Measure theory, Geometric Function theory, Gibbs Measure and Entropy, Multiscale problems in PDE, Microlocal Analysis and Inverse Problems, along with several keynote lecture about ongoing research in Analysis and Combinatorics, delivered by leading researchers in the field." },
          { title: "Mathematics Summer Program", institution: "Indraprastha Institute of Information Technology, Delhi", duration: "June 2024", description: "An intensive program covering the fundamentals of Analysis, Abstract Algebra, Topology, Distribution Theory, along with problem solving sessions." }
      ],
      certifications: [
          { title: "Crash Course on Python", institution: "Google" },
          { title: "Data Analysis with R", institution: "Coursera" },
          { title: "MATLAB Onramp", institution: "MathWorks" },
      ]
  },
  events: [
    { title: "Khel-Culus", description: "Khel, in my mother tongue Hindi, stands for sport. Khel-culus represents the treatise of calculus as a sport. It was the name coined by me for the integration bee held during the annual math fest, Continuum, organised by the department of math at IISER bhopal. I organised the event, along with Yash Sharma, to fruition despite several unavoidable obstacles." },
    { title: "Big-Tac-Toe", description: "It's a wordplay (Big + Tic-tac-toe) which is another name for the game ultimate tic-tac-toe. The event was again held at Continuum, collaborating with the board games club, Ingenium. The event included a knockout stage gameplay with ultimately Saurav Kanetkar coming out on top as the Big-Tac-Toe champion, 2025 edition.", link: { url: "https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe", text: "Ultimate Tic-Tac-Toe" } }
  ],
  contact: { email: "adeetya22@iiserb.ac.in", linkedin: "https://www.linkedin.com/in/adeetya-choubey-6b2a44254/" }
};
const pages = ['About', 'AcadEx', 'Events', 'Explorations', 'Links', 'Blog', 'Contact'];

// --- Animation Variants ---
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
};

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const listItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

// --- Reusable UI Components ---
const Card = ({ children, className = "" }) => (
  <motion.div 
    className={`bg-slate-100 dark:bg-[#1f1f1f] rounded-lg p-6 border border-slate-300 dark:border-[#333] shadow-md dark:shadow-black/20 ${className}`}
    variants={listItemVariants}
  >
    {children}
  </motion.div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-8 pb-3 border-b-4 border-rose-600">
    {children}
  </h2>
);

// --- Page Components ---
const AboutPage = () => (
    <motion.div initial="hidden" animate="visible" variants={listContainerVariants} className="space-y-12">
        <SectionTitle>About</SectionTitle>
        <Card>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-gray-100 mb-4">Bio-Sketch</h3>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-4">{cvData.profile.intro}</p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-4">{cvData.profile.interests}</p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{cvData.profile.ambition}</p>
        </Card>
        <Card>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-gray-100 mb-6">Education</h3>
            <motion.div initial="hidden" animate="visible" variants={listContainerVariants} className="space-y-6">
                {cvData.education.map(edu => (
                    <motion.div key={edu.institution} variants={listItemVariants} className="border-l-4 border-rose-500 pl-4">
                        <h4 className="text-xl font-bold text-rose-700 dark:text-rose-400">{edu.institution}</h4>
                        <p className="text-md font-semibold text-slate-600 dark:text-slate-400">{edu.degree}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-2">{edu.duration}</p>
                        <ul className="list-disc list-inside text-slate-600 dark:text-slate-400">
                            {edu.grades.map(grade => <li key={grade}>{grade}</li>)}
                        </ul>
                    </motion.div>
                ))}
            </motion.div>
        </Card>
        <Card>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-gray-100 mb-6">Positions of Responsibility</h3>
            <motion.div initial="hidden" animate="visible" variants={listContainerVariants} className="space-y-8">
                {cvData.responsibilities.map(resp => (
                    <motion.div key={resp.role} variants={listItemVariants} className="border-l-4 border-rose-500 pl-4">
                        <h4 className="text-xl font-bold text-rose-700 dark:text-rose-400">{resp.role}</h4>
                        <p className="text-md font-semibold text-slate-600 dark:text-slate-400 mb-1">{resp.institution}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-3">{resp.duration}</p>
                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{resp.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </Card>
    </motion.div>
);

const AcademicExperiencesPage = () => (
    <motion.div initial="hidden" animate="visible" variants={listContainerVariants} className="space-y-12">
        <SectionTitle>Academic Experiences</SectionTitle>
        <Card>
            <h3 className="text-2xl font-bold text-rose-600 dark:text-rose-400 mb-6">Research Internships</h3>
            <motion.div initial="hidden" animate="visible" variants={listContainerVariants} className="space-y-8">
                {cvData.academicExperiences.internships.map((exp, index) => (
                     <motion.div key={exp.title + exp.duration} variants={listItemVariants} className={`pb-8 ${index < cvData.academicExperiences.internships.length - 1 ? 'border-b border-slate-200 dark:border-slate-700' : ''}`}>
                         <h4 className="text-xl font-semibold text-slate-800 dark:text-gray-100">{exp.title} at {exp.institution}</h4>
                         <p className="text-sm text-slate-500 dark:text-slate-500 mb-3">{exp.duration}</p>
                         <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{exp.description}</p>
                     </motion.div>
                ))}
            </motion.div>
        </Card>
        <Card>
            <h3 className="text-2xl font-bold text-rose-600 dark:text-rose-400 mb-6">Summer Schools</h3>
            <motion.div initial="hidden" animate="visible" variants={listContainerVariants} className="space-y-8">
                {cvData.academicExperiences.summerSchools.map(exp => (
                    <motion.div variants={listItemVariants} key={exp.title}>
                        <h4 className="text-xl font-bold text-slate-800 dark:text-gray-100">{exp.title}</h4>
                        <p className="text-md font-semibold text-slate-600 dark:text-slate-400 mb-1">{exp.institution}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">{exp.duration}</p>
                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{exp.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </Card>
        <Card>
             <h3 className="text-2xl font-bold text-rose-600 dark:text-rose-400 mb-6">Certifications</h3>
             <motion.ul initial="hidden" animate="visible" variants={listContainerVariants} className="list-disc list-inside space-y-2 text-lg text-slate-700 dark:text-slate-300">
                {cvData.academicExperiences.certifications.map(cert => (
                    <motion.li variants={listItemVariants} key={cert.title}><strong>{cert.title}</strong> - {cert.institution}</motion.li>
                ))}
             </motion.ul>
        </Card>
    </motion.div>
);

const EventsPage = () => (
    <motion.div initial="hidden" animate="visible" variants={listContainerVariants}>
        <SectionTitle>Events</SectionTitle>
        <div className="space-y-8">
            {cvData.events.map(event => (
                <Card key={event.title}>
                    <h3 className="text-2xl font-bold text-rose-600 dark:text-rose-400 mb-4">{event.title}</h3>
                    <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                        {event.description.includes("ultimate tic-tac-toe") 
                            ? <>{event.description.split("ultimate tic-tac-toe")[0]}<a href={event.link.url} target="_blank" rel="noopener noreferrer" className="text-rose-600 dark:text-rose-400 hover:underline font-semibold">{event.link.text}</a>{event.description.split("ultimate tic-tac-toe")[1]}</>
                            : event.description
                        }
                    </p>
                </Card>
            ))}
        </div>
    </motion.div>
);

// NEW: Explorations page with content
const ExplorationsPage = () => (
    <motion.div initial="hidden" animate="visible" variants={listContainerVariants}>
        <SectionTitle>Explorations</SectionTitle>
        <Card>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-gray-100 mb-4">A Glimpse into Topology</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
                Topology is often called "rubber sheet geometry." It's the study of properties of geometric objects that are preserved under continuous deformations, such as stretching, twisting, and bending, but not tearing or gluing. A coffee mug and a donut (torus) are famously considered the same from a topological viewpoint.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300">
                This space will be dedicated to simple visualizations and notes on concepts like homotopy, homology groups, and the beautiful world of knots and braids.
            </p>
             <div className="mt-6 pt-6 border-t border-slate-300 dark:border-slate-700">
                <h4 className="text-xl font-bold text-rose-700 dark:text-rose-400 mb-2">Coming Soon</h4>
                <p className="text-slate-500 dark:text-slate-400">An interactive visualization of the construction of a torus from a fundamental polygon.</p>
            </div>
        </Card>
    </motion.div>
);


const ComingSoonPage = ({ title }) => (
    <motion.div initial="hidden" animate="visible" variants={listContainerVariants}>
        <SectionTitle>{title}</SectionTitle>
        <Card>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-gray-100 mb-4">Something's cooking...</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">
                This page is currently under construction. Check back later for new content!
            </p>
        </Card>
    </motion.div>
);

const ContactPage = () => (
  <motion.div initial="hidden" animate="visible" variants={listContainerVariants}>
    <SectionTitle>Contact</SectionTitle>
    <Card>
        <div className="flex flex-col space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300">
                Feel free to reach out for collaborations, discussions, or inquiries.
            </p>
            <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2 sm:gap-4">
                <Mail className="w-6 h-6 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                <a href={`mailto:${cvData.contact.email}`} className="text-lg text-rose-600 dark:text-rose-400 hover:text-rose-500 dark:hover:text-rose-300 transition-colors duration-300 underline break-all">{cvData.contact.email}</a>
            </div>
            <div className="flex flex-col items-start sm:flex-row sm:items-center gap-2 sm:gap-4">
                <Linkedin className="w-6 h-6 text-rose-600 dark:text-rose-400 flex-shrink-0" />
                <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg text-rose-600 dark:text-rose-400 hover:text-rose-500 dark:hover:text-rose-300 transition-colors duration-300 underline">LinkedIn Profile</a>
            </div>
             <div className="mt-4 pt-6 border-t border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                <p>{cvData.location}</p>
            </div>
        </div>
    </Card>
  </motion.div>
);

// --- UPDATED: Inline Wireframe Torus ---
const InlineWireframeTorus = () => {
    const canvasRef = useRef(null);
    const animationFrameIdRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        
        const SIZE = 60;
        canvas.width = SIZE;
        canvas.height = SIZE;

        const lineColor = theme === 'dark' ? '#fca5a5' : '#be123c';
        
        let rotationY = 0;
        let rotationX = 0.5; // Start with a slight tilt

        function drawTorus() {
            ctx.clearRect(0, 0, SIZE, SIZE);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            
            const R = 18, r = 9;
            const cx = SIZE / 2, cy = SIZE / 2;
            
            const points = [];
            
            for (let i = 0; i < 360; i += 20) {
                const u = i * Math.PI / 180;
                ctx.beginPath();
                for (let j = 0; j <= 360; j += 20) {
                    const v = j * Math.PI / 180;
                    
                    let x = (R + r * Math.cos(v)) * Math.cos(u);
                    let y = (R + r * Math.cos(v)) * Math.sin(u);
                    let z = r * Math.sin(v);
                    
                    // Rotate
                    let tempZ = z * Math.cos(rotationX) - y * Math.sin(rotationX);
                    let tempY = z * Math.sin(rotationX) + y * Math.cos(rotationX);
                    z = tempZ; y = tempY;

                    let tempX = x * Math.cos(rotationY) - z * Math.sin(rotationY);
                    tempZ = x * Math.sin(rotationY) + z * Math.cos(rotationY);
                    x = tempX; z = tempZ;
                    
                    const projX = x + cx;
                    const projY = y + cy;

                    if (j === 0) {
                        ctx.moveTo(projX, projY);
                    } else {
                        ctx.lineTo(projX, projY);
                    }
                }
                ctx.stroke();
            }
        }

        function animate() {
            rotationY += 0.01;
            drawTorus();
            animationFrameIdRef.current = requestAnimationFrame(animate);
        }

        animate();

        return () => {
            if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
            }
        };
    }, []);

    return <canvas ref={canvasRef} className="inline-block" style={{ width: '1em', height: '1em', verticalAlign: '-0.15em', margin: '0 0.1em' }}/>;
};


// --- Main App Component ---
function App() {
  const [activePage, setActivePage] = useState('About');
  const [theme, setTheme] = useState('dark');
  const [showLanding, setShowLanding] = useState(true);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    const fontLink = document.createElement('link');
    fontLink.href = "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap";
    fontLink.rel = "stylesheet";
    
    if(!document.querySelector(`link[href="${fontLink.href}"]`)){
        document.head.appendChild(fontLink);
    }
  }, [theme]);

  const navigateToPage = (page) => {
      setActivePage(page);
      setShowLanding(false);
  }
  
  const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
  }

  // NEW: Background pattern component
  const TopologicalBackground = () => (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-1/4 -left-1/4 w-[200%] h-[200%] opacity-5 dark:opacity-[0.02] animate-[spin_120s_linear_infinite]">
            <div 
                className="w-full h-full"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M62.5 87.5C62.5 78.3917 55.6083 71.5 46.5 71.5C37.3917 71.5 30.5 78.3917 30.5 87.5C30.5 96.6083 37.3917 103.5 46.5 103.5H50V50C50 38.9543 41.0457 30 30 30H12.5' stroke='%23be123c' stroke-width='1'/%3E%3Cpath d='M62.5 87.5H75C83.2843 87.5 90 80.7843 90 72.5C90 64.2157 83.2843 57.5 75 57.5H46.5C37.3917 57.5 30.5 50.6083 30.5 41.5C30.5 32.3917 37.3917 25.5 46.5 25.5H50' stroke='%23be123c' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                }}
            />
        </div>
    </div>
  );

  if (showLanding) {
      return (
          <div className="min-h-screen bg-slate-200 dark:bg-[#111] flex flex-col items-center justify-center text-center p-4 overflow-hidden relative" style={{fontFamily: "'Roboto Mono', monospace"}}>
               <TopologicalBackground />
               <motion.button 
                    onClick={toggleTheme} 
                    className="absolute top-4 right-4 p-2 rounded-full text-slate-800 dark:text-yellow-400 hover:bg-slate-300/50 dark:hover:bg-slate-700/50 transition-colors duration-300 z-20"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
                </motion.button>
              <div className="relative z-10">
                  <motion.h1 
                    className="font-bold text-slate-800 dark:text-white mb-2 flex flex-wrap items-center justify-center"
                    style={{ fontSize: 'clamp(2rem, 10vw, 4.5rem)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Adeetya Ch
                    <InlineWireframeTorus />
                    ubey
                  </motion.h1>
                  <motion.p 
                    className="text-rose-700 dark:text-rose-500 mb-12"
                    style={{ fontSize: 'clamp(0.875rem, 4vw, 1.25rem)'}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    Algebra | Topology
                  </motion.p>
                  <motion.nav 
                    className="flex flex-wrap gap-x-4 gap-y-3 sm:gap-x-6 sm:gap-y-4 justify-center"
                    initial="hidden"
                    animate="visible"
                    variants={listContainerVariants}
                  >
                      {pages.map(page => (
                          <motion.button 
                              key={page}
                              onClick={() => navigateToPage(page)}
                              className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-rose-600 dark:hover:text-rose-500 transition-colors duration-300"
                              variants={listItemVariants}
                          >
                              {page}
                          </motion.button>
                      ))}
                  </motion.nav>
              </div>
          </div>
      );
  }

  const renderPage = () => {
    switch (activePage) {
      case 'About': return <AboutPage />;
      case 'AcadEx': return <AcademicExperiencesPage />;
      case 'Events': return <EventsPage />;
      case 'Explorations': return <ExplorationsPage />;
      case 'Links': return <ComingSoonPage title="Links" />;
      case 'Blog': return <ComingSoonPage title="Blog" />;
      case 'Contact': return <ContactPage />;
      default: return <AboutPage />;
    }
  };

  const NavLink = ({ pageName }) => (
    <button
      onClick={() => setActivePage(pageName)}
      className={`px-3 sm:px-4 py-2 rounded-md text-sm sm:text-base font-medium transition-all duration-200 border border-transparent flex items-center gap-2 ${
        activePage === pageName
          ? 'bg-rose-600 text-white shadow-inner dark:shadow-black/50'
          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
      }`}
    >
      {pageName === 'Explorations' && <MobiusStrip className="w-4 h-4" />}
      {pageName}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-[#181818] text-slate-800 dark:text-slate-200 transition-colors duration-500" style={{fontFamily: "'Roboto Mono', monospace"}}>
      <header className="bg-white/80 dark:bg-[#1f1f1f]/80 backdrop-blur-sm sticky top-0 z-20 border-b border-slate-300 dark:border-[#333]">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div>
            <button onClick={() => setShowLanding(true)} className="text-left transition-opacity duration-300 hover:opacity-70">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{cvData.name}</h1>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Mathematics Undergraduate</p>
            </button>
          </div>
          <button onClick={toggleTheme} className="p-2 rounded-full text-slate-800 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700/50 transition-colors duration-300">
            {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          </button>
        </div>
        <nav className="bg-slate-100/80 dark:bg-[#222]/80 border-t border-b border-slate-300 dark:border-[#333]">
           <div className="container mx-auto px-2 sm:px-6 py-2 flex justify-center flex-wrap gap-1 sm:gap-2">
                {pages.map(page => <NavLink key={page} pageName={page} />)}
           </div>
        </nav>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 py-12">
        <AnimatePresence mode="wait">
            <motion.div
                key={activePage}
                variants={pageVariants}
                initial="initial"
                animate="in"
                exit="out"
                transition={{ duration: 0.3 }}
            >
                {renderPage()}
            </motion.div>
        </AnimatePresence>
      </main>
      
      <footer className="bg-white dark:bg-[#1f1f1f] mt-16 py-6 border-t border-slate-300 dark:border-[#333]">
        <div className="container mx-auto px-6 text-center text-slate-600 dark:text-slate-400">
            <p>&copy; {new Date().getFullYear()} Adeetya Choubey. Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
