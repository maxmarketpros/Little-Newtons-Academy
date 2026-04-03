'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] transition-shadow placeholder:text-[var(--muted-foreground)]'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-[var(--brand-cream)]">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
          <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
            Contact Us
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[var(--foreground)] text-balance mb-6">
            Get in Touch with Little Newtons Academy
          </h1>
          <p className="text-[var(--muted-foreground)] text-lg leading-relaxed">
            Have a question or want to learn more? We&apos;d love to hear from you. Reach out to either of our locations or send us a message below.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Contact Info */}
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--foreground)] mb-8">
                Our Locations
              </h2>

              <div className="flex flex-col gap-6 mb-10">
                {/* Heathrow */}
                <div className="p-6 bg-[var(--background)] rounded-2xl border border-[var(--border)]">
                  <h3 className="font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-green)]" />
                    Heathrow Campus
                  </h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3 text-[var(--muted-foreground)] text-sm">
                      <MapPin size={16} className="text-[var(--brand-green)] flex-shrink-0 mt-0.5" />
                      <span>1032 AAA Drive, Lake Mary, FL 32746</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone size={16} className="text-[var(--brand-green)] flex-shrink-0" />
                      <a href="tel:4077324413" className="text-[var(--brand-green)] font-semibold hover:underline">
                        (407) 732-4413
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail size={16} className="text-[var(--brand-green)] flex-shrink-0" />
                      <a href="mailto:heathrow@littlenewtonsacademy.com" className="text-[var(--brand-green)] font-semibold hover:underline">
                        heathrow@littlenewtonsacademy.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Lake Mary */}
                <div className="p-6 bg-[var(--background)] rounded-2xl border border-[var(--border)]">
                  <h3 className="font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--brand-sky)]" />
                    Lake Mary Campus
                  </h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start gap-3 text-[var(--muted-foreground)] text-sm">
                      <MapPin size={16} className="text-[var(--brand-green)] flex-shrink-0 mt-0.5" />
                      <span>2720 W. Lake Mary Blvd, Lake Mary, FL 32746</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Phone size={16} className="text-[var(--brand-green)] flex-shrink-0" />
                      <a href="tel:4073231221" className="text-[var(--brand-green)] font-semibold hover:underline">
                        (407) 323-1221
                      </a>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Mail size={16} className="text-[var(--brand-green)] flex-shrink-0" />
                      <a href="mailto:lakemary@littlenewtonsacademy.com" className="text-[var(--brand-green)] font-semibold hover:underline">
                        lakemary@littlenewtonsacademy.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 mb-8 p-4 bg-[var(--secondary)] rounded-xl">
                <Clock size={18} className="text-[var(--brand-green)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[var(--foreground)] text-sm mb-1">Hours of Operation</p>
                  <p className="text-[var(--muted-foreground)] text-sm">Monday – Friday. Contact us for specific hours at each campus.</p>
                </div>
              </div>

              {/* Tour CTA */}
              <div className="p-6 bg-[var(--brand-cream)] rounded-2xl">
                <p className="font-bold text-[var(--foreground)] mb-2">Looking to schedule a tour?</p>
                <p className="text-[var(--muted-foreground)] text-sm mb-4">
                  Visit our dedicated tour page to book a visit and learn about enrollment options.
                </p>
                <Link
                  href="/schedule-a-tour"
                  className="inline-block bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  Schedule a Tour
                </Link>
              </div>
            </div>

            {/* Right: Simple Form */}
            <div className="bg-[var(--background)] rounded-3xl p-8 shadow-sm border border-[var(--border)]">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[var(--secondary)] text-[var(--brand-green)] flex items-center justify-center mx-auto mb-6">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[var(--foreground)] mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    Thank you for reaching out. We&apos;ll get back to you within 1 business day.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-bold text-[var(--foreground)] text-xl mb-2">
                    Send Us a Message
                  </h3>
                  <p className="text-[var(--muted-foreground)] text-sm mb-6">
                    Fill out the form below and our team will get back to you promptly.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-sm font-semibold text-[var(--foreground)]">
                          Full Name <span className="text-[var(--brand-red)]">*</span>
                        </label>
                        <input id="name" type="text" required placeholder="Your name" className={inputClass} />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="phone" className="text-sm font-semibold text-[var(--foreground)]">
                          Phone Number
                        </label>
                        <input id="phone" type="tel" placeholder="(407) 000-0000" className={inputClass} />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-[var(--foreground)]">
                        Email Address <span className="text-[var(--brand-red)]">*</span>
                      </label>
                      <input id="email" type="email" required placeholder="you@example.com" className={inputClass} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-sm font-semibold text-[var(--foreground)]">
                        Subject
                      </label>
                      <select id="subject" className={inputClass}>
                        <option value="">Select a topic...</option>
                        <option value="general">General Inquiry</option>
                        <option value="enrollment">Enrollment Questions</option>
                        <option value="programs">Programs & Curriculum</option>
                        <option value="billing">Tuition & Billing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="message" className="text-sm font-semibold text-[var(--foreground)]">
                        Message <span className="text-[var(--brand-red)]">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        required
                        placeholder="How can we help you?"
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold py-4 rounded-xl hover:opacity-90 transition-opacity text-base mt-2"
                    >
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
