'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react'

const dropdownLinks = [
  { label: 'Daily Life', href: '/daily-life' },
  { label: 'Curriculum', href: '/curriculum' },
  { label: 'Safety & Trust', href: '/safety' },
]

const navLinks = [
  { label: 'Programs', href: '/programs' },
  { label: 'Our School', href: '#', children: dropdownLinks },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Locations', href: '/locations' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      setPastHero(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setMobileDropdownOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '#') return false
    return pathname === href
  }

  const isDropdownActive = () => {
    return dropdownLinks.some((link) => pathname === link.href)
  }

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
            <span>Serving Lake Mary & Heathrow, FL</span>
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
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  /* Dropdown item */
                  <div
                    key={link.label}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 font-semibold text-sm px-3 py-2 rounded-lg transition-colors ${
                        isDropdownActive()
                          ? 'text-[var(--brand-green)]'
                          : 'text-[var(--foreground)] hover:text-[var(--brand-green)]'
                      }`}
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Dropdown menu */}
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                        dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                      }`}
                    >
                      <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl shadow-lg py-2 min-w-[200px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                              isActive(child.href)
                                ? 'text-[var(--brand-green)] bg-[var(--secondary)]'
                                : 'text-[var(--foreground)] hover:text-[var(--brand-green)] hover:bg-[var(--secondary)]'
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Regular nav item */
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`font-semibold text-sm px-3 py-2 rounded-lg transition-colors ${
                      isActive(link.href)
                        ? 'text-[var(--brand-green)]'
                        : 'text-[var(--foreground)] hover:text-[var(--brand-green)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                Schedule a Tour
              </Link>
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
              {navLinks.map((link) =>
                link.children ? (
                  /* Mobile dropdown */
                  <div key={link.label}>
                    <button
                      className={`flex items-center justify-between w-full font-semibold py-2.5 px-3 rounded-lg transition-colors ${
                        isDropdownActive()
                          ? 'text-[var(--brand-green)]'
                          : 'text-[var(--foreground)] hover:bg-[var(--secondary)]'
                      }`}
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${mobileDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileDropdownOpen && (
                      <div className="ml-3 pl-3 border-l-2 border-[var(--border)] flex flex-col gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                              isActive(child.href)
                                ? 'text-[var(--brand-green)] bg-[var(--secondary)]'
                                : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--secondary)]'
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`font-semibold py-2.5 px-3 rounded-lg transition-colors ${
                      isActive(link.href)
                        ? 'text-[var(--brand-green)] bg-[var(--secondary)]'
                        : 'text-[var(--foreground)] hover:bg-[var(--secondary)]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="mt-2 bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold text-center py-3 rounded-full hover:opacity-90 transition-opacity"
                onClick={() => setIsOpen(false)}
              >
                Schedule a Tour
              </Link>
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
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden px-4 pb-4 pt-3 bg-gradient-to-t from-[var(--background)] via-[var(--background)] to-transparent transition-all duration-300 ${
          pastHero ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 w-full bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold text-center py-3 rounded-full shadow-lg shadow-[var(--brand-green)]/25 hover:opacity-90 transition-opacity text-sm"
        >
          <Phone size={14} />
          Schedule a Tour
        </Link>
      </div>
    </>
  )
}
