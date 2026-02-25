import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { getTopics, saveTopics } from '@/lib/topics'

export async function POST(
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

  const { title, type, url, source } = body
  if (!title || !type || !url || !source) {
    return NextResponse.json({ error: 'All fields required' }, { status: 400 })
  }

  topics[index].resources.push({ title, type, url, source })
  await saveTopics(topics)
  return NextResponse.json(topics[index])
}
