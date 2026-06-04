import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Hero = ({ data }) => {
  return (
    <section id="about" className="pt-40 pb-20 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-[70vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-zinc-900 dark:text-zinc-50">
          {data.name}
        </h1>
        <h2 className="text-xl md:text-2xl text-zinc-500 dark:text-zinc-400 font-light tracking-wide mb-8">
          {data.role}
        </h2>
        
        <div className="flex gap-4 mb-12">
          <a href={data.contact.instagram} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
            <InstagramIcon />
          </a>
          <a href={data.contact.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
            <GithubIcon />
          </a>
          <a href={data.contact.email} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all">
            <Mail size={20} />
          </a>
        </div>

        <div className="max-w-2xl">
          <h3 className="text-lg font-medium mb-3 text-zinc-900 dark:text-zinc-100">About Me</h3>
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            {data.about}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
