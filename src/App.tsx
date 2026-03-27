import { useState, useEffect } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HomePage from '@/pages/HomePage'

const SECTIONS = ['home', 'about', 'skills', 'projects', 'experience', 'contact']

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return (
    <div className="dark min-h-screen w-full overflow-x-hidden bg-background font-sans text-primary">
      <Navbar activeSection={activeSection} />
      <HomePage />
      <Footer />
    </div>
  )
}
