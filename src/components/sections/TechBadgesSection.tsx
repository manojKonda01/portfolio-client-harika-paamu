import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { staggerContainer, scaleIn } from '@/utils/animations'

const TOOLS = [
  { icon: 'terminal', name: 'PyTorch' },
  { icon: 'database', name: 'Snowflake' },
  { icon: 'cloud', name: 'AWS SageMaker' },
  { icon: 'analytics', name: 'TensorFlow' },
]

export default function TechBadgesSection() {
  const { ref, inView } = useScrollReveal()

  return (
    <section
      ref={ref}
      className="bg-surface py-16 px-8 overflow-hidden"
      aria-label="Technology partners"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 text-primary"
      >
        {TOOLS.map((tool) => (
          <motion.div
            key={tool.name}
            variants={scaleIn}
            className="flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined text-3xl" aria-hidden="true">
              {tool.icon}
            </span>
            <span className="font-bold tracking-tighter text-xl">{tool.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
