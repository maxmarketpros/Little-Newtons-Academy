import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] text-[var(--primary-foreground)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo-square.png"
              alt="Little Newtons Academy"
              width={60}
              height={60}
              className="h-24 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-white/60 text-sm leading-relaxed">
              Curiosity. Discovery. Growth.
            </p>
            <p className="text-white/50 text-xs mt-3 leading-relaxed">
              Where curious minds grow, confidence begins, and futures take shape.
            </p>
            {/* Social */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[var(--brand-green)] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[var(--brand-green)] flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Our Programs', href: '#programs' },
                { label: 'A Day With Us', href: '#daily-schedule' },
                { label: 'Safety', href: '#safety' },
                { label: 'Our Philosophy', href: '#philosophy' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Heathrow */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">Heathrow</h4>
            <address className="not-italic text-white/60 text-sm leading-relaxed flex flex-col gap-1.5">
              <span>1032 AAA Drive</span>
              <span>Lake Mary, FL 32746</span>
              <a href="tel:4077324413" className="text-[var(--brand-sky)] hover:underline mt-1">
                (407) 732-4413
              </a>
              <a href="mailto:heathrow@littlenewtonsacademy.com" className="text-[var(--brand-sky)] hover:underline text-xs break-all">
                heathrow@littlenewtonsacademy.com
              </a>
              <span className="text-white/40 text-xs">DCF License # C18SE0335</span>
            </address>
          </div>

          {/* Lake Mary */}
          <div>
            <h4 className="font-bold text-sm mb-4 text-white">Lake Mary</h4>
            <address className="not-italic text-white/60 text-sm leading-relaxed flex flex-col gap-1.5">
              <span>2720 W. Lake Mary Blvd</span>
              <span>Lake Mary, FL 32746</span>
              <a href="tel:4073231221" className="text-[var(--brand-sky)] hover:underline mt-1">
                (407) 323-1221
              </a>
              <a href="mailto:lakemary@littlenewtonsacademy.com" className="text-[var(--brand-sky)] hover:underline text-xs break-all">
                lakemary@littlenewtonsacademy.com
              </a>
              <span className="text-white/40 text-xs">DCF License # C18SE031</span>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center sm:text-left">
            &copy; {new Date().getFullYear()} Little Newtons Academy. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Serving Lake Mary & Heathrow, Florida
          </p>
        </div>
      </div>
    </footer>
  )
}
