'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react'

type NavChild = { label: string; href: string }
type NavItem = { label: string; href: string; children?: NavChild[] }

const ourSchoolLinks: NavChild[] = [
  { label: 'About', href: '/about' },
  { label: 'Curriculum', href: '/curriculum' },
  { label: 'Daily Life', href: '/daily-life' },
  { label: 'Safety & Trust', href: '/safety' },
]

const visitUsLinks: NavChild[] = [
  { label: 'Locations', href: '/locations' },
  { label: 'Testimonials', href: '/testimonials' },
]

const navLinks: NavItem[] = [
  { label: 'Programs', href: '/programs' },
  { label: 'Our School', href: '#', children: ourSchoolLinks },
  { label: 'Visit Us', href: '#', children: visitUsLinks },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pastHero, setPastHero] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({})
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      setPastHero(window.scrollY > window.innerHeight * 0.8)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close any open dropdown when clicking outside all of them
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      const insideAny = Object.values(dropdownRefs.current).some((el) => el && el.contains(target))
      if (!insideAny) setOpenDropdown(null)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
    setOpenMobileDropdown(null)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '#') return false
    return pathname === href
  }

  const isGroupActive = (children: NavChild[]) => children.some((c) => pathname === c.href)

  return (
    <>
      {/* Top info bar */}
      <div className="bg-[var(--brand-blue-deep)] text-[var(--primary-foreground)] text-sm py-2 px-4 hidden md:block">
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
        className={`relative lg:sticky lg:top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-[var(--background)] shadow-md' : 'bg-[var(--background)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-36 md:h-44">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logo-navbar-new.png"
                alt="Little Newtons Academy"
                width={300}
                height={300}
                className="h-32 md:h-40 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-3">
              {navLinks.map((link) =>
                link.children ? (
                  /* Dropdown item */
                  <div
                    key={link.label}
                    ref={(el) => {
                      dropdownRefs.current[link.label] = el
                    }}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown((current) => (current === link.label ? null : current))}
                  >
                    <button
                      className={`flex items-center gap-1.5 font-inter font-semibold uppercase tracking-widest text-sm px-4 py-2.5 rounded-lg transition-colors ${
                        isGroupActive(link.children)
                          ? 'text-[var(--brand-blue-deep)]'
                          : 'text-[var(--foreground)] hover:text-[var(--brand-blue-deep)]'
                      }`}
                      onClick={() =>
                        setOpenDropdown((current) => (current === link.label ? null : link.label))
                      }
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${
                          openDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Dropdown menu */}
                    <div
                      className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                        openDropdown === link.label
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-1'
                      }`}
                    >
                      <div className="bg-[var(--background)] border border-[var(--border)] rounded-xl shadow-lg py-2 min-w-[200px]">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                              isActive(child.href)
                                ? 'text-[var(--brand-blue-deep)] bg-[var(--secondary)]'
                                : 'text-[var(--foreground)] hover:text-[var(--brand-blue-deep)] hover:bg-[var(--secondary)]'
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
                    className={`font-inter font-semibold uppercase tracking-widest text-sm px-4 py-2.5 rounded-lg transition-colors ${
                      isActive(link.href)
                        ? 'text-[var(--brand-blue-deep)]'
                        : 'text-[var(--foreground)] hover:text-[var(--brand-blue-deep)]'
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
                href="/schedule-a-tour"
                className="bg-[var(--brand-blue-deep)] text-[var(--primary-foreground)] font-bold text-base px-7 py-3.5 rounded-full hover:opacity-90 transition-opacity"
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
                      className={`flex items-center justify-between w-full font-inter font-semibold uppercase tracking-wider text-sm py-2.5 px-3 rounded-lg transition-colors ${
                        isGroupActive(link.children)
                          ? 'text-[var(--brand-blue-deep)]'
                          : 'text-[var(--foreground)] hover:bg-[var(--secondary)]'
                      }`}
                      onClick={() =>
                        setOpenMobileDropdown((current) => (current === link.label ? null : link.label))
                      }
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 ${
                          openMobileDropdown === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openMobileDropdown === link.label && (
                      <div className="ml-3 pl-3 border-l-2 border-[var(--border)] flex flex-col gap-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                              isActive(child.href)
                                ? 'text-[var(--brand-blue-deep)] bg-[var(--secondary)]'
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
                    className={`font-inter font-semibold uppercase tracking-wider text-sm py-2.5 px-3 rounded-lg transition-colors ${
                      isActive(link.href)
                        ? 'text-[var(--brand-blue-deep)] bg-[var(--secondary)]'
                        : 'text-[var(--foreground)] hover:bg-[var(--secondary)]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/schedule-a-tour"
                className="mt-2 bg-[var(--brand-blue-deep)] text-[var(--primary-foreground)] font-bold text-center py-3 rounded-full hover:opacity-90 transition-opacity"
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
          href="/schedule-a-tour"
          className="cta-pulse flex items-center justify-center gap-2.5 w-full bg-[var(--brand-blue-deep)] text-[var(--primary-foreground)] font-bold text-center py-4 rounded-full ring-2 ring-[var(--brand-blue)]/40 hover:opacity-90 transition-opacity text-base"
        >
          <Phone size={18} />
          Schedule a Tour
        </Link>
      </div>
    </>
  )
}
