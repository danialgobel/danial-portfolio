import React from 'react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { Layers, Cpu, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { sectionHeaderVariants, staggeredCardVariants } from '../utils/animationVariants';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[var(--theme-border-hairline)]">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:gap-8">
        
        {/* Section Header */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionHeaderVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 border-b border-[var(--theme-border-hairline)] pb-4 sm:pb-5"
        >
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-[var(--theme-accent)]">
              <span className="w-2 h-2 bg-[var(--theme-accent)] rounded-full" />
              <span>CAPABILITIES // TECH STACK &amp; SYSTEM ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-medium uppercase tracking-tight text-[var(--theme-text-primary)]">
              System Architecture &amp; Stack
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[var(--theme-text-secondary)] font-normal leading-relaxed">
            Arsitektur stack terintegrasi untuk Web Apps, Mobile Systems (Android &amp; iOS), Cloud Realtime Firebase, serta Creative Multimedia Production.
          </p>
        </motion.div>

        {/* Blueprint Style Categories Grid (Apple Glass) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {SKILLS_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.categoryName}
              custom={idx}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ y: -3 }}
              className="rounded-2xl apple-glass p-5 sm:p-6 flex flex-col justify-between gap-4 shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                {/* Header Category */}
                <div className="flex items-center justify-between pb-3 border-b border-[var(--theme-border-hairline)]">
                  <div className="flex items-center gap-2">
                    {idx === 0 && <Code2 className="w-4 h-4 text-[var(--theme-accent)]" />}
                    {idx === 1 && <Cpu className="w-4 h-4 text-[var(--theme-accent)]" />}
                    {idx === 2 && <Layers className="w-4 h-4 text-[var(--theme-accent)]" />}
                    <h3 className="font-display font-semibold text-base uppercase text-[var(--theme-text-primary)] tracking-tight">
                      {category.categoryName}
                    </h3>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded-lg apple-glass-subtle text-[var(--theme-text-muted)] font-bold">
                    0{idx + 1} //
                  </span>
                </div>

                {/* Badge Matrix */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                      className="apple-glass-pill inline-flex items-center gap-2 px-3 py-1.5 rounded-xl cursor-default shadow-xs"
                    >
                      <TechIcon name={skill.iconKey} size={14} className="w-3.5 h-3.5 text-[var(--theme-accent)] shrink-0" />
                      <span className="text-xs font-mono font-medium text-[var(--theme-text-primary)]">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footnote description */}
              <div className="pt-3 border-t border-[var(--theme-border-hairline)] flex flex-col gap-1">
                <span className="text-[9px] font-mono text-[var(--theme-text-muted)] uppercase tracking-wider">
                  SPECIFICATION BRIEF
                </span>
                <p className="text-xs text-[var(--theme-text-secondary)] font-normal leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
