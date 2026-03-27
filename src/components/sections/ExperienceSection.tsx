import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { fadeUp, fadeLeft, fadeRight, staggerContainer } from '@/utils/animations'
import { EXPERIENCES } from '@/utils/data'
import type { Experience } from '@/types'

function ExperienceItem({ exp, index }: { exp: Experience; index: number }) {
  const isEven = index % 2 === 0
  const { ref, inView } = useScrollReveal({ threshold: 0.15 })

  return (
    <motion.article
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="relative flex flex-col md:flex-row items-start md:items-center w-full"
      aria-labelledby={`exp-title-${exp.id}`}
    >
      {/* Timeline Node */}
      <div
        className={`absolute left-4 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-20 shadow-md ${
          exp.nodeColor === 'primary' ? 'bg-primary' : 'bg-secondary'
        }`}
        aria-hidden="true"
      />

      {/* Left/Right alternating layout */}
      {isEven ? (
        <>
          {/* Meta: right side on desktop, left mobile */}
          <motion.div
            variants={fadeLeft}
            className="md:w-1/2 md:pr-16 pl-12 md:pl-0 order-2 md:order-1 text-left md:text-right"
          >
            <div className="mb-2">
              <span className="text-secondary font-mono text-sm font-bold tracking-widest uppercase">
                {exp.period}
              </span>
            </div>
            <h3 id={`exp-title-${exp.id}`} className="text-2xl font-bold text-primary">
              {exp.company}
            </h3>
            <p className="text-accent text-lg font-medium mb-4">{exp.role}</p>
          </motion.div>

          {/* Card */}
          <motion.div variants={fadeRight} className="md:w-1/2 md:pl-16 pl-12 order-3">
            <ExperienceCard exp={exp} align="left" />
          </motion.div>
        </>
      ) : (
        <>
          {/* Card: left on desktop */}
          <motion.div variants={fadeLeft} className="md:w-1/2 md:pr-16 pl-12 md:pl-0 order-2 text-left md:text-right">
            <ExperienceCard exp={exp} align="right" />
          </motion.div>

          {/* Meta */}
          <motion.div variants={fadeRight} className="md:w-1/2 md:pl-16 pl-12 order-1 md:order-2">
            <div className="mb-2">
              <span className="text-secondary font-mono text-sm font-bold tracking-widest uppercase">
                {exp.period}
              </span>
            </div>
            <h3 id={`exp-title-${exp.id}`} className="text-2xl font-bold text-primary">
              {exp.company}
            </h3>
            <p className="text-accent text-lg font-medium mb-4">{exp.role}</p>
          </motion.div>
        </>
      )}
    </motion.article>
  )
}

function ExperienceCard({ exp, align }: { exp: Experience; align: 'left' | 'right' }) {
  return (
    <div className="bg-surface/50 border border-border p-8 rounded-xl relative overflow-hidden group hover:border-accent/30 transition-colors">
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity" aria-hidden="true">
        <span className="material-symbols-outlined text-5xl">{exp.icon}</span>
      </div>
      <ul className="space-y-4 text-secondary" aria-label={`Achievements at ${exp.company}`}>
        {exp.achievements.map((achievement, i) => (
          <li
            key={i}
            className={`flex items-start gap-3 ${align === 'right' ? 'justify-end text-right' : ''}`}
          >
            {align === 'left' && (
              <span className="material-symbols-outlined text-accent text-sm mt-1 flex-shrink-0" aria-hidden="true">
                token
              </span>
            )}
            <span dangerouslySetInnerHTML={{ __html: achievement.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary font-medium">$1</strong>') }} />
            {align === 'right' && (
              <span className="material-symbols-outlined text-accent text-sm mt-1 flex-shrink-0" aria-hidden="true">
                timeline
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ExperienceSection() {
  const { ref, inView } = useScrollReveal()

  return (
    <section
      id="experience"
      className="relative py-32 px-6 max-w-5xl mx-auto"
      aria-labelledby="experience-heading"
    >
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      {/* Section Header */}
      <motion.header
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mb-20 text-center md:text-left"
      >
        <motion.div variants={fadeUp} className="inline-block px-4 py-1.5 rounded-full bg-surface border border-border mb-6">
          <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-bold">
            Chronology
          </span>
        </motion.div>

        <motion.h2
          id="experience-heading"
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-primary mb-6 leading-tight"
        >
          Professional{' '}
          <br />
          <span className="text-secondary">
            Evolution
          </span>
        </motion.h2>

        <motion.p variants={fadeUp} className="text-secondary text-lg max-w-2xl leading-relaxed">
          A trajectory defined by large-scale data systems, algorithmic precision, and the
          relentless pursuit of AI-driven excellence.
        </motion.p>
      </motion.header>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border transform md:-translate-x-1/2"
          aria-hidden="true"
        />

        <div className="space-y-24">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-32 p-12 bg-surface/50 rounded-2xl border border-border overflow-hidden relative"
        aria-label="Call to action"
      >
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-accent/5 blur-[80px] rounded-full" aria-hidden="true" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-3xl font-bold text-primary tracking-tight mb-2">
              Want to see the tech stack?
            </h3>
            <p className="text-secondary">
              Deep dive into the neural architectures powering these results.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-xl bg-surface border border-border text-primary hover:bg-zinc-800 transition-all font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              View Skills
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-xl bg-primary text-background font-bold shadow-lg hover:bg-white/90 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Get in Touch
            </motion.button>
          </div>
        </div>
      </motion.section>
    </section>
  )
}
