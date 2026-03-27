import { motion } from 'framer-motion'
import { SOCIAL_LINKS } from '@/utils/data'

export default function Footer() {
  return (
    <footer className="bg-background w-full py-12 border-t border-border" role="contentinfo">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
        <div className="text-lg font-bold tracking-tight text-primary">Harika Paamu</div>

        <nav aria-label="Social links">
          <ul className="flex gap-8 list-none">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.label}>
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  className="font-sans text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors duration-300 opacity-80 hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  {link.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="font-sans text-xs uppercase tracking-widest text-secondary opacity-60">
          © {new Date().getFullYear()} Harika Paamu. Built with Precision.
        </p>
      </div>
    </footer>
  )
}
