import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { getTopics, saveTopics } from '@/lib/topics'

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; index: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id, index: indexStr } = await params
  const resourceIndex = parseInt(indexStr, 10)
  const body = await request.json()
  const topics = await getTopics()
  const topicIndex = topics.findIndex(t => t.id === id)

  if (topicIndex === -1) {
    return NextResponse.json({ error: 'Topic not found' }, { status: 404 })
  }

  if (resourceIndex < 0 || resourceIndex >= topics[topicIndex].resources.length) {
    return NextResponse.json({ error: 'Resource not found' }, { status: 404 })
  }

  const { title, type, url, source } = body
  if (title !== undefined) topics[topicIndex].resources[resourceIndex].title = title
  if (type !== undefined) topics[topicIndex].resources[resourceIndex].type = type
  if (url !== undefined) topics[topicIndex].resources[resourceIndex].url = url
  if (source !== undefined) topics[topicIndex].resources[resourceIndex].source = source

  await saveTopics(topics)
  return NextResponse.json(topics[topicIndex])
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; index: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id, index: indexStr } = await params
  const resourceIndex = parseInt(indexStr, 10)
  const topics = await getTopics()
  const topicIndex = topics.findIndex(t => t.id === id)

  if (topicIndex === -1) {
    return NextResponse.json({ error: 'Topic not found' }, { status: 404 })
  }

  if (resourceIndex < 0 || resourceIndex >= topics[topicIndex].resources.length) {
    return NextResponse.json({ error: 'Resource not found' }, { status: 404 })
  }

  topics[topicIndex].resources.splice(resourceIndex, 1)
  await saveTopics(topics)
  return NextResponse.json(topics[topicIndex])
}
