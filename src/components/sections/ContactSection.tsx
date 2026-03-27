import { motion, AnimatePresence } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { useContactForm } from '@/hooks/useContactForm'
import { fadeUp, staggerContainer, fadeLeft, fadeRight } from '@/utils/animations'
import { SOCIAL_LINKS } from '@/utils/data'

function InputField({
  id,
  label,
  name,
  type = 'text',
  value,
  error,
  onChange,
  placeholder,
}: {
  id: string
  label: string
  name: string
  type?: string
  value: string
  error?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-secondary mb-2">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-invalid={!!error}
        className={`w-full px-4 py-3 rounded-xl bg-surface border transition-all duration-200 text-primary placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 ${error
          ? 'border-red-500/50 focus:ring-red-500/30'
          : 'border-border hover:border-border/80'
          }`}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-red-400 mt-1">
          {error}
        </p>
      )}
    </div>
  )
}

export default function ContactSection() {
  const { ref, inView } = useScrollReveal()
  const { formData, errors, isSubmitting, isSubmitted, handleChange, handleSubmit, reset } = useContactForm()

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="mb-16 text-center md:text-left"
      >
        <motion.span variants={fadeUp} className="text-sm uppercase tracking-[0.2em] text-accent mb-4 block font-semibold">
          Initialize Connection
        </motion.span>
        <motion.h2
          id="contact-heading"
          variants={fadeUp}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-primary mb-6 leading-tight"
        >
          Let&apos;s Build{' '}
          <span className="text-secondary">
            Together.
          </span>
        </motion.h2>
        <motion.p variants={fadeUp} className="text-secondary text-lg max-w-2xl leading-relaxed">
          Whether you&apos;re exploring AI partnerships, research collaborations, or looking to bring
          intelligent systems to your organization — I&apos;d love to connect.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
        {/* Left: Info */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {/* Contact Info Cards */}
          {[
            { icon: 'mail', label: 'Email', value: 'harikapaamu01@gmail.com', href: 'mailto:harikapaamu01@gmail.com' },
            { icon: 'location_on', label: 'Location', value: 'United States', href: null },
            { icon: 'schedule', label: 'Response Time', value: 'Within 24 hours', href: null },
          ].map((item) => (
            <div key={item.label} className="bg-surface p-6 rounded-xl border border-border flex items-center gap-4 hover:border-accent/30 transition-colors">
              <div className="bg-accent/10 p-3 rounded-lg flex-shrink-0">
                <span className="material-symbols-outlined text-accent" aria-hidden="true">{item.icon}</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-primary font-medium hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-primary font-medium">{item.value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Social */}
          <div>
            <p className="text-xs uppercase tracking-widest text-secondary font-bold mb-4">Follow Along</p>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="px-4 py-2 rounded-lg bg-surface border border-border text-sm font-medium text-secondary hover:text-primary hover:border-border/80 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-surface p-12 rounded-2xl border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-green-400 text-3xl" aria-hidden="true">check_circle</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                <p className="text-secondary mb-8">
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={reset}
                  className="px-8 py-3 rounded-xl border border-border text-primary hover:bg-zinc-800 transition-all font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Send Another
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="bg-surface p-8 md:p-10 rounded-2xl border border-border space-y-6"
                aria-label="Contact form"
              >
                <InputField
                  id="name"
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  error={errors.name}
                  onChange={handleChange}
                  placeholder="Jane Smith"
                />
                <InputField
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  error={errors.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                />
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange as unknown as React.ChangeEventHandler<HTMLTextAreaElement>}
                    placeholder="Tell me about your project, research, or collaboration idea..."
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={!!errors.message}
                    className={`w-full px-4 py-3 rounded-xl bg-surface border transition-all duration-200 text-primary placeholder-secondary/50 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none ${errors.message
                      ? 'border-red-500/50 focus:ring-red-500/30'
                      : 'border-border hover:border-border/80'
                      }`}
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="text-xs text-red-400 mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full py-4 rounded-xl bg-primary text-background font-bold shadow-lg hover:bg-white/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-accent flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        className="material-symbols-outlined text-sm"
                        aria-hidden="true"
                      >
                        progress_activity
                      </motion.span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-sm" aria-hidden="true">send</span>
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
