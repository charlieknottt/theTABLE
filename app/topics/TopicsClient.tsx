'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Topic } from '@/types/topic'

export default function TopicsClient({ topics }: { topics: Topic[] }) {
  const [selectedTopic, setSelectedTopic] = useState<Topic>(topics[0])
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})

  const toggleSection = (sectionHeading: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionHeading]: !prev[sectionHeading],
    }))
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-warm-900 to-primary-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Discussion Topics
            </h1>
            <p className="text-xl md:text-2xl text-warm-100 max-w-3xl mx-auto leading-relaxed">
              Ten critical issues facing our nation, thoughtfully examined through a Christian lens with curated resources for deeper engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Topic Selector */}
      <section className="py-3 bg-white border-b-2 border-warm-200 sticky top-12 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <label htmlFor="topic-select" className="block text-xs font-semibold text-warm-700 mb-1">
            Select a Topic:
          </label>
          <select
            id="topic-select"
            value={selectedTopic.id}
            onChange={(e) => {
              setSelectedTopic(topics.find(t => t.id === e.target.value) || topics[0])
              setExpandedSections({})
            }}
            className="w-full md:w-auto md:min-w-[500px] px-3 py-2 text-base border-2 border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-warm-900"
          >
            {topics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.title}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Topic Content */}
      <section className="py-16 md:py-24 bg-warm-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-warm-300 shadow-sm p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-warm-900 mb-3">
              {selectedTopic.title}
            </h2>
            <p className="text-xl text-warm-700 italic mb-8">
              {selectedTopic.subtitle}
            </p>

            <div className="space-y-8">
              {/* Background */}
              <div>
                <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-4">
                  Background
                </h3>
                <p className="text-lg text-warm-800 leading-relaxed">
                  {selectedTopic.background}
                </p>
              </div>

              {/* Why Now */}
              <div className="bg-warm-100 p-6 border border-warm-300">
                <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-4">
                  Why This Matters Now
                </h3>
                <p className="text-lg text-warm-800 leading-relaxed">
                  {selectedTopic.whyNow}
                </p>
              </div>

              {/* Story */}
              {selectedTopic.story && (
                <div className="border border-warm-300 bg-warm-50">
                  <div className="p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs uppercase tracking-wide font-semibold text-primary-700 bg-primary-100 px-3 py-1 rounded">
                        Featured Story
                      </span>
                      <span className="text-sm text-warm-600">
                        {selectedTopic.story.source} &middot; {selectedTopic.story.date}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-warm-900 mb-2">
                      {selectedTopic.story.headline}
                    </h3>
                    <p className="text-warm-600 mb-6 text-sm">
                      By {selectedTopic.story.author}
                    </p>
                    <div className="space-y-4">
                      {selectedTopic.story.paragraphs.map((paragraph, index) => (
                        <p key={index} className="text-lg text-warm-800 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Resources */}
              <div>
                <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-4">
                  Recommended Resources
                </h3>
                <p className="text-warm-700 italic mb-6">
                  Please review these resources before the dinner but feel free to do additional research on your own.
                </p>
                {selectedTopic.resources.length > 0 ? (
                  <div className="space-y-4">
                    {selectedTopic.resources.map((resource, index) => (
                      <a
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block bg-warm-50 hover:bg-warm-100 p-5 border border-warm-300 transition-colors group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2">
                              <span className="text-xs uppercase tracking-wide font-semibold text-warm-700 mr-3">
                                {resource.type}
                              </span>
                            </div>
                            <h4 className="text-lg font-semibold text-warm-900 group-hover:text-primary-700 transition-colors mb-1">
                              {resource.title}
                            </h4>
                            <p className="text-sm text-warm-600">{resource.source}</p>
                          </div>
                          <svg
                            className="w-5 h-5 text-primary-600 flex-shrink-0 ml-4 mt-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-warm-600 italic bg-warm-50 p-5 border border-warm-300">
                    Resources coming soon.
                  </p>
                )}
              </div>

              {/* Bible Verses */}
              {selectedTopic.bibleVerses.length > 0 && (
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-warm-900 mb-6">
                    Bible Verses
                  </h3>
                  <div className="space-y-4">
                    {selectedTopic.bibleVerses.map((section) => (
                      <div key={section.heading} className="border border-warm-300">
                        <button
                          onClick={() => toggleSection(section.heading)}
                          className="w-full flex items-center justify-between p-5 bg-warm-50 hover:bg-warm-100 transition-colors text-left"
                        >
                          <h4 className="text-lg font-semibold text-warm-900">
                            {section.heading}
                          </h4>
                          <svg
                            className={`w-5 h-5 text-warm-600 transform transition-transform ${expandedSections[section.heading] ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {expandedSections[section.heading] && (
                          <div className="p-5 space-y-6">
                            {section.verses.map((verse) => (
                              <div key={verse.reference}>
                                <p className="font-semibold text-primary-800 mb-2">
                                  {verse.reference}
                                </p>
                                <p className="text-warm-800 leading-relaxed italic mb-2">
                                  {verse.text}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Buttons */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <button
              onClick={() => {
                const currentIndex = topics.findIndex(t => t.id === selectedTopic.id)
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : topics.length - 1
                setSelectedTopic(topics[prevIndex])
                setExpandedSections({})
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-6 py-3 bg-warm-200 hover:bg-warm-300 text-warm-800 font-semibold rounded-lg transition-colors"
            >
              ← Previous Topic
            </button>
            <button
              onClick={() => {
                const currentIndex = topics.findIndex(t => t.id === selectedTopic.id)
                const nextIndex = currentIndex < topics.length - 1 ? currentIndex + 1 : 0
                setSelectedTopic(topics[nextIndex])
                setExpandedSections({})
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="px-6 py-3 bg-warm-200 hover:bg-warm-300 text-warm-800 font-semibold rounded-lg transition-colors"
            >
              Next Topic →
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-warm-900 to-primary-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Host a Discussion?
          </h2>
          <p className="text-xl mb-8 text-warm-100 leading-relaxed">
            These topics are designed to spark meaningful conversation around your table. Sign up to host and receive full discussion guides and resources.
          </p>
          <Link
            href="/get-involved"
            className="inline-block bg-primary-600 text-white px-8 py-4 rounded font-semibold text-lg hover:bg-primary-700 transition-colors border border-primary-500"
          >
            Become a Host
          </Link>
        </div>
      </section>
    </div>
  )
}
