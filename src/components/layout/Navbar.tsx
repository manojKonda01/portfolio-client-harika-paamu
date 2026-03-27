import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '@/utils/data'

interface NavbarProps {
  activeSection: string
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm'
            : 'bg-transparent'
          }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold tracking-tighter text-primary hover:text-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            aria-label="Go to top"
          >
            Harika Paamu
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-medium text-sm tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded relative pb-1 ${isActive
                      ? 'text-primary'
                      : 'text-secondary hover:text-primary'
                    }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Resume Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="/Harika_Paamu_Data_Scientist.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary px-6 py-2 rounded-lg font-medium text-sm text-background shadow-lg hover:bg-white/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Download Resume"
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-primary p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[73px] left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl md:hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left py-3 px-4 rounded-lg font-medium text-sm transition-colors ${isActive
                        ? 'text-primary bg-accent/5'
                        : 'text-secondary hover:text-primary hover:bg-surface'
                      }`}
                  >
                    {link.label}
                  </button>
                )
              })}
              <a
                href="/resume.pdf"
                download
                className="mt-2 py-3 px-4 rounded-lg bg-primary text-background font-medium text-sm text-center hover:bg-white/90 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
