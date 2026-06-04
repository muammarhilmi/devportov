import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300"
    >
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 flex items-center justify-between hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors focus:outline-none cursor-pointer"
      >
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span 
                key={i} 
                className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 rounded-md"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-zinc-400 dark:text-zinc-500 shrink-0 ml-4"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-2 border-t border-zinc-100 dark:border-zinc-900/50 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              <p>{project.desc}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
