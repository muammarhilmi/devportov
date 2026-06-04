import React from 'react';
import { motion } from 'framer-motion';

const Education = ({ education }) => {
  return (
    <section id="education" className="py-20 px-6 max-w-5xl mx-auto border-t border-zinc-100 dark:border-zinc-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold tracking-tight mb-8 text-zinc-900 dark:text-zinc-100">Education</h2>
        <div className="flex flex-col gap-6">
          {education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 group">
              <div className="w-48 shrink-0 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                {edu.period}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{edu.school}</h3>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
