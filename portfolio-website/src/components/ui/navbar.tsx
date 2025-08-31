import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface NavbarProps {
  className?: string
}

export function Navbar({ className = '' }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'terminal', 'timeline', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'terminal', label: 'Terminal' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-4 ${className}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className={`max-w-7xl mx-auto rounded-2xl px-6 py-3 transition-all duration-300 glass-card ${
          isScrolled 
            ? 'opacity-100' 
            : 'opacity-80'
        }`}
        whileHover={{ 
          scale: 1.02,
          boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.3)"
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
      >
        
        <div className="relative z-10 flex items-center justify-between">
          {/* Logo/Brand */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <span className="text-white font-bold text-lg hidden sm:block">We be balling🏀</span>
          </motion.div>

          {/* Navigation Items */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                                 className={`relative px-3 sm:px-4 py-2 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                   activeSection === item.id
                     ? 'text-black font-bold bg-black/30 backdrop-blur-sm'
                     : 'text-black font-bold hover:text-white hover:bg-black/20'
                 }`}
                                 whileHover={{ 
                   scale: 1.05,
                   backgroundColor: 'rgba(0, 0, 0, 0.2)'
                 }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 25 
                }}
              >
                {item.label}
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="lg:hidden p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  )
}
