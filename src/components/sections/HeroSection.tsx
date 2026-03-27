import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, scaleIn } from '@/utils/animations'

export default function HeroSection() {
  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" aria-hidden="true" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] z-0" aria-hidden="true" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 max-w-5xl px-6 md:px-8 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Status Badge */}
        <motion.div variants={fadeUp} className="inline-flex items-center px-4 py-1.5 rounded-full border border-border/50 bg-surface/50 backdrop-blur-md mb-10">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse mr-3" aria-hidden="true" />
          <span className="text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-secondary">
            Available for Research Partnerships
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          id="hero-heading"
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.1] text-primary mb-8"
        >
          Data Scientist{' '}
          <br />
          <span className="text-secondary">
            The Neural Architect
          </span>
        </motion.h1>

        {/* Tags */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-3 mb-10 text-sm md:text-base font-medium text-secondary"
          aria-label="Specializations"
        >
          {['Data Scientist', 'ML', 'NLP', 'Generative AI'].map((tag, i) => (
            <span key={tag} className="flex items-center gap-2">
              {i > 0 && <span className="text-border" aria-hidden="true">/</span>}
              <span>{tag}</span>
            </span>
          ))}
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="max-w-2xl mx-auto text-secondary text-lg leading-relaxed mb-12"
        >
          Building intelligent systems for risk, fraud detection, and scalable AI solutions. Turning
          high-dimensional data into high-impact narratives through precision engineering.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleScroll('#projects')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-background font-semibold shadow-lg hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            View Projects
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleScroll('#contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-border text-primary font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Contact
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Modern Dashboard Preview/Stats (Replaces glowing gauge) */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
        className="glass-card margin-10 md:bottom-24 left-1/2 -translate-x-1/2 z-10 hidden md:block w-full max-w-lg"
        aria-hidden="true"
        style={{ margin: '2.5rem' }}
      >
        <div className="bg-surface/60 backdrop-blur-lg border border-border shadow-sm p-6 rounded-2xl flex items-center justify-around shadow-2xl">
          <div className="flex flex-col items-center">
            <span className="text-[0.65rem] font-bold tracking-widest text-secondary uppercase mb-1">
              Model Accuracy
            </span>
            <span className="text-xl font-bold text-primary">99.2%</span>
          </div>

          <div className="h-10 w-px bg-border" aria-hidden="true" />

          <div className="flex flex-col items-center">
            <span className="text-[0.65rem] font-bold tracking-widest text-secondary uppercase mb-1">
              Core Engine
            </span>
            <span className="text-sm font-medium text-accent">Transformers</span>
          </div>

          <div className="h-10 w-px bg-border" aria-hidden="true" />

          <div className="flex flex-col items-center">
            <span className="text-[0.65rem] font-bold tracking-widest text-secondary uppercase mb-1">
              Data Volume
            </span>
            <span className="text-sm font-medium text-primary">50TB+</span>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 md:hidden flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-widest text-secondary/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-6 bg-gradient-to-b from-secondary/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
