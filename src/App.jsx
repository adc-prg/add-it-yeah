import React from 'react';

// You can store your data here or in a separate JSON file
const academicData = {
  name: "Dr. Ada Lovelace",
  title: "Professor of Computational Science",
  university: "University of Technology",
  contact: "ada.lovelace@university.edu",
  about: "I am a researcher and educator focusing on the intersection of machine learning and historical computation. My work explores algorithmic potential and its applications in modern science.",
  publications: [
    { id: 1, title: "On the Analytical Engine with a focus on generative algorithms.", year: 2025 },
    { id: 2, title: "A new paradigm for computational thinking.", year: 2023 },
  ],
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-900">{academicData.name}</h1>
          <p className="text-lg text-blue-700">{academicData.title}</p>
          <p className="text-md text-gray-600">{academicData.university}</p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* About Section */}
        <section id="about" className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">{academicData.about}</p>
        </section>

        {/* Publications Section */}
        <section id="publications" className="mb-8">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">Recent Publications</h2>
          <ul className="space-y-4">
            {academicData.publications.map(pub => (
              <li key={pub.id} className="bg-white p-4 rounded-lg shadow">
                <p className="font-semibold text-gray-900">{pub.title}</p>
                <p className="text-sm text-gray-500">{pub.year}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-2xl font-semibold border-b-2 border-blue-500 pb-2 mb-4">Contact</h2>
          <p className="text-gray-700">You can reach me via email at: 
            <a href={`mailto:${academicData.contact}`} className="text-blue-600 hover:underline ml-2">
              {academicData.contact}
            </a>
          </p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white mt-12 py-4">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} {academicData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
