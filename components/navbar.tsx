'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Programs', href: '#programs' },
    { label: 'A Day With Us', href: '#daily-schedule' },
    { label: 'Safety', href: '#safety' },
    { label: 'About', href: '#philosophy' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Top info bar */}
      <div className="bg-[var(--brand-green)] text-[var(--primary-foreground)] text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <a href="tel:4077324413" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone size={13} />
              <span>Heathrow: (407) 732-4413</span>
            </a>
            <a href="tel:4073231221" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone size={13} />
              <span>Lake Mary: (407) 323-1221</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-xs opacity-90">
            <MapPin size={13} />
            <span>Lake Mary, FL</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-[var(--background)] shadow-md' : 'bg-[var(--background)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo-navbar.png"
                alt="Little Newtons Academy"
                width={220}
                height={60}
                className="h-10 md:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[var(--foreground)] font-semibold text-sm hover:text-[var(--brand-green)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#contact"
                className="bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Schedule a Tour
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-[var(--foreground)]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-[var(--background)] border-t border-[var(--border)] px-4 pb-4">
            <nav className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[var(--foreground)] font-semibold py-2.5 px-3 rounded-lg hover:bg-[var(--secondary)] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold text-center py-3 rounded-full hover:opacity-90 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                Schedule a Tour
              </a>
              <div className="mt-3 pt-3 border-t border-[var(--border)] flex flex-col gap-2 text-sm text-[var(--muted-foreground)]">
                <a href="tel:4077324413" className="flex items-center gap-2">
                  <Phone size={14} />
                  Heathrow: (407) 732-4413
                </a>
                <a href="tel:4073231221" className="flex items-center gap-2">
                  <Phone size={14} />
                  Lake Mary: (407) 323-1221
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-4 bg-[var(--background)] border-t border-[var(--border)] shadow-lg">
        <a
          href="#contact"
          className="block w-full bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold text-center py-3.5 rounded-full hover:opacity-90 transition-opacity"
        >
          Schedule a Tour — Limited Spots Available
        </a>
      </div>
    </>
  )
}
