import React, { useState, useEffect, useRef } from 'react';

// --- Icon Imports ---
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
const BookOpen = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
);

// --- Data ---
const cvData = {
  name: "Adeetya Choubey",
  location: "Bhopal, Madhya Pradesh, India",
  profile: {
    intro: "Math undergraduate, enrolled in the dual degree BS-MS program at IISER Bhopal.",
    interests: "I have strong interests in Abstract Algebra and Topology, which also slightly extend to some elementary functional analysis. I have tried to engage deeply with the fields and topics that intrigue me through the medium of guided reading projects and summer training programs.",
    ambition: "My academic trajectory is motivated by a long term goal of entering mathematical research and academia. I play football, video games, cards and badminton in my free time. I also venture quite a lot in music, art and literature recently."
  },
  education: [
    { institution: "Indian Institute of Science Education and Research, Bhopal", degree: "BS-MS (Dual Degree), Major: Mathematics", duration: "2022 – 2027 (Expected)", grades: ["Cumulative performance: 8.73/10"] },
    { institution: "Puna International School, Gandhinagar", degree: "Senior Secondary (CBSE), Science Stream", duration: "2020–2022", grades: ["Grade: 87%"] },
    { institution: "Kendriya Vidyalaya", degree: "Secondary School (CBSE)", duration: "2016–2020", grades: ["Grade: 91.6%"] }
  ],
  academicExperiences: {
      internships: [
          { title: "Research Intern", institution: "Institute of Science, Banaras Hindu University", duration: "May 2025 – Present", description: "This ongoing project began with a unilateral focus on Algebraic Topology, building a strong foundation leading up to Homotopy Theory and Homology. The first phase has involved studying standard textbooks and exploring papers that present both classical problems and modern perspectives in the field. Currently, the focus has shifted towards problem-solving and applying these theoretical tools to tackle more advanced challenges." },
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
  contact: {
      email: "adeetya22@iiserb.ac.in",
      linkedin: "https://www.linkedin.com/in/adeetya-choubey-6b2a44254/"
  }
};
const pages = ['About', 'Academic Experiences', 'Links', 'Explorations', 'Blog', 'Contact'];


// --- Reusable UI Components ---
const Card = ({ children, className = "" }) => (
  <div className={`bg-slate-100 dark:bg-[#1a1a1a] rounded-none p-6 border border-slate-300 dark:border-[#2a2a2a] ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-8 pb-3 border-b-4 border-red-500">
    {children}
  </h2>
);

// --- Page Components ---
const AboutPage = () => (
    <div>
        <SectionTitle>About</SectionTitle>
        <Card className="mb-12">
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-gray-100 mb-4">Bio-Sketch</h3>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-4">{cvData.profile.intro}</p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 mb-4">{cvData.profile.interests}</p>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{cvData.profile.ambition}</p>
        </Card>
        <Card>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-gray-100 mb-6">Education</h3>
            <div className="space-y-6">
                {cvData.education.map(edu => (
                    <div key={edu.institution} className="border-l-4 border-red-500 pl-4">
                        <h4 className="text-xl font-bold text-red-700 dark:text-red-400">{edu.institution}</h4>
                        <p className="text-md font-semibold text-slate-600 dark:text-slate-400">{edu.degree}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-2">{edu.duration}</p>
                        <ul className="list-disc list-inside text-slate-600 dark:text-slate-400">
                            {edu.grades.map(grade => <li key={grade}>{grade}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </Card>
    </div>
);

const AcademicExperiencesPage = () => (
    <div>
        <SectionTitle>Academic Experiences</SectionTitle>
        <Card className="mb-12">
            <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6">Research Internships</h3>
            <div className="space-y-8">
                {cvData.academicExperiences.internships.map((exp, index) => (
                     <div key={exp.title + exp.duration} className={`pb-8 ${index < cvData.academicExperiences.internships.length - 1 ? 'border-b border-slate-200 dark:border-slate-700' : ''}`}>
                        <h4 className="text-xl font-semibold text-slate-800 dark:text-gray-100">{exp.title} at {exp.institution}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-3">{exp.duration}</p>
                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{exp.description}</p>
                    </div>
                ))}
            </div>
        </Card>
        <Card className="mb-12">
            <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6">Summer Schools</h3>
            <div className="space-y-8">
                {cvData.academicExperiences.summerSchools.map(exp => (
                    <div key={exp.title}>
                        <h4 className="text-xl font-bold text-slate-800 dark:text-gray-100">{exp.title}</h4>
                        <p className="text-md font-semibold text-slate-600 dark:text-slate-400 mb-1">{exp.institution}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-500 mb-4">{exp.duration}</p>
                        <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{exp.description}</p>
                    </div>
                ))}
            </div>
        </Card>
        <Card>
             <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-6">Certifications</h3>
             <ul className="list-disc list-inside space-y-2 text-lg text-slate-700 dark:text-slate-300">
                {cvData.academicExperiences.certifications.map(cert => (
                    <li key={cert.title}><strong>{cert.title}</strong> - {cert.institution}</li>
                ))}
             </ul>
        </Card>
    </div>
);

const ComingSoonPage = ({ title }) => (
    <div>
        <SectionTitle>{title}</SectionTitle>
        <Card>
            <h3 className="text-2xl font-semibold text-slate-800 dark:text-gray-100 mb-4">Something's cooking...</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300">
                This page is currently under construction. Check back later for new content!
            </p>
        </Card>
    </div>
);

const ContactPage = () => (
  <div>
    <SectionTitle>Contact</SectionTitle>
    <Card>
        <div className="flex flex-col space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300">
                Feel free to reach out for collaborations, discussions, or inquiries.
            </p>
            <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                <a href={`mailto:${cvData.contact.email}`} className="text-lg text-red-600 dark:text-red-400 hover:text-red-400 dark:hover:text-red-300 transition-colors duration-300 underline">{cvData.contact.email}</a>
            </div>
            <div className="flex items-center space-x-4">
                <Linkedin className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg text-red-600 dark:text-red-400 hover:text-red-400 dark:hover:text-red-300 transition-colors duration-300 underline">LinkedIn Profile</a>
            </div>
             <div className="mt-4 pt-6 border-t border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400">
                <p>{cvData.location}</p>
            </div>
        </div>
    </Card>
  </div>
);

// --- Inline Pixel Torus Canvas Component ---
const InlinePixelTorus = () => {
    const canvasRef = useRef(null);
    const animationFrameIdRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        const PIXEL_SIZE = 2;
        const SIZE = 60;
        canvas.width = SIZE;
        canvas.height = SIZE;

        const redShades = ['#9f1239', '#dc2626', '#ef4444', '#f87171', '#fca5a5'];
        
        let rotationY = 0;
        let rotationX = 0;

        function drawTorus() {
            ctx.clearRect(0, 0, SIZE, SIZE);
            
            const R = 18, r = 9;
            const cx = SIZE / 2, cy = SIZE / 2;
            
            const points = [];
            
            const light = { x: 0.5, y: 0.5, z: 1 };
            const lightMag = Math.sqrt(light.x**2 + light.y**2 + light.z**2);
            const lightNorm = { x: light.x / lightMag, y: light.y / lightMag, z: light.z / lightMag };

            for (let i = 0; i < 360; i += 15) {
                for (let j = 0; j < 360; j += 25) {
                    const u = i * Math.PI / 180;
                    const v = j * Math.PI / 180;
                    
                    let x = (R + r * Math.cos(v)) * Math.cos(u);
                    let y = (R + r * Math.cos(v)) * Math.sin(u);
                    let z = r * Math.sin(v);
                    
                    let nx = Math.cos(v) * Math.cos(u);
                    let ny = Math.cos(v) * Math.sin(u);
                    let nz = Math.sin(v);

                    // Rotate point and normal
                    let tempZ = z * Math.cos(rotationX) - y * Math.sin(rotationX);
                    let tempY = z * Math.sin(rotationX) + y * Math.cos(rotationX);
                    z = tempZ; y = tempY;
                    let tempNz = nz * Math.cos(rotationX) - ny * Math.sin(rotationX);
                    let tempNy = nz * Math.sin(rotationX) + ny * Math.cos(rotationX);
                    nz = tempNz; ny = tempNy;

                    let tempX = x * Math.cos(rotationY) - z * Math.sin(rotationY);
                    tempZ = x * Math.sin(rotationY) + z * Math.cos(rotationY);
                    x = tempX; z = tempZ;
                    let tempNx = nx * Math.cos(rotationY) - nz * Math.sin(rotationY);
                    tempNz = nx * Math.sin(rotationY) + nz * Math.cos(rotationY);
                    nx = tempNx; nz = tempNz;
                    
                    const intensity = nx * lightNorm.x + ny * lightNorm.y + nz * lightNorm.z;
                    
                    points.push({ x: x + cx, y: y + cy, z: z, intensity: intensity });
                }
            }

            points.sort((a, b) => a.z - b.z);

            points.forEach(p => {
                const clampedIntensity = Math.max(0, Math.min(1, (p.intensity + 1) / 2));
                const colorIndex = Math.floor(clampedIntensity * (redShades.length - 1));
                ctx.fillStyle = redShades[colorIndex];
                
                ctx.fillRect(Math.floor(p.x / PIXEL_SIZE) * PIXEL_SIZE, Math.floor(p.y / PIXEL_SIZE) * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
            });
        }

        function animate() {
            rotationY += 0.01;
            rotationX += 0.005;
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

    return <canvas ref={canvasRef} className="inline-block" style={{ width: '0.9em', height: '0.9em', verticalAlign: '-0.15em', margin: '0 0.1em' }}/>;
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

  if (showLanding) {
      return (
          <div className="min-h-screen bg-white dark:bg-[#0d0d0d] flex flex-col items-center justify-center text-center p-4 overflow-hidden relative" style={{fontFamily: "'Roboto Mono', monospace"}}>
               <button onClick={toggleTheme} className="absolute top-4 right-4 p-2 rounded-full text-slate-800 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300 z-20">
                    {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
                </button>
              <div className="relative z-10">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-2 flex flex-nowrap items-center justify-center">
                    Adeetya Ch
                    <InlinePixelTorus />
                    ubey
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-red-600 dark:text-red-500 mb-12">Algebra | Topology</p>
                  <nav className="flex flex-wrap gap-x-6 gap-y-4 justify-center">
                      {pages.map(page => (
                          <button 
                              key={page}
                              onClick={() => navigateToPage(page)}
                              className="text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-300"
                          >
                              {page}
                          </button>
                      ))}
                  </nav>
              </div>
          </div>
      );
  }

  const renderPage = () => {
    switch (activePage) {
      case 'About': return <AboutPage />;
      case 'Academic Experiences': return <AcademicExperiencesPage />;
      case 'Links': return <ComingSoonPage title="Links" />;
      case 'Explorations': return <ComingSoonPage title="Explorations" />;
      case 'Blog': return <ComingSoonPage title="Blog" />;
      case 'Contact': return <ContactPage />;
      default: return <AboutPage />;
    }
  };

  const NavLink = ({ pageName }) => (
    <button
      onClick={() => setActivePage(pageName)}
      className={`px-3 sm:px-4 py-2 rounded-none text-sm sm:text-lg font-medium transition-colors duration-300 border border-transparent ${
        activePage === pageName
          ? 'bg-red-600 text-white shadow-inner'
          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
      }`}
    >
      {pageName}
    </button>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0d0d0d] text-slate-800 dark:text-slate-200 transition-colors duration-500" style={{fontFamily: "'Roboto Mono', monospace"}}>
      <header className="bg-white dark:bg-[#1a1a1a] sticky top-0 z-20 border-b border-slate-300 dark:border-[#2a2a2a]">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div>
            <button onClick={() => setShowLanding(true)} className="text-left transition-opacity duration-300 hover:opacity-70">
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{cvData.name}</h1>
                <p className="text-sm sm:text-md text-slate-600 dark:text-slate-400">Mathematics Undergraduate</p>
            </button>
          </div>
          <button onClick={toggleTheme} className="p-2 rounded-full text-slate-800 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-300">
            {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          </button>
        </div>
        <nav className="bg-slate-100 dark:bg-[#1f1f1f] border-t border-b border-slate-300 dark:border-[#2a2a2a]">
           <div className="container mx-auto px-2 sm:px-6 py-2 flex justify-center flex-wrap gap-1 sm:gap-2">
                {pages.map(page => <NavLink key={page} pageName={page} />)}
           </div>
        </nav>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 py-12">
        {renderPage()}
      </main>
      
      <footer className="bg-white dark:bg-[#1a1a1a] mt-16 py-6 border-t border-slate-300 dark:border-[#2a2a2a]">
        <div className="container mx-auto px-6 text-center text-slate-600 dark:text-slate-400">
            <p>&copy; {new Date().getFullYear()} Adeetya Choubey. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
