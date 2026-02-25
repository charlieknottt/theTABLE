import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { getTopics, saveTopics } from '@/lib/topics'

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const body = await request.json()
  const topics = await getTopics()
  const index = topics.findIndex(t => t.id === id)

  if (index === -1) {
    return NextResponse.json({ error: 'Topic not found' }, { status: 404 })
  }

  const { headline, source, date, author, url, paragraphs } = body
  if (!headline || !source || !date || !author || !paragraphs) {
    return NextResponse.json({ error: 'Required fields: headline, source, date, author, paragraphs' }, { status: 400 })
  }

  topics[index].story = {
    headline,
    source,
    date,
    author,
    ...(url && { url }),
    paragraphs: Array.isArray(paragraphs) ? paragraphs : paragraphs.split('\n').filter((p: string) => p.trim()),
  }

  await saveTopics(topics)
  return NextResponse.json(topics[index])
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const topics = await getTopics()
  const index = topics.findIndex(t => t.id === id)

  if (index === -1) {
    return NextResponse.json({ error: 'Topic not found' }, { status: 404 })
  }

  delete topics[index].story
  await saveTopics(topics)
  return NextResponse.json(topics[index])
}
