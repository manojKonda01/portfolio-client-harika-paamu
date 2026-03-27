import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { fadeUp, staggerContainer, scaleIn } from '@/utils/animations'
import { PROJECTS } from '@/utils/data'
import type { Project } from '@/types'

function Tag({ label }: { label: string }) {
  return (
    <span className="px-3 py-1 rounded-full bg-surface text-xs font-medium border border-border text-secondary">
      {label}
    </span>
  )
}

function FraudDetectionCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="md:col-span-8 group"
    >
      <article className="bg-surface/50 border border-border h-full rounded-xl overflow-hidden p-8 flex flex-col md:flex-row gap-8 relative hover:border-accent/40 hover:shadow-lg transition-all duration-400">
        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
          <span className="material-symbols-outlined text-8xl">shield_person</span>
        </div>
        <div className="flex-1 space-y-6">
          <div>
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-accent">
              {project.category}
            </span>
            <h3 className="text-3xl font-bold mt-2 text-primary">{project.title}</h3>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">The Challenge</h4>
              <p className="text-secondary text-sm">{project.challenge}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">Methodology</h4>
              <p className="text-secondary text-sm">{project.methodology}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-4">
            {project.tags.map((tag) => <Tag key={tag} label={tag} />)}
          </div>
        </div>
        {project.metrics && (
          <div className="w-full md:w-48 flex flex-col justify-center items-center bg-background rounded-lg p-6 border border-border flex-shrink-0">
            {project.metrics.map((m, i) => (
              <div key={m.label}>
                {i > 0 && <div className="w-full h-[1px] bg-border my-6" />}
                <div className="text-center">
                  <div className={`font-extrabold text-primary mb-1 ${i === 0 ? 'text-4xl' : 'text-xl'}`}>{m.value}</div>
                  <div className="text-[0.6rem] font-bold text-secondary uppercase tracking-widest">{m.label}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </article>
    </motion.div>
  )
}

function CreditRiskCard({ project }: { project: Project }) {
  return (
    <motion.div variants={scaleIn} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="md:col-span-4 group">
      <article className="bg-surface/50 border border-border h-full rounded-xl overflow-hidden p-8 flex flex-col space-y-6 relative hover:border-accent/40 shadow-sm transition-all duration-400">
        <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center border border-accent/20" aria-hidden="true">
          <span className="material-symbols-outlined text-accent">account_balance</span>
        </div>
        <div>
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-accent">{project.category}</span>
          <h3 className="text-2xl font-bold mt-1 text-primary">{project.title}</h3>
        </div>
        <p className="text-secondary text-sm leading-relaxed">{project.description}</p>
        {project.metrics && (
          <div className="pt-4 mt-auto">
            <div className="flex justify-between items-end mb-2">
              <span className="text-xs font-bold text-secondary uppercase">Prediction Gain</span>
              <span className="text-lg font-bold text-primary">{project.metrics[0].value}</span>
            </div>
            <div className="w-full h-1.5 bg-background rounded-full overflow-hidden" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
              <div className="h-full bg-accent w-[85%]" />
            </div>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold text-secondary uppercase">{tag}</span>
          ))}
        </div>
      </article>
    </motion.div>
  )
}

function RAGCard({ project }: { project: Project }) {
  return (
    <motion.div variants={scaleIn} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="md:col-span-5 group">
      <article className="bg-surface/50 border border-border h-full rounded-xl overflow-hidden p-8 flex flex-col space-y-6 relative border-l-4 border-l-accent hover:border-accent/40 shadow-sm transition-all duration-400">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-accent">{project.category}</span>
            <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
          </div>
          <span className="material-symbols-outlined text-accent/40 text-4xl" aria-hidden="true">neurology</span>
        </div>
        {project.quote && (
          <blockquote className="bg-background p-4 rounded-lg border border-border italic text-sm text-secondary">
            {project.quote}
          </blockquote>
        )}
        {project.highlights && (
          <ul className="space-y-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-secondary">
                <span className="material-symbols-outlined text-accent text-sm flex-shrink-0" aria-hidden="true">
                  {i < 2 ? 'check_circle' : 'bolt'}
                </span>
                {h}
              </li>
            ))}
          </ul>
        )}
      </article>
    </motion.div>
  )
}

function ForecastingCard({ project }: { project: Project }) {
  return (
    <motion.div variants={scaleIn} whileHover={{ y: -8, scale: 1.01 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="md:col-span-7 group">
      <article className="bg-surface/50 border border-border h-full rounded-xl overflow-hidden relative hover:border-accent/40 shadow-sm hover:shadow-lg transition-all duration-400">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full">
          <div className="p-8 flex flex-col justify-between">
            <div>
              <span className="text-[0.6875rem] font-bold uppercase tracking-[0.15em] text-accent">{project.category}</span>
              <h3 className="text-3xl font-bold mt-2 text-primary">{project.title}</h3>
              <p className="text-secondary text-sm mt-4 leading-relaxed">{project.description}</p>
            </div>
            {project.metrics && (
              <div className="mt-8 flex gap-4">
                {project.metrics.map((m) => (
                  <div key={m.label} className="px-4 py-2 rounded-lg bg-surface border border-border">
                    <div className="text-lg font-bold text-primary">{m.value}</div>
                    <div className="text-[0.6rem] font-bold text-secondary uppercase">{m.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative min-h-[200px] bg-background overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="w-full px-6 space-y-4">
                {[75, 50, 83, 66].map((w, i) => (
                  <div key={i} className={`h-4 rounded-full ${i % 2 === 0 ? 'bg-accent/40' : 'bg-secondary/40'}`} style={{ width: `${w}%`, marginLeft: i % 2 !== 0 ? 'auto' : '0' }} />
                ))}
              </div>
            </div>
            <img
              alt=""
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 group-hover:scale-110 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTOx5wpjLkLcvFHBGBC7rJsa2OnERA7Nooa3Dp4zfoTYyUtO7lME4my2GqdMGKZ76W-6APOxPMnPUQMW0AiHUfdczeBMBTdNoOp42BQeEeQfw-gfHxaiNCpi01Cd4hiet5XWJNGlbs1NjAcMmQGgnEWhihw0ljTHRp1opD37ceJtin83zG7uaj4cYt9kKbHDH5C5fgpiQWg_UZRKlYaiW7FErPyKeBPJ__UVJS7bxMTJrImafhN0RQdUZ6sSWRROhnqtprTLURU64"
            />
          </div>
        </div>
      </article>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const { ref, inView } = useScrollReveal()

  return (
    <section
      id="projects"
      className="py-32 px-6 md:px-12 max-w-7xl mx-auto"
      aria-labelledby="projects-heading"
    >
      {/* Header */}
      <motion.header
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mb-16 md:mb-24"
      >
        <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-border mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-primary">Portfolio Selection</span>
        </motion.div>

        <motion.h2 id="projects-heading" variants={fadeUp} className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight text-primary">
          Architecting <br />
          <span className="text-secondary">Intelligence.</span>
        </motion.h2>

        <motion.p variants={fadeUp} className="max-w-2xl text-secondary text-lg leading-relaxed">
          Transforming complex datasets into strategic neural assets. Exploring the intersection of
          high-performance computing and predictive modeling.
        </motion.p>
      </motion.header>

      {/* Bento Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
      >
        <FraudDetectionCard project={PROJECTS[0]} />
        <CreditRiskCard project={PROJECTS[1]} />
        <RAGCard project={PROJECTS[2]} />
        <ForecastingCard project={PROJECTS[3]} />
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-24 text-center"
      >
        <h3 className="text-secondary text-xs font-bold uppercase tracking-[0.3em] mb-4">
          Interested in collaboration?
        </h3>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary px-10 py-4 rounded-xl font-bold text-background shadow-lg hover:bg-zinc-200 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Initialize Discussion
        </motion.button>
      </motion.div>
    </section>
  )
}
