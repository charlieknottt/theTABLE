'use client'

import { useState } from 'react'

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    church: '',
    hostingExperience: '',
    interests: [] as string[],
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send to a backend/API
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCheckboxChange = (interest: string) => {
    setFormData({
      ...formData,
      interests: formData.interests.includes(interest)
        ? formData.interests.filter(i => i !== interest)
        : [...formData.interests, interest],
    })
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-50 to-primary-50 py-12 px-4">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-serif font-bold text-warm-900 mb-4">
            Thank You for Your Interest!
          </h2>
          <p className="text-lg text-warm-700 mb-6">
            We're excited that you want to host a Table discussion! We'll be in touch soon
            with next steps, training information, and resources to help you host a
            meaningful gathering.
          </p>
          <p className="text-warm-600 italic">
            In the meantime, consider which topic you'd like to start with and who you might
            invite to your first Table.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-8 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            Submit Another Response
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Become a Host
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Join ordinary Christians hosting guests for intentional dinners
              that lead to extraordinary impact.
            </p>
          </div>
        </div>
      </section>

      {/* What It Means to Host */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-900 mb-12 text-center">
            What It Means to Host a Table
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-warm-50 p-8 rounded-lg">
              <div className="text-primary-600 text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-warm-900 mb-3">
                Open Your Home
              </h3>
              <p className="text-warm-700">
                Invite 6-12 people to your home for a dinner. It can be simple or elaborate—
                what matters is the hospitality, not the impressiveness.
              </p>
            </div>

            <div className="bg-warm-50 p-8 rounded-lg">
              <div className="text-primary-600 text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-warm-900 mb-3">
                Choose a Topic
              </h3>
              <p className="text-warm-700">
                Select one of our curated topics. We provide background research, Scripture
                references, and discussion questions to guide the conversation.
              </p>
            </div>

            <div className="bg-warm-50 p-8 rounded-lg">
              <div className="text-primary-600 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-warm-900 mb-3">
                Facilitate Discussion
              </h3>
              <p className="text-warm-700">
                Guide a 90-minute conversation using our host guide. You're not expected
                to be an expert—just a thoughtful facilitator.
              </p>
            </div>

            <div className="bg-warm-50 p-8 rounded-lg">
              <div className="text-primary-600 text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold text-warm-900 mb-3">
                Share Insights
              </h3>
              <p className="text-warm-700">
                After your Table, share key takeaways (anonymously if desired) to inspire
                and encourage the broader community.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-warm-50 p-8 rounded-lg">
            <h3 className="text-2xl font-serif font-semibold text-primary-700 mb-4">
              We'll Equip You With:
            </h3>
            <ul className="space-y-3 text-warm-700">
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 text-xl">✓</span>
                <span>Training on how to host effective discussions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 text-xl">✓</span>
                <span>Invitation templates and guidance on building your guest list</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 text-xl">✓</span>
                <span>Comprehensive topic packets with research and Scripture</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 text-xl">✓</span>
                <span>Host guides with conversation questions and timing suggestions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary-600 mr-3 text-xl">✓</span>
                <span>Ongoing support and connection with other hosts</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Interest Form */}
      <section className="py-16 md:py-24 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-serif font-bold text-warm-900 mb-2 text-center">
              Host Interest Form
            </h2>
            <p className="text-center text-warm-600 mb-8">
              Fill out this form to express your interest in hosting a Table discussion.
              We'll follow up with training details and resources.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-warm-700 mb-2">
                    Full Name *
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
                  <label htmlFor="email" className="block text-sm font-semibold text-warm-700 mb-2">
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

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-warm-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="church" className="block text-sm font-semibold text-warm-700 mb-2">
                    Church/Ministry Affiliation
                  </label>
                  <input
                    type="text"
                    id="church"
                    name="church"
                    value={formData.church}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-warm-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>

                <div>
                  <label htmlFor="state" className="block text-sm font-semibold text-warm-700 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="hostingExperience" className="block text-sm font-semibold text-warm-700 mb-2">
                  Hosting Experience
                </label>
                <select
                  id="hostingExperience"
                  name="hostingExperience"
                  value={formData.hostingExperience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">Select one...</option>
                  <option value="never">I've never hosted a group discussion</option>
                  <option value="occasional">I've hosted occasionally</option>
                  <option value="regular">I regularly host gatherings</option>
                  <option value="experienced">I'm experienced in facilitating discussions</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-warm-700 mb-3">
                  Which topics interest you most? (Select all that apply)
                </label>
                <div className="space-y-2">
                  {[
                    'The Crisis of Loneliness',
                    'Pornography & Sexual Brokenness',
                    'Immigration',
                    'Political Polarization',
                    'Youth Mental Health Crisis',
                    'The Crisis of Truth',
                    'Future of Work',
                    'Marriage & Birth Rates',
                    'Economic Challenges',
                    'American Identity',
                  ].map((topic) => (
                    <label key={topic} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(topic)}
                        onChange={() => handleCheckboxChange(topic)}
                        className="w-4 h-4 text-primary-600 border-warm-300 rounded focus:ring-primary-500"
                      />
                      <span className="ml-3 text-warm-700">{topic}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-warm-700 mb-2">
                  Additional Comments or Questions
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Tell us about your interest in hosting, any questions you have, or specific needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 rounded-lg transition-colors shadow-lg text-lg"
              >
                Submit Interest Form
              </button>

              <p className="text-sm text-warm-600 text-center">
                By submitting this form, you agree to be contacted by The Table with
                information about hosting opportunities and resources.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-warm-800 to-warm-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            From Your Table to the Nation
          </h2>
          <p className="text-xl text-warm-100 leading-relaxed">
            Wilberforce started with a handful of friends around a dinner table.
            That small beginning changed the world. Your Table could be part of
            the next great movement of faith-driven change.
          </p>
        </div>
      </section>
    </div>
  )
}
