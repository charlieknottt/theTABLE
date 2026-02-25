'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import type { Topic } from '@/types/topic'

export default function AdminDashboard() {
  const [topics, setTopics] = useState<Topic[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin/topics')
      .then(res => res.json())
      .then(data => {
        setTopics(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-50 flex items-center justify-center">
        <p className="text-warm-600">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-serif font-bold text-warm-900 mb-2">
          Content Dashboard
        </h1>
        <p className="text-warm-600 mb-8">
          Manage discussion topics, resources, and stories.
        </p>

        <div className="space-y-3">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/admin/topics/${topic.id}`}
              className="block bg-white border border-warm-300 p-5 hover:bg-warm-50 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-warm-900 group-hover:text-primary-700 transition-colors">
                    {topic.title}
                  </h2>
                  <p className="text-sm text-warm-600 mt-1">{topic.subtitle}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-xs text-warm-500">
                      {topic.resources.length} resource{topic.resources.length !== 1 ? 's' : ''}
                    </span>
                    <span className="text-xs text-warm-500">
                      {topic.bibleVerses.length} verse section{topic.bibleVerses.length !== 1 ? 's' : ''}
                    </span>
                    {topic.story && (
                      <span className="text-xs text-primary-600 font-medium">
                        Has story
                      </span>
                    )}
                  </div>
                </div>
                <svg className="w-5 h-5 text-warm-400 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
