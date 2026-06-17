import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

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
              {project.images && project.images.length > 0 && (
                <div className="mt-4">
                  {project.images.length === 1 ? (
                    <img 
                      src={project.images[0]} 
                      alt={`${project.title} screenshot`} 
                      className={`w-full h-auto rounded-lg object-cover shadow-sm ${
                        project.images[0].endsWith('.svg') 
                          ? 'dark:invert border-none' 
                          : 'border border-zinc-200 dark:border-zinc-800'
                      }`} 
                    />
                  ) : (
                    <div className="relative group">
                      <div className="overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-sm relative">
                        <motion.div 
                          className="flex"
                          animate={{ x: `-${currentImageIndex * 100}%` }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                          {project.images.map((img, idx) => (
                            <img 
                              key={idx} 
                              src={img} 
                              alt={`${project.title} screenshot ${idx + 1}`} 
                              className={`w-full flex-shrink-0 h-auto object-cover ${
                                img.endsWith('.svg') ? 'dark:invert' : ''
                              }`} 
                            />
                          ))}
                        </motion.div>
                        
                        {/* Navigation Arrows */}
                        <button 
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/50 text-zinc-800 dark:text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black"
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button 
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/50 text-zinc-800 dark:text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-black"
                        >
                          <ChevronRight size={20} />
                        </button>
                      </div>
                      
                      {/* Dots Indicator */}
                      <div className="flex justify-center gap-2 mt-3">
                        {project.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentImageIndex(idx);
                            }}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              currentImageIndex === idx 
                                ? 'bg-zinc-800 dark:bg-zinc-200' 
                                : 'bg-zinc-300 dark:bg-zinc-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectCard;
