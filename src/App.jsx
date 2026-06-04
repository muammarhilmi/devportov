import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      
      <main>
        {/* Section Order: Hero (contains About) -> Projects -> Experience -> Education -> Skills */}
        <Hero data={portfolioData} />
        
        <section id="projects" className="py-20 px-6 max-w-5xl mx-auto border-t border-zinc-100 dark:border-zinc-900">
          <h2 className="text-2xl font-semibold tracking-tight mb-10 text-zinc-900 dark:text-zinc-100">Projects</h2>
          <div className="flex flex-col gap-4">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </section>

        <Experience experience={portfolioData.experience} />
        
        <Education education={portfolioData.education} />

        <Skills skills={portfolioData.skills} />
      </main>

      <footer className="py-10 px-6 text-center text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-100 dark:border-zinc-900 transition-colors duration-300">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} PORTOFOLIO. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={portfolioData.contact.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Instagram</a>
            <a href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">GitHub</a>
            <a href={portfolioData.contact.email} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact Me</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
