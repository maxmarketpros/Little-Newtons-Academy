'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Child {
  name: string
  age: string
}

export default function Contact() {
  const [children, setChildren] = useState<Child[]>([{ name: '', age: '' }])
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const addChild = () => {
    if (children.length < 4) {
      setChildren([...children, { name: '', age: '' }])
    }
  }

  const removeChild = (index: number) => {
    setChildren(children.filter((_, i) => i !== index))
  }

  const updateChild = (index: number, field: keyof Child, value: string) => {
    const updated = [...children]
    updated[index] = { ...updated[index], [field]: value }
    setChildren(updated)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    const formData = new FormData(e.currentTarget)
    // Flatten children into named fields for Netlify
    children.forEach((child, i) => {
      formData.set(`child-${i + 1}-name`, child.name)
      formData.set(`child-${i + 1}-age`, child.age)
    })

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      })
      if (!response.ok) throw new Error('Form submission failed')
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const ageOptions = [
    'Infant (6 weeks – 12 months)',
    'Young Toddler (12 – 18 months)',
    'Toddler (18 months – 2 years)',
    'Preschool (3 years)',
    'VPK (4 years)',
  ]

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--brand-green)] transition-shadow placeholder:text-[var(--muted-foreground)]'

  return (
    <section id="contact" className="py-20 bg-[var(--brand-cream)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: heading + form */}
          <div>
            <span className="inline-block text-[var(--brand-sky)] font-bold text-sm tracking-widest uppercase mb-4">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--foreground)] text-balance mb-6 leading-tight">
              Schedule Your Visit Today
            </h2>
            <p className="text-[var(--muted-foreground)] leading-relaxed mb-10">
              We&apos;d love to meet your family. Fill out the form and our team will reach out to schedule your
              personalized tour. Spots are limited — don&apos;t wait!
            </p>

          <div className="bg-[var(--background)] rounded-3xl p-8 shadow-sm border border-[var(--border)]">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[var(--secondary)] text-[var(--brand-green)] flex items-center justify-center mx-auto mb-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[var(--foreground)] mb-3">
                  Thank You!
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  We&apos;ve received your request and will be in touch within 1 business day to schedule your tour.
                  We look forward to meeting your family!
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-bold text-[var(--foreground)] text-xl mb-6">
                  Request a Tour
                </h3>

                <div className="flex items-center gap-2 mb-6 p-3 bg-[#fff4f4] border border-[var(--brand-red)]/20 rounded-xl">
                  <span className="flex h-2 w-2 relative flex-shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--brand-red)] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--brand-red)]" />
                  </span>
                  <p className="text-[var(--brand-red)] text-xs font-semibold">
                    Limited enrollment spots available — act now!
                  </p>
                </div>

                <form name="tour-request" onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input type="hidden" name="form-name" value="tour-request" />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="parent-name" className="text-sm font-semibold text-[var(--foreground)]">
                        Parent / Guardian Name <span className="text-[var(--brand-red)]">*</span>
                      </label>
                      <input id="parent-name" name="parent-name" type="text" required placeholder="Your full name" className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-sm font-semibold text-[var(--foreground)]">
                        Phone Number <span className="text-[var(--brand-red)]">*</span>
                      </label>
                      <input id="phone" name="phone" type="tel" required placeholder="(407) 000-0000" className={inputClass} />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-semibold text-[var(--foreground)]">
                      Email Address <span className="text-[var(--brand-red)]">*</span>
                    </label>
                    <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="location" className="text-sm font-semibold text-[var(--foreground)]">
                      Preferred Location
                    </label>
                    <select id="location" name="location" className={inputClass}>
                      <option value="">Select a location...</option>
                      <option value="heathrow">Heathrow — 1032 AAA Drive</option>
                      <option value="lake-mary">Lake Mary — 2720 W. Lake Mary Blvd</option>
                      <option value="either">Either location works</option>
                    </select>
                  </div>

                  {/* Children */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-[var(--foreground)]">
                        Child / Children <span className="text-[var(--brand-red)]">*</span>
                      </p>
                      {children.length < 4 && (
                        <button
                          type="button"
                          onClick={addChild}
                          className="text-xs font-bold text-[var(--brand-green)] hover:underline flex items-center gap-1"
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                          Add another child
                        </button>
                      )}
                    </div>

                    {children.map((child, index) => (
                      <div key={index} className="p-4 bg-[var(--muted)] rounded-xl flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-[var(--muted-foreground)] uppercase tracking-wide">
                            Child {index + 1}
                          </p>
                          {children.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeChild(index)}
                              className="text-xs text-[var(--muted-foreground)] hover:text-[var(--brand-red)] transition-colors"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                        <input
                          type="text"
                          placeholder="Child's name (optional)"
                          value={child.name}
                          onChange={(e) => updateChild(index, 'name', e.target.value)}
                          className={inputClass}
                        />
                        <select
                          value={child.age}
                          onChange={(e) => updateChild(index, 'age', e.target.value)}
                          required
                          className={inputClass}
                        >
                          <option value="">Age / Program...</option>
                          {ageOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-[var(--foreground)]">
                      Message or Questions (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Any questions or information you'd like to share..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="text-[var(--brand-red)] text-sm font-semibold text-center">
                      Something went wrong. Please try again or call us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[var(--brand-green)] text-[var(--primary-foreground)] font-bold py-4 rounded-xl hover:opacity-90 transition-opacity text-base mt-2 disabled:opacity-60"
                  >
                    {submitting ? 'Submitting…' : 'Schedule My Tour'}
                  </button>
                </form>
              </>
            )}
          </div>
          </div>

          {/* Right: locations + photo */}
          <div>
            {/* Locations */}
            <div className="flex flex-col gap-6 mb-10">
              <div className="p-6 bg-[var(--background)] rounded-2xl border border-[var(--border)]">
                <h3 className="font-bold text-[var(--foreground)] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--brand-green)]" />
                  Heathrow Location
                </h3>
                <address className="not-italic text-[var(--muted-foreground)] text-sm leading-relaxed">
                  1032 AAA Drive<br />
                  Lake Mary, FL 32746<br />
                  <a href="tel:4077324413" className="text-[var(--brand-green)] font-semibold hover:underline mt-1 block">
                    (407) 732-4413
                  </a>
                  <a href="mailto:heathrow@littlenewtonsacademy.com" className="text-[var(--brand-green)] font-semibold hover:underline block">
                    heathrow@littlenewtonsacademy.com
                  </a>
                  <span className="text-xs mt-1 block">DCF License # C18SE0335</span>
                </address>
              </div>
              <div className="p-6 bg-[var(--background)] rounded-2xl border border-[var(--border)]">
                <h3 className="font-bold text-[var(--foreground)] mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--brand-sky)]" />
                  Lake Mary Location
                </h3>
                <address className="not-italic text-[var(--muted-foreground)] text-sm leading-relaxed">
                  2720 W. Lake Mary Blvd<br />
                  Lake Mary, FL 32746<br />
                  <a href="tel:4073231221" className="text-[var(--brand-green)] font-semibold hover:underline mt-1 block">
                    (407) 323-1221
                  </a>
                  <a href="mailto:lakemary@littlenewtonsacademy.com" className="text-[var(--brand-green)] font-semibold hover:underline block">
                    lakemary@littlenewtonsacademy.com
                  </a>
                  <span className="text-xs mt-1 block">DCF License # C18SE031</span>
                </address>
              </div>
            </div>

            {/* Photo */}
            <div className="relative aspect-[3/2] sm:aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/client-facility-1.jpg"
                alt="Little Newtons Academy facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
