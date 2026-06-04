import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-zinc-100 dark:border-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-zinc-900 dark:text-zinc-100">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="px-4 py-2 text-xs font-medium tracking-wide uppercase bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
