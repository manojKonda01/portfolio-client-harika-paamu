import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { fadeUp, fadeRight, staggerContainer } from '@/utils/animations'
import { ABOUT_STATS } from '@/utils/data'

export default function AboutSection() {
  const { ref, inView } = useScrollReveal()

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto"
      aria-labelledby="about-heading"
    >
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
      <div className="absolute bottom-1/2 left-0 w-[400px] h-[400px] bg-secondary/5 blur-[120px] rounded-full -z-10 -translate-x-1/2" aria-hidden="true" />

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
        {/* Left: Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span variants={fadeUp} className="label-sm uppercase tracking-[0.2em] text-accent mb-4 block font-semibold text-sm">
            Architecting Intelligence
          </motion.span>

          <motion.h2
            id="about-heading"
            variants={fadeUp}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-tight text-primary"
          >
            Synthesizing{' '}
            <span className="text-secondary">
              Data into Impact.
            </span>
          </motion.h2>

          <motion.div variants={fadeUp} className="space-y-6 text-secondary text-lg leading-relaxed max-w-2xl">
            <p>
              With over 4 years of dedicated experience at the intersection of Machine Learning and
              Large Scale Engineering, I specialize in transforming fragmented data into
              high-performance neural architectures. My focus lies in production-grade{' '}
              <strong className="text-primary font-medium">
                NLP, Retrieval-Augmented Generation (RAG), and MLOps.
              </strong>
            </p>
            <p>
              I have navigated the complex regulatory and technical landscapes of{' '}
              <strong className="text-primary font-medium">Finance, BFSI, and Retail</strong>,
              delivering robust AI solutions that prioritize both precision and scalability. My
              approach is rooted in the "Neural Architect" philosophy—where structural invisibility
              meets maximum functional depth.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {ABOUT_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-surface border border-border rounded-xl group cursor-default shadow-sm hover:border-accent/40 transition-colors"
              >
                <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                  <span className="text-3xl font-bold text-primary mb-2">{stat.value}</span>
                  <span className="text-[0.6rem] uppercase tracking-widest text-secondary group-hover:text-accent transition-colors">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Image Card */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative group"
        >
          <div className="aspect-[4/5] rounded-xl overflow-hidden bg-surface/60 backdrop-blur-lg border border-border shadow-sm">
            <img
              alt="Abstract neural network interface representing AI and machine learning"
              loading="lazy"
              className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlBO8coPBHFrJOfbaPCo41Q8WFHD1pccv2QqpUSeiMb0Zc4ghNuQ0FA5ee94gMIu_pBXtUXKxW3r_nNnc1p4E61fjdYizTwa4lZFIDUxmOFXqfo9BaH0HZORnV-GPjNOG5vmuF7kliX3n9vUfWU_ieY_oGvqx3ZN2CDHm020zuVunEleM6acRGCLjSLkTA_-YHzKq4SHI5cI8a5B2jcD2jlZEYYzpDYZ8-aXfpoUOXyreBk-K46VnSx9UQLtEllV0_q4jekB3PAbU"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" aria-hidden="true" />

            {/* Status Card */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="bg-surface/60 backdrop-blur-lg p-6 rounded-lg border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <span className="material-symbols-outlined text-accent" style={{ fontVariationSettings: "'FILL' 1" }} aria-hidden="true">
                    terminal
                  </span>
                  <span className="text-[0.6875rem] uppercase tracking-widest text-secondary">
                    System Status
                  </span>
                </div>
                <div
                  className="h-1 w-full bg-surface rounded-full overflow-hidden"
                  role="progressbar"
                  aria-valuenow={98}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Neural threads optimized at 98.4%"
                >
                  <div className="h-full w-4/5 bg-accent" />
                </div>
                <p className="text-[10px] uppercase tracking-widest text-secondary mt-3 opacity-60">
                  Neural Threads Optimized: 98.4%
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
