'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { Topic, Resource } from '@/types/topic'

function StatusMessage({ message, type }: { message: string; type: 'success' | 'error' }) {
  if (!message) return null
  return (
    <p className={`text-sm font-medium ${type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
      {message}
    </p>
  )
}

export default function TopicEditor({ topic, onUpdate }: { topic: Topic; onUpdate: () => void }) {
  // Text fields
  const [title, setTitle] = useState(topic.title)
  const [subtitle, setSubtitle] = useState(topic.subtitle)
  const [background, setBackground] = useState(topic.background)
  const [whyNow, setWhyNow] = useState(topic.whyNow)
  const [textStatus, setTextStatus] = useState('')
  const [textError, setTextError] = useState('')

  // Resource editing
  const [editingResource, setEditingResource] = useState<number | null>(null)
  const [showAddResource, setShowAddResource] = useState(false)
  const [resourceForm, setResourceForm] = useState<Resource>({ title: '', type: 'article', url: '', source: '' })
  const [resourceStatus, setResourceStatus] = useState('')
  const [resourceError, setResourceError] = useState('')

  // Story editing
  const [showStoryEditor, setShowStoryEditor] = useState(!!topic.story)
  const [storyHeadline, setStoryHeadline] = useState(topic.story?.headline || '')
  const [storySource, setStorySource] = useState(topic.story?.source || '')
  const [storyDate, setStoryDate] = useState(topic.story?.date || '')
  const [storyAuthor, setStoryAuthor] = useState(topic.story?.author || '')
  const [storyUrl, setStoryUrl] = useState(topic.story?.url || '')
  const [storyParagraphs, setStoryParagraphs] = useState(topic.story?.paragraphs.join('\n\n') || '')
  const [storyStatus, setStoryStatus] = useState('')
  const [storyError, setStoryError] = useState('')

  const saveTextFields = async () => {
    setTextStatus('')
    setTextError('')
    try {
      const res = await fetch(`/api/admin/topics/${topic.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, subtitle, background, whyNow }),
      })
      if (!res.ok) throw new Error('Failed to save')
      setTextStatus('Saved successfully')
      onUpdate()
    } catch {
      setTextError('Failed to save changes')
    }
  }

  const addResource = async () => {
    setResourceStatus('')
    setResourceError('')
    try {
      const res = await fetch(`/api/admin/topics/${topic.id}/resources`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resourceForm),
      })
      if (!res.ok) throw new Error('Failed to add')
      setResourceForm({ title: '', type: 'article', url: '', source: '' })
      setShowAddResource(false)
      setResourceStatus('Resource added')
      onUpdate()
    } catch {
      setResourceError('Failed to add resource')
    }
  }

  const updateResource = async (index: number) => {
    setResourceStatus('')
    setResourceError('')
    try {
      const res = await fetch(`/api/admin/topics/${topic.id}/resources/${index}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resourceForm),
      })
      if (!res.ok) throw new Error('Failed to update')
      setEditingResource(null)
      setResourceStatus('Resource updated')
      onUpdate()
    } catch {
      setResourceError('Failed to update resource')
    }
  }

  const deleteResource = async (index: number) => {
    if (!confirm('Delete this resource?')) return
    setResourceStatus('')
    setResourceError('')
    try {
      const res = await fetch(`/api/admin/topics/${topic.id}/resources/${index}`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Failed to delete')
      setResourceStatus('Resource deleted')
      onUpdate()
    } catch {
      setResourceError('Failed to delete resource')
    }
  }

  const saveStory = async () => {
    setStoryStatus('')
    setStoryError('')
    const paragraphs = storyParagraphs.split('\n').filter(p => p.trim())
    try {
      const res = await fetch(`/api/admin/topics/${topic.id}/story`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          headline: storyHeadline,
          source: storySource,
          date: storyDate,
          author: storyAuthor,
          url: storyUrl || undefined,
          paragraphs,
        }),
      })
      if (!res.ok) throw new Error('Failed to save')
      setStoryStatus('Story saved')
      onUpdate()
    } catch {
      setStoryError('Failed to save story')
    }
  }

  const deleteStory = async () => {
    if (!confirm('Delete this story?')) return
    setStoryStatus('')
    setStoryError('')
    try {
      const res = await fetch(`/api/admin/topics/${topic.id}/story`, {
        method: 'DELETE',
      })
      if (!res.ok) throw new Error('Failed to delete')
      setStoryHeadline('')
      setStorySource('')
      setStoryDate('')
      setStoryAuthor('')
      setStoryUrl('')
      setStoryParagraphs('')
      setShowStoryEditor(false)
      setStoryStatus('Story deleted')
      onUpdate()
    } catch {
      setStoryError('Failed to delete story')
    }
  }

  const inputClasses = 'w-full px-4 py-2 border-2 border-warm-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-warm-900'
  const textareaClasses = `${inputClasses} min-h-[120px] resize-y`

  return (
    <div className="min-h-screen bg-warm-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Link href="/admin" className="text-primary-600 hover:text-primary-800 text-sm font-medium mb-6 inline-block">
          &larr; Back to Dashboard
        </Link>

        <h1 className="text-3xl font-serif font-bold text-warm-900 mb-8">
          Edit: {topic.title}
        </h1>

        {/* Text Fields Section */}
        <div className="bg-white border border-warm-300 p-6 mb-8">
          <h2 className="text-xl font-serif font-semibold text-warm-900 mb-6">Topic Details</h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-warm-700 mb-1">Title</label>
              <input type="text" value={title} onChange={e => setTitle(e.target.value)} className={inputClasses} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-warm-700 mb-1">Subtitle</label>
              <input type="text" value={subtitle} onChange={e => setSubtitle(e.target.value)} className={inputClasses} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-warm-700 mb-1">Background</label>
              <textarea value={background} onChange={e => setBackground(e.target.value)} className={textareaClasses} rows={5} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-warm-700 mb-1">Why This Matters Now</label>
              <textarea value={whyNow} onChange={e => setWhyNow(e.target.value)} className={textareaClasses} rows={5} />
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button onClick={saveTextFields} className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Save Details
              </button>
              <StatusMessage message={textStatus} type="success" />
              <StatusMessage message={textError} type="error" />
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="bg-white border border-warm-300 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif font-semibold text-warm-900">Resources</h2>
            <button
              onClick={() => {
                setResourceForm({ title: '', type: 'article', url: '', source: '' })
                setShowAddResource(true)
                setEditingResource(null)
              }}
              className="text-sm bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              + Add Resource
            </button>
          </div>

          <StatusMessage message={resourceStatus} type="success" />
          <StatusMessage message={resourceError} type="error" />

          {topic.resources.length === 0 && !showAddResource && (
            <p className="text-warm-500 italic">No resources yet.</p>
          )}

          <div className="space-y-3">
            {topic.resources.map((resource, index) => (
              <div key={index} className="border border-warm-200 p-4 bg-warm-50">
                {editingResource === index ? (
                  <div className="space-y-3">
                    <input type="text" value={resourceForm.title} onChange={e => setResourceForm({ ...resourceForm, title: e.target.value })} placeholder="Title" className={inputClasses} />
                    <select value={resourceForm.type} onChange={e => setResourceForm({ ...resourceForm, type: e.target.value as Resource['type'] })} className={inputClasses}>
                      <option value="article">Article</option>
                      <option value="video">Video</option>
                      <option value="report">Report</option>
                    </select>
                    <input type="text" value={resourceForm.url} onChange={e => setResourceForm({ ...resourceForm, url: e.target.value })} placeholder="URL" className={inputClasses} />
                    <input type="text" value={resourceForm.source} onChange={e => setResourceForm({ ...resourceForm, source: e.target.value })} placeholder="Source" className={inputClasses} />
                    <div className="flex gap-2">
                      <button onClick={() => updateResource(index)} className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors">Save</button>
                      <button onClick={() => setEditingResource(null)} className="bg-warm-200 text-warm-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-warm-300 transition-colors">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-xs uppercase tracking-wide font-semibold text-warm-500 mr-2">{resource.type}</span>
                      <h4 className="text-warm-900 font-medium">{resource.title}</h4>
                      <p className="text-sm text-warm-500">{resource.source}</p>
                      <p className="text-xs text-warm-400 truncate max-w-md">{resource.url}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => {
                          setResourceForm({ ...resource })
                          setEditingResource(index)
                          setShowAddResource(false)
                        }}
                        className="text-sm text-primary-600 hover:text-primary-800 font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteResource(index)}
                        className="text-sm text-red-600 hover:text-red-800 font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {showAddResource && (
            <div className="border border-primary-200 bg-primary-50 p-4 mt-4">
              <h3 className="text-sm font-semibold text-warm-900 mb-3">New Resource</h3>
              <div className="space-y-3">
                <input type="text" value={resourceForm.title} onChange={e => setResourceForm({ ...resourceForm, title: e.target.value })} placeholder="Title" className={inputClasses} />
                <select value={resourceForm.type} onChange={e => setResourceForm({ ...resourceForm, type: e.target.value as Resource['type'] })} className={inputClasses}>
                  <option value="article">Article</option>
                  <option value="video">Video</option>
                  <option value="report">Report</option>
                </select>
                <input type="text" value={resourceForm.url} onChange={e => setResourceForm({ ...resourceForm, url: e.target.value })} placeholder="URL" className={inputClasses} />
                <input type="text" value={resourceForm.source} onChange={e => setResourceForm({ ...resourceForm, source: e.target.value })} placeholder="Source" className={inputClasses} />
                <div className="flex gap-2">
                  <button onClick={addResource} className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors">Add Resource</button>
                  <button onClick={() => setShowAddResource(false)} className="bg-warm-200 text-warm-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-warm-300 transition-colors">Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Story Section */}
        <div className="bg-white border border-warm-300 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-serif font-semibold text-warm-900">Featured Story</h2>
            {!showStoryEditor && (
              <button
                onClick={() => setShowStoryEditor(true)}
                className="text-sm bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                + Add Story
              </button>
            )}
          </div>

          <StatusMessage message={storyStatus} type="success" />
          <StatusMessage message={storyError} type="error" />

          {showStoryEditor ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-warm-700 mb-1">Headline</label>
                <input type="text" value={storyHeadline} onChange={e => setStoryHeadline(e.target.value)} className={inputClasses} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-warm-700 mb-1">Source</label>
                  <input type="text" value={storySource} onChange={e => setStorySource(e.target.value)} placeholder="e.g. Washington Post" className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-warm-700 mb-1">Date</label>
                  <input type="text" value={storyDate} onChange={e => setStoryDate(e.target.value)} placeholder="e.g. September 19, 2025" className={inputClasses} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-warm-700 mb-1">Author</label>
                  <input type="text" value={storyAuthor} onChange={e => setStoryAuthor(e.target.value)} className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-warm-700 mb-1">URL (optional)</label>
                  <input type="text" value={storyUrl} onChange={e => setStoryUrl(e.target.value)} placeholder="https://..." className={inputClasses} />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-warm-700 mb-1">
                  Paragraphs <span className="font-normal text-warm-500">(separate each paragraph with a blank line)</span>
                </label>
                <textarea
                  value={storyParagraphs}
                  onChange={e => setStoryParagraphs(e.target.value)}
                  className={`${inputClasses} min-h-[300px] resize-y font-mono text-sm`}
                  rows={15}
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button onClick={saveStory} className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                  Save Story
                </button>
                {topic.story && (
                  <button onClick={deleteStory} className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Delete Story
                  </button>
                )}
                {!topic.story && (
                  <button onClick={() => setShowStoryEditor(false)} className="bg-warm-200 text-warm-700 px-4 py-2 rounded-lg font-semibold hover:bg-warm-300 transition-colors">
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ) : (
            <p className="text-warm-500 italic">No story attached to this topic.</p>
          )}
        </div>
      </div>
    </div>
  )
}
