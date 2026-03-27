import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { fadeUp, staggerContainer, scaleIn } from '@/utils/animations'
import { TECH_STACK } from '@/utils/data'
import type { TechCategory } from '@/types'

function TechCard({ category }: { category: TechCategory }) {
  const isAI = category.id === 'genai'

  return (
    <motion.article
      variants={scaleIn}
      whileHover={{ y: -4, borderColor: '#38bdf8' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`bg-surface/60 backdrop-blur-lg p-8 rounded-xl border border-border hover:border-accent/40 shadow-sm transition-all duration-300 group ${
        isAI ? 'lg:row-span-2' : ''
      }`}
      aria-labelledby={`tech-title-${category.id}`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div
          className={`p-3 rounded-lg ${
            category.variant === 'secondary'
              ? 'bg-secondary/10'
              : 'bg-accent/10'
          }`}
        >
          <span
            className={`material-symbols-outlined ${
              category.variant === 'secondary' ? 'text-secondary' : 'text-accent'
            }`}
            aria-hidden="true"
          >
            {category.icon}
          </span>
        </div>
        <span
          className={`text-[10px] font-bold transition-colors ${
            category.variant === 'secondary'
              ? 'text-border group-hover:text-secondary'
              : 'text-border group-hover:text-accent'
          }`}
          aria-hidden="true"
        >
          {category.number}
        </span>
      </div>

      {/* Title */}
      <h3
        id={`tech-title-${category.id}`}
        className="text-xl font-bold mb-6 text-primary tracking-tight"
      >
        {category.title}
      </h3>

      {/* Description (AI card only) */}
      {category.description && (
        <p className="text-sm text-secondary mb-4">{category.description}</p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {category.tags.map((tag) => (
          <span
            key={tag}
            className={`px-3 py-1 text-xs font-medium border rounded border-border/50 text-secondary bg-surface`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Specializations (AI card only) */}
      {category.specializations && (
        <div className="mt-8 pt-8 border-t border-border">
          <span className="text-[0.6rem] uppercase tracking-widest text-secondary mb-4 block font-bold">
            Key Specialization
          </span>
          <ul className="space-y-2">
            {category.specializations.map((spec) => (
              <li key={spec} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-primary">{spec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.article>
  )
}

export default function SkillsSection() {
  const { ref, inView } = useScrollReveal()

  return (
    <section
      id="skills"
      ref={ref}
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto"
      aria-labelledby="skills-heading"
    >
      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
      >
        <div className="max-w-xl">
          <motion.span variants={fadeUp} className="text-sm uppercase tracking-[0.2em] text-accent mb-4 block font-semibold">
            Technical Ecosystem
          </motion.span>
          <motion.h2 id="skills-heading" variants={fadeUp} className="text-4xl font-bold tracking-tighter text-primary">
            The Neural Stack
          </motion.h2>
          <motion.p variants={fadeUp} className="text-secondary mt-4">
            A curated selection of technologies leveraged to build precision-driven data solutions.
          </motion.p>
        </div>

        <motion.div variants={fadeUp} className="hidden md:flex gap-2 items-center" aria-hidden="true">
          <div className="w-12 h-[2px] bg-accent" />
          <div className="w-4 h-[2px] bg-border" />
          <div className="w-2 h-[2px] bg-border" />
        </motion.div>
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {TECH_STACK.map((category) => (
          <TechCard key={category.id} category={category} />
        ))}
      </motion.div>
    </section>
  )
}
