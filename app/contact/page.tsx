'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send to a backend/API
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-warm-100 py-12 px-4">
        <div className="max-w-2xl w-full bg-white border border-warm-300 shadow-sm p-8 md:p-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-warm-900 mb-4">
            Message Received!
          </h2>
          <p className="text-lg text-warm-800 mb-6">
            Thank you for reaching out. We'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            Send Another Message
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-warm-900 to-primary-900 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-warm-100 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Whether you have questions, feedback, or want to learn more about The Table, reach out below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-warm-900 mb-6">
                  Connect With Us
                </h2>
                <p className="text-warm-700 leading-relaxed mb-8">
                  Have questions about hosting? Want to partner with us? Need support
                  for your Table discussion? We're here to help.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-warm-900 mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/get-involved"
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                    >
                      <span className="mr-2">→</span>
                      Become a Host
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/topics"
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                    >
                      <span className="mr-2">→</span>
                      Explore Topics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/why-now"
                      className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                    >
                      <span className="mr-2">→</span>
                      Why This Matters Now
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-warm-100 p-6 border border-warm-300">
                <h3 className="text-lg font-semibold text-warm-900 mb-3">
                  Stay Connected
                </h3>
                <p className="text-warm-700 text-sm">
                  Follow our journey as we build this movement. Sign up for updates,
                  stories from Tables across the nation, and resources for deeper
                  engagement.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-warm-300 shadow-sm p-8 md:p-12">
                <h2 className="text-3xl font-serif font-bold text-warm-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-warm-600 mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-warm-700 mb-2"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-warm-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-warm-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">Select a subject...</option>
                      <option value="hosting">Question About Hosting</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="media">Media/Press Inquiry</option>
                      <option value="resources">Resource Request</option>
                      <option value="feedback">Feedback or Testimonial</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-warm-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-warm-100 p-6 border border-warm-300">
              <h3 className="text-xl font-semibold text-warm-900 mb-3">
                Do I need to be an expert to host a Table?
              </h3>
              <p className="text-warm-700">
                Not at all! You don't need expertise in the topic—just a willingness to
                facilitate thoughtful conversation. We provide all the research, discussion
                questions, and guidance you need. Your role is to create a welcoming space
                and keep the conversation moving.
              </p>
            </div>

            <div className="bg-warm-100 p-6 border border-warm-300">
              <h3 className="text-xl font-semibold text-warm-900 mb-3">
                How much does it cost to host a Table?
              </h3>
              <p className="text-warm-700">
                There's no cost to participate as a host. All materials and resources are
                provided free of charge. Your only expense is the meal itself, which can
                be as simple or elaborate as you choose.
              </p>
            </div>

            <div className="bg-warm-100 p-6 border border-warm-300">
              <h3 className="text-xl font-semibold text-warm-900 mb-3">
                Can my church host multiple Tables?
              </h3>
              <p className="text-warm-700">
                Absolutely! We can provide customized materials for churches, ministries,
                or organizations that want to host a series of Table discussions within
                their community. Contact us to learn more about bulk hosting.
              </p>
            </div>

            <div className="bg-warm-100 p-6 border border-warm-300">
              <h3 className="text-xl font-semibold text-warm-900 mb-3">
                What if my Table doesn't go well?
              </h3>
              <p className="text-warm-700">
                Every host learns and improves. We provide ongoing support, and you'll
                have access to a community of other hosts who can share experiences and
                encouragement. Remember, Wilberforce didn't change the world overnight—
                it took practice, persistence, and grace.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
