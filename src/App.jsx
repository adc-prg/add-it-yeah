import React, { useState, useEffect } from 'react';

// --- Icon Imports ---
// In a real project, you would install this with: npm install lucide-react
// For this preview, we'll define simple SVG components.
const Sun = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
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


// --- Data extracted from your CV ---
const cvData = {
  name: "Adeetya Choubey",
  location: "Bhopal, Madhya Pradesh, India",
  profile: {
    intro: "Math undegraduate, enrolled in the dual degree BS-MS program at IISER Bhopal.",
    interests: "I have strong interests in Abstract Algebra and Topology, which also slightly extend to some elementary functional analysis. I have tried to engage deeply with the fields and topics that intrigue me through the medium of guided reading projects and summer training programs.",
    ambition: "My academic trajectory is motivated by a long term goal of entering mathematical research and academia."
  },
  education: [
    {
      institution: "Indian Institute of Science Education and Research, Bhopal",
      degree: "BS-MS (Dual Degree), Major: Mathematics",
      duration: "2022 – current",
      grades: ["Cumulative performance: 8.73/10"]
    },
    {
      institution: "Puna International School, Gandhinagar",
      degree: "Senior Secondary (CBSE), Science Stream",
      duration: "2020–2022",
      grades: ["Grade: 87%"]
    },
     {
      institution: "Kendriya Vidyalaya",
      degree: "Secondary School (CBSE)",
      duration: "2016–2020",
      grades: ["Grade: 91.6%"]
    }
  ],
  research: {
    title: "Abstract Algebra and Topology",
    experiences: [
      {
        title: "Research Intern",
        institution: "Institute of Science, Banaras Hindu University",
        duration: "May 2025 – Present",
        description: "This ongoing project began with a unilateral focus on Algebraic Topology, building a strong foundation leading up to Homotopy Theory and Homology. The first phase has involved studying standard textbooks and exploring papers that present both classical problems and modern perspectives in the field. Currently, the focus has shifted towards problem-solving and applying these theoretical tools to tackle more advanced challenges, particularly in Algebraic Graph theory."
      },
      {
        title: "Summer Research Intern",
        institution: "Institute of Science, Banaras Hindu University",
        duration: "May – July 2024",
        description: "This summer project focused on building a foundational understanding of Braid Theory, the development of related algorithms, and exploring its applications. The work involved tackling key problems such as the word problem and the conjugacy problem, studying knot invariants, and delving into other introductory topics in Knot Theory. In parallel, I engaged in readings and discussions on concepts from General Topology, Group theory, along with exploring ongoing research in these and other areas of Mathematics."
      }
    ]
  },
  contact: {
      email: "adeetyachoubey@example.com", // Placeholder email
      linkedin: "https://www.linkedin.com/in/adeetya-choubey-6b2a44254/" // Placeholder LinkedIn
  }
};


// --- Reusable UI Components ---
const Card = ({ children, className = "" }) => (
  <div className={`bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 ${className}`}>
    {children}
  </div>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 pb-2 border-b-2 border-blue-600 dark:border-blue-400">
    {children}
  </h2>
);


// --- Page Components ---

const BioSketchPage = () => (
  <div>
    <SectionTitle>Bio-Sketch</SectionTitle>
    <Card>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">{cvData.profile.intro}</p>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">{cvData.profile.interests}</p>
      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{cvData.profile.ambition}</p>
    </Card>

    <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-10 mb-4">Education</h3>
    <div className="space-y-6">
      {cvData.education.map(edu => (
        <Card key={edu.institution}>
          <h4 className="text-xl font-bold text-blue-700 dark:text-blue-400">{edu.institution}</h4>
          <p className="text-md font-semibold text-gray-600 dark:text-gray-400">{edu.degree}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">{edu.duration}</p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            {edu.grades.map(grade => <li key={grade}>{grade}</li>)}
          </ul>
        </Card>
      ))}
    </div>
  </div>
);

const ResearchPage = () => (
  <div>
    <SectionTitle>Research Interests: {cvData.research.title}</SectionTitle>
    <div className="space-y-8">
      {cvData.research.experiences.map(exp => (
        <Card key={exp.title}>
          <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400">{exp.title}</h3>
          <p className="text-md font-semibold text-gray-600 dark:text-gray-400 mb-1">{exp.institution}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{exp.duration}</p>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">{exp.description}</p>
        </Card>
      ))}
    </div>
  </div>
);

const ProofsPage = () => (
  <div>
    <SectionTitle>Enjoyable Proofing Techniques</SectionTitle>
    <Card>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Content Placeholder</h3>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        This is a placeholder for your "Enjoyable Proofing Techniques" page. You can edit this section to add your favorite mathematical proofs, techniques, or insights.
      </p>
      <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
          <h4 className="font-bold text-gray-800 dark:text-gray-200">Example Idea: Proof by Contradiction</h4>
          <p className="mt-2 text-gray-600 dark:text-gray-400">You could describe why you find this technique elegant, provide a classic example like the irrationality of √2, and discuss its applications in areas you've studied.</p>
      </div>
    </Card>
  </div>
);

const GalleryPage = () => (
    <div>
        <SectionTitle>Gallery</SectionTitle>
        <Card>
            <p className="text-lg text-center text-gray-700 dark:text-gray-300">
                This is a placeholder for your gallery. You can add images of academic events, conferences, or whiteboard sessions here.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className="bg-gray-200 dark:bg-gray-700 aspect-square rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Image {i}</span>
                    </div>
                ))}
            </div>
        </Card>
    </div>
);


const ContactPage = () => (
  <div>
    <SectionTitle>Contact Information</SectionTitle>
    <Card>
        <div className="flex flex-col space-y-4">
            <p className="text-lg text-gray-700 dark:text-gray-300">
                Feel free to reach out for collaborations, discussions, or inquiries.
            </p>
            <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <a href={`mailto:${cvData.contact.email}`} className="text-lg text-blue-600 dark:text-blue-400 hover:underline">{cvData.contact.email}</a>
            </div>
            <div className="flex items-center space-x-4">
                <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <a href={cvData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg text-blue-600 dark:text-blue-400 hover:underline">LinkedIn Profile</a>
            </div>
             <div className="mt-4 text-gray-600 dark:text-gray-400">
                <p>{cvData.location}</p>
            </div>
        </div>
    </Card>
  </div>
);


// --- Main App Component ---
function App() {
  const [activePage, setActivePage] = useState('Bio-Sketch');
  const [theme, setTheme] = useState('light');

  // This effect runs when the 'theme' state changes.
  // It adds or removes the 'dark' class from the root <html> element.
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const NavLink = ({ pageName }) => (
    <button
      onClick={() => setActivePage(pageName)}
      className={`px-3 sm:px-4 py-2 rounded-md text-sm sm:text-lg font-medium transition-colors duration-300 ${
        activePage === pageName
          ? 'bg-blue-600 text-white shadow-md'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
      }`}
    >
      {pageName}
    </button>
  );

  const renderPage = () => {
    switch (activePage) {
      case 'Bio-Sketch': return <BioSketchPage />;
      case 'Research': return <ResearchPage />;
      case 'Proofs': return <ProofsPage />;
      case 'Gallery': return <GalleryPage />;
      case 'Contact': return <ContactPage />;
      default: return <BioSketchPage />;
    }
  };
  
  const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500 font-serif">
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">{cvData.name}</h1>
            <p className="text-sm sm:text-md text-gray-500 dark:text-gray-400">Student of Mathematics</p>
          </div>
          <button onClick={toggleTheme} className="p-2 rounded-full text-gray-800 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          </button>
        </div>
        <nav className="bg-gray-100 dark:bg-gray-700">
           <div className="container mx-auto px-2 sm:px-6 py-2 flex justify-center flex-wrap gap-1 sm:gap-2">
                <NavLink pageName="Bio-Sketch" />
                <NavLink pageName="Research" />
                <NavLink pageName="Proofs" />
                <NavLink pageName="Gallery" />
                <NavLink pageName="Contact" />
           </div>
        </nav>
      </header>
      
      <main className="container mx-auto px-4 sm:px-6 py-10">
        {renderPage()}
      </main>
      
      <footer className="bg-gray-200 dark:bg-gray-800 mt-12 py-6">
        <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
           <p>&copy; {new Date().getFullYear()} Adeetya Choubey. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
