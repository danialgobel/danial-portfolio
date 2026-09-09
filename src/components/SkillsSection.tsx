import React from 'react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { Layers, Cpu, Code2 } from 'lucide-react';
import { motion } from 'motion/react';
import { sectionHeaderVariants, staggeredCardVariants } from '../utils/animationVariants';

export const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#0c0d0e]">
      <div className="max-w-6xl mx-auto flex flex-col gap-5 sm:gap-7">
        
        {/* Section Header */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionHeaderVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-white/10 pb-4 sm:pb-6"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
              <span className="w-2 h-2 bg-white rounded-none" />
              <span>TECH STACK &bull; CAPABILITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Technologies &amp; Capabilities
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
            Arsitektur stack terintegrasi untuk Web, Mobile App, Cloud Realtime, serta Creative Video Production.
          </p>
        </motion.div>

        {/* Ultra-Compact Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {SKILLS_CATEGORIES.map((category, idx) => (
            <motion.div
              key={category.categoryName}
              custom={idx}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.15 }}
              variants={staggeredCardVariants}
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-[#121316] border border-white/10 p-4 sm:p-5 flex flex-col gap-3.5 hover:border-white/20 transition-colors duration-200"
            >
              {/* Header Category */}
              <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                <div className="flex items-center gap-2">
                  {idx === 0 && <Code2 className="w-4 h-4 text-zinc-300" />}
                  {idx === 1 && <Cpu className="w-4 h-4 text-zinc-300" />}
                  {idx === 2 && <Layers className="w-4 h-4 text-zinc-300" />}
                  <h3 className="font-semibold text-sm text-white tracking-tight">
                    {category.categoryName}
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-zinc-500">
                  0{idx + 1}
                </span>
              </div>

              {/* Compact Flex-Wrap Badge Matrix */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 20 }}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-default"
                  >
                    <TechIcon name={skill.iconKey} size={14} className="w-3.5 h-3.5 shrink-0" />
                    <span className="text-xs font-medium text-white tracking-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              <p className="text-[11px] text-zinc-400 font-normal leading-relaxed pt-1">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
