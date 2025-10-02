import React from 'react';

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

// --- Data ---
const cvData = {
    name: "Adeetya Choubey",
    location: "Bhopal, Madhya Pradesh, India",
    profile: {
        intro: "Math undergraduate, enrolled in the dual degree BS-MS program at IISER Bhopal.",
        interests: "I have strong interests in Abstract Algebra and Topology, which also slightly extend to some elementary functional analysis. I have tried to engage deeply with the fields and topics that intrigue me through the medium of guided reading projects and summer training programs.",
        ambition: "My academic trajectory is motivated by a long term goal of entering mathematical research and academia. Apart from academics, I play football, cards, video games and board games. I am recently exploring alot of music, art and literature."
    },
    research: [{
        title: "Exploring Integrality and Genus of some specific Cayley Graphs",
        guide: "Guide : Prof. Ashish Upadhyay",
        description: "Cayley graphs are graphs which exhibit the nature of action of a group G on a set S, which is closed under inverses (typically generating set). A graph is said to be integral if each of the eigenvalues of its Adjacency Matrix is an integer. The genus of a graph is the minimum number of handles (or holes) that must be added to a sphere to embed the graph on the resulting surface without any edge crossings. All of this needs to be said and done more precisely. I use computational and algebraic tools to explore these two properties of cayley graphs on finite abelian groups. (More about my work updating soon) "
    }, ],
    education: [{
        institution: "Indian Institute of Science Education and Research, Bhopal",
        degree: "BS-MS (Dual Degree), Major: Mathematics",
        duration: "2022 – 2027 (Expected)",
        grades: ["Cumulative performance: 8.73/10"]
    }, {
        institution: "Puna International School, Gandhinagar",
        degree: "Senior Secondary (CBSE), Science Stream",
        duration: "2020–2022"
    }, {
        institution: "Kendriya Vidyalaya",
        degree: "Secondary School (CBSE)",
        duration: "2016–2020"
    }],
    responsibilities: [{
        role: "Co-founder, Openboard",
        institution: "IISER Bhopal",
        duration: "Ongoing",
        description: "Along with my dear friend Samriddha we have started an indepent intitiative to let students come forward and speak their minds about topics which they are passionate about preferably to a general audience."
    }, {
        role: "Department Representative, Math Dept.",
        institution: "IISER Bhopal",
        duration: "Sep 2024 – Present",
        description: "Elected representative for the 2022 batch, responsible for facilitating student concerns and academic feedback between students and faculty."
    }, {
        role: "Core Member, Math Club",
        institution: "IISER Bhopal",
        duration: "Jun 2024 – Jul 2025",
        description: "Actively involved in organizing guest lectures, weekly academic discussions, and student outreach events to foster a mathematical community."
    }, {
        role: "Peer Counselor",
        institution: "IISER Bhopal",
        duration: "Jul 2023 – Jul 2025",
        description: "Part of the Institute Counselling Cell, offering peer support and guidance to students on academic and personal issues."
    }, {
        role: "Founding Student Advisor, Ingenium",
        institution: "IISER Bhopal",
        duration: "Ongoing",
        description: "Ingenium is the board games club of IISER Bhopal, the brainchild of Dhruv Dua, my peer at IISER Bhopal. The aim of the club is to inculcate a culture of different kinds of games apart from the conventional ones, at IISERB."
    }],
    academicExperiences: {
        internships: [{
            title: "Research Intern",
            institution: "Institute of Science, Banaras Hindu University",
            duration: "May 2025 – Present",
            description: "This ongoing project began with a unilateral focus on Algebraic Topology, building a strong foundation leading up to Homotopy Theory and Homology. The first phase has involved studying standard textbooks and exploring papers that present both classical problems and modern perspectives in the field. Currently, the focus has shifted towards problem-solving and applying these theoretical tools to tackle more advanced challenges."
        }, {
            title: "Summer Research Intern",
            institution: "Institute of Science, Banaras Hindu University",
            duration: "May – July 2024",
            description: "This summer project focused on building a foundational understanding of Braid Theory, the development of related algorithms, and exploring its applications. The work involved tackling key problems such as the word problem and the conjugacy problem, studying knot invariants, and delving into other introductory topics in Knot Theory."
        }],
        summerSchools: [{
            title: "Summer Program",
            institution: "TIFR - Centre for Applicable Mathematics",
            duration: "June 2025 - July 2025",
            description: " The program included courses on Reproducing Kernel Hilbert Spaces, Geometric Measure theory, Geometric Function theory, Gibbs Measure and Entropy, Multiscale problems in PDE, Microlocal Analysis and Inverse Problems, along with several keynote lecture about ongoing research in Analysis and Combinatorics, delivered by leading researchers in the field."
        }, {
            title: "Mathematics Summer Program",
            institution: "Indraprastha Institute of Information Technology, Delhi",
            duration: "June 2024",
            description: "An intensive program covering the fundamentals of Analysis, Abstract Algebra, Topology, Distribution Theory, along with problem solving sessions."
        }],
    },
    events: [{
        title: "The Probabilistic Method in Analysis",
        description: "Gave the first Openboard talk. More about that talk can be looked at on the Openboard website.",
        link: {
            url: "https://openboard-web.vercel.app/",
            text: "Openboard website"
        }
    }, {
        title: "Khel-Culus",
        description: "Khel, in my mother tongue Hindi, stands for sport. Khel-culus represents the treatise of calculus as a sport. It was the name for the integration bee held during the annual math fest, Continuum, organised by the department of math at IISER bhopal. I organised the event, along with Yash Sharma, to fruition despite several unavoidable obstacles."
    }, {
        title: "Big-Tac-Toe",
        description: "It's a wordplay (Big + Tic-tac-toe) which is another name for the game ultimate tic-tac-toe. The event was again held at Continuum, collaborating with the board games club, Ingenium. The event included a knockout stage gameplay with ultimately Saurav Kanetkar coming out on top as the Big-Tac-Toe champion, 2025 edition.",
        link: {
            url: "https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe",
            text: "Ultimate Tic-Tac-Toe"
        }
    }],
    contact: {
        email: "adeetya22@iiserb.ac.in",
        linkedin: "https://www.linkedin.com/in/adeetya-choubey-6b2a44254/"
    }
};
const pages = ['About', 'AcadEx', 'Research', 'Events', 'Links', 'Resources', 'Contact'];

// --- Custom Hooks ---
const useTheme = () => {
    const [theme, setTheme] = React.useState('light');

    React.useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const initialTheme = storedTheme || 'light';
        setTheme(initialTheme);
    }, []);

    React.useEffect(() => {
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return { theme, toggleTheme };
};


// --- Reusable UI Components ---
const Card = ({ children, className = "" }) => (
    <div
        className={`bg-[#FFDCDC]/40 dark:bg-[#00337C]/30 backdrop-blur-xl rounded-2xl p-6 border border-[#FFD6BA]/50 dark:border-[#1C82AD]/50 transition-all duration-300 shadow-md shadow-[#FFD6BA]/20 dark:shadow-black/20 hover:shadow-[#FFD6BA]/40 dark:hover:shadow-[#03C988]/20 hover:shadow-xl hover:-translate-y-1 ${className}`}
    >
        {children}
    </div>
);

const Title = ({ children }) => (
    <h2
        className="text-4xl md:text-5xl font-bold font-display text-stone-800 dark:text-gray-100 mb-10 pb-4 border-b-4 border-red-500"
    >
        {children}
    </h2>
);

const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-stone-800 dark:text-yellow-400 hover:bg-[#FFDCDC]/60 dark:hover:bg-[#00337C]/60 transition-colors duration-300"
        >
            {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
        </button>
    );
};


// --- Page Components ---
const AboutPage = () => (
    <div>
        <Title>About</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
                <h3 className="text-2xl font-bold font-display text-stone-800 dark:text-gray-100 mb-4">Bio-Sketch</h3>
                <p className="text-lg leading-relaxed text-stone-700 dark:text-neutral-200 mb-4">{cvData.profile.intro}</p>
                <p className="text-lg leading-relaxed text-stone-700 dark:text-neutral-200 mb-4">
                     I have strong interests in <strong className="font-semibold text-stone-800 dark:text-white">Abstract Algebra</strong> and <strong className="font-semibold text-stone-800 dark:text-white">Topology</strong>, which also slightly extend to some elementary <strong className="font-semibold text-stone-800 dark:text-white">functional analysis</strong>. I have tried to engage deeply with the fields and topics that intrigue me through the medium of guided reading projects and summer training programs.
                </p>
                <p className="text-lg leading-relaxed text-stone-700 dark:text-neutral-200">{cvData.profile.ambition}</p>
            </Card>
             <Card>
                <h3 className="text-2xl font-bold font-display text-stone-800 dark:text-gray-100 mb-6">Education</h3>
                <div className="space-y-6">
                    {cvData.education.map(edu => (
                        <div key={edu.institution} className="border-l-4 border-red-500 pl-4">
                            <h4 className="text-xl font-bold text-red-700 dark:text-red-400 font-display">{edu.institution}</h4>
                            <p className="text-md font-semibold text-stone-600 dark:text-neutral-400">{edu.degree}</p>
                            <p className="text-sm text-stone-500 dark:text-neutral-500 mb-2">{edu.duration}</p>
                            {Array.isArray(edu.grades) && (
                                <ul className="list-disc list-inside text-stone-600 dark:text-neutral-400">
                                    {edu.grades.map(grade => <li key={grade}>{grade}</li>)}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </Card>
        </div>
         <div className="mt-8">
            <Card>
                <h3 className="text-2xl font-bold font-display text-stone-800 dark:text-gray-100 mb-6">Positions of Responsibility</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cvData.responsibilities.map(resp => (
                         <div key={resp.role} className="border-l-4 border-red-500 pl-4">
                            <h4 className="text-xl font-bold text-red-700 dark:text-red-400 font-display">{resp.role}</h4>
                            <p className="text-md font-semibold text-stone-600 dark:text-neutral-400 mb-1">{resp.institution}</p>
                            <p className="text-sm text-stone-500 dark:text-neutral-500 mb-3">{resp.duration}</p>
                            <p className="text-lg leading-relaxed text-stone-700 dark:text-neutral-200">
                                {resp.role === "Co-founder, Openboard" ? (
                                    <>
                                        Along with my dear friend <a href="https://samriddhas-quantum-realm.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline font-semibold">Samriddha</a> we have started an indepent intitiative to let students come forward and speak their minds about topics which they are passionate about preferably to a general audience. Learn more about <a href="https://openboard-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline font-semibold">Openboard</a>.
                                    </>
                                ) : (
                                    resp.description
                                )}
                            </p>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    </div>
);

const ResearchPage = () => (
    <div>
        <Title>Research</Title>
        <Card>
            <div className="space-y-8">
                {cvData.research.map((item, index) => (
                    <div key={index} className={`pb-8 ${index < cvData.research.length - 1 ? 'border-b border-[#FFD6BA]/80 dark:border-[#1C82AD]/80' : ''}`}>
                        <h3 className="text-2xl font-bold font-display text-red-600 dark:text-red-400 mb-2">{item.title}</h3>
                        <p className="text-md font-semibold text-stone-600 dark:text-neutral-400 mb-1">{item.guide}</p>
                        <p className="text-sm text-stone-500 dark:text-neutral-500 mb-3">{item.duration}</p>
                        <p className="text-lg leading-relaxed text-stone-700 dark:text-neutral-200">
                             <strong className="font-semibold text-stone-800 dark:text-white">Cayley graphs</strong> are graphs which exhibit the nature of action of a group G on a set S, which is closed under inverses (typically generating set). A graph is said to be integral if each of the eigenvalues of its Adjacency Matrix is an integer. The <strong className="font-semibold text-stone-800 dark:text-white">genus of a graph</strong> is the minimum number of handles (or holes) that must be added to a sphere to embed the graph on the resulting surface without any edge crossings. All of this needs to be said and done more precisely. I use computational and algebraic tools to explore these two properties of cayley graphs on finite abelian groups. (More about my work updating soon)
                        </p>
                    </div>
                ))}
            </div>
        </Card>
    </div>
);


const AcademicExperiencesPage = () => (
    <div>
        <Title>Academic Experiences</Title>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
                <h3 className="text-2xl font-bold font-display text-red-600 dark:text-red-400 mb-6">Research Internships</h3>
                <div className="space-y-8">
                    {cvData.academicExperiences.internships.map((exp, index) => (
                         <div key={exp.title + exp.duration} className={`pb-8 ${index < cvData.academicExperiences.internships.length - 1 ? 'border-b border-[#FFD6BA]/80 dark:border-[#1C82AD]/80' : ''}`}>
                            <h4 className="text-xl font-semibold font-display text-stone-800 dark:text-gray-100">{exp.title} at {exp.institution}</h4>
                            <p className="text-sm text-stone-500 dark:text-neutral-500 mb-3">{exp.duration}</p>
                            <p className="text-lg leading-relaxed text-stone-700 dark:text-neutral-200">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </Card>
            <Card>
                <h3 className="text-2xl font-bold font-display text-red-600 dark:text-red-400 mb-6">Summer Schools</h3>
                <div className="space-y-8">
                    {cvData.academicExperiences.summerSchools.map(exp => (
                        <div key={exp.title}>
                            <h4 className="text-xl font-bold font-display text-stone-800 dark:text-gray-100">{exp.title}</h4>
                            <p className="text-md font-semibold text-stone-600 dark:text-neutral-400 mb-1">{exp.institution}</p>
                            <p className="text-sm text-stone-500 dark:text-neutral-500 mb-4">{exp.duration}</p>
                            <p className="text-lg leading-relaxed text-stone-700 dark:text-neutral-200">{exp.description}</p>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    </div>
);

const EventsPage = () => (
    <div>
        <Title>Events</Title>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cvData.events.map(event => (
                <Card key={event.title}>
                    <h3 className="text-2xl font-bold font-display text-red-600 dark:text-red-400 mb-4">{event.title}</h3>
                    <p className="text-lg leading-relaxed text-stone-700 dark:text-neutral-200">
                        {event.link ? (
                            <>
                                {event.description.replace(event.link.text, '')}
                                <a href={event.link.url} target="_blank" rel="noopener noreferrer" className="text-red-600 dark:text-red-400 hover:underline font-semibold">
                                    {event.link.text}
                                </a>.
                            </>
                        ) : (
                            event.description
                        )}
                    </p>
                </Card>
            ))}
        </div>
    </div>
);

const ComingSoonPage = ({ title }) => (
    <div>
        <Title>{title}</Title>
        <Card>
            <h3 className="text-2xl font-semibold font-display text-stone-800 dark:text-gray-100 mb-4">Something's cooking...</h3>
            <p className="text-lg text-stone-700 dark:text-neutral-200">
                This page is currently under construction. Check back later for new content!
            </p>
        </Card>
    </div>
);

const ContactPage = () => (
    <div>
        <Title>Contact</Title>
        <Card>
            <div className="flex flex-col space-y-6">
                <p className="text-lg text-stone-700 dark:text-neutral-200">
                    Feel free to reach out for collaborations, discussions, or inquiries.
                </p>
                <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <a href={`mailto:${cvData.contact.email}`} className="text-lg text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300 underline">{cvData.contact.email}</a>
                </div>
                <div className="flex items-center space-x-4">
                    <Linkedin className="w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                    <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 transition-colors duration-300 underline">LinkedIn Profile</a>
                </div>
                <div className="mt-4 pt-6 border-t border-[#FFD6BA]/80 dark:border-[#1C82AD]/80 text-stone-600 dark:text-neutral-400">
                    <p>{cvData.location}</p>
                </div>
            </div>
        </Card>
    </div>
);

// --- Inline Pixel Torus Canvas Component ---
const InlinePixelTorus = () => {
    const canvasRef = React.useRef(null);
    const animationFrameIdRef = React.useRef(null);

    React.useEffect(() => {
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

            const R = 18,
                r = 9;
            const cx = SIZE / 2,
                cy = SIZE / 2;

            const points = [];

            const light = { x: 0.5, y: 0.5, z: 1 };
            const lightMag = Math.sqrt(light.x ** 2 + light.y ** 2 + light.z ** 2);
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
    const [activePage, setActivePage] = React.useState('About');
    const { theme, toggleTheme } = useTheme();
    const [showLanding, setShowLanding] = React.useState(true);
    
    React.useEffect(() => {
        const fontLink = document.createElement('link');
        fontLink.href = "https://fonts.googleapis.com/css2?family=Cal+Sans&family=Inter:wght@400;600;700&display=swap";
        fontLink.rel = "stylesheet";

        if (!document.querySelector(`link[href="${fontLink.href}"]`)) {
            document.head.appendChild(fontLink);
        }
    }, []);

    React.useEffect(() => {
        if (!showLanding) {
            window.scrollTo(0, 0);
        }
    }, [activePage, showLanding]);

    const navigateToPage = (page) => {
        setActivePage(page);
        setShowLanding(false);
    }
    
    const pageStyle = { fontFamily: "'Inter', sans-serif" };
    const bgStyle = { background: theme === 'light' ? '#FFF2EB' : '#13005A' };

    if (showLanding) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden relative transition-colors duration-500" style={{...pageStyle, ...bgStyle}}>
                <style>{`.font-display { font-family: 'Cal Sans', sans-serif; }`}</style>
                 <div className="absolute top-4 right-4 z-20">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
                <div className="relative z-10">
                    <h1 className="font-bold font-display text-stone-800 dark:text-white mb-2 flex flex-nowrap items-center justify-center" style={{ fontSize: 'clamp(2.5rem, 10vw, 6rem)' }}>
                        Adeetya Ch<InlinePixelTorus />ubey
                    </h1>
                    <p className="text-red-600 dark:text-red-500 mb-12 text-lg md:text-2xl">
                        Algebra | Topology
                    </p>
                    <nav className="flex flex-wrap gap-x-6 gap-y-4 justify-center">
                        {pages.map(page => (
                            <button key={page} onClick={() => navigateToPage(page)} className="text-xl font-medium text-stone-700 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-500 transition-colors duration-300">
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
            case 'AcadEx': return <AcademicExperiencesPage />;
            case 'Research': return <ResearchPage />;
            case 'Events': return <EventsPage />;
            case 'Links': return <ComingSoonPage title="Links" />;
            case 'Resources': return <ComingSoonPage title="Resources" />;
            case 'Contact': return <ContactPage />;
            default: return <AboutPage />;
        }
    };

    const NavLink = ({ pageName }) => (
        <button
            onClick={() => setActivePage(pageName)}
            className={`relative px-4 py-2 text-md font-semibold transition-colors duration-300 rounded-full ${ activePage === pageName ? 'text-white bg-red-600' : 'text-stone-600 dark:text-neutral-300 hover:text-red-600 dark:hover:text-red-400'}`}
        >
            {pageName}
        </button>
    );

    return (
        <div className="min-h-screen text-stone-800 dark:text-neutral-200 transition-colors duration-500 font-sans" style={{...pageStyle, ...bgStyle}}>
            <style>{`.font-sans { font-family: 'Inter', sans-serif; } .font-display { font-family: 'Cal Sans', sans-serif; }`}</style>
            <header className="bg-[#FFDCDC]/30 dark:bg-[#00337C]/30 backdrop-blur-lg sticky top-0 z-20 border-b border-[#FFD6BA]/50 dark:border-[#1C82AD]/50">
                <div className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
                    <div>
                        <button onClick={() => setShowLanding(true)} className="text-left transition-opacity duration-300 hover:opacity-70">
                            <h1 className="text-2xl sm:text-3xl font-bold font-display text-stone-900 dark:text-white">{cvData.name}</h1>
                            <p className="text-sm sm:text-md text-stone-600 dark:text-neutral-400">Mathematics Undergraduate</p>
                        </button>
                    </div>
                     <div className="flex">
                         <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                </div>
                 <nav className="bg-[#FFE8CD]/30 dark:bg-[#00337C]/20 backdrop-blur-lg border-t border-b border-[#FFD6BA]/50 dark:border-[#1C82AD]/50">
                   <div className="container mx-auto px-2 sm:px-6 py-2 flex justify-center flex-wrap gap-1 sm:gap-2">
                        {pages.map(page => <NavLink key={page} pageName={page} />)}
                   </div>
                </nav>
            </header>

            <main className="container mx-auto px-4 sm:px-6 py-16 relative z-10">
                 {renderPage()}
            </main>
            
            <footer className="bg-[#FFDCDC]/30 dark:bg-[#00337C]/30 backdrop-blur-lg mt-16 py-6 border-t border-[#FFD6BA]/50 dark:border-[#1C82AD]/50">
                <div className="container mx-auto px-6 text-center text-stone-600 dark:text-neutral-400">
                    <p>&copy; {new Date().getFullYear()} Adeetya Choubey. Built with React & Tailwind CSS.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;

