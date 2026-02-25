'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import type { Topic } from '@/types/topic'
import TopicEditor from './TopicEditor'

export default function TopicEditorPage() {
  const params = useParams()
  const [topic, setTopic] = useState<Topic | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const fetchTopic = async () => {
    try {
      const res = await fetch(`/api/admin/topics/${params.id}`)
      if (!res.ok) throw new Error('Failed to load topic')
      const data = await res.json()
      setTopic(data)
    } catch {
      setError('Failed to load topic')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTopic()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-50 flex items-center justify-center">
        <p className="text-warm-600">Loading...</p>
      </div>
    )
  }

  if (error || !topic) {
    return (
      <div className="min-h-screen bg-warm-50 flex items-center justify-center">
        <p className="text-red-600">{error || 'Topic not found'}</p>
      </div>
    )
  }

  return <TopicEditor topic={topic} onUpdate={fetchTopic} />
}
