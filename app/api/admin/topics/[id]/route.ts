import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { getTopics, saveTopics } from '@/lib/topics'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const topics = await getTopics()
  const topic = topics.find(t => t.id === id)

  if (!topic) {
    return NextResponse.json({ error: 'Topic not found' }, { status: 404 })
  }

  return NextResponse.json(topic)
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
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

    const { title, subtitle, background, whyNow } = body
    if (title !== undefined) topics[index].title = title
    if (subtitle !== undefined) topics[index].subtitle = subtitle
    if (background !== undefined) topics[index].background = background
    if (whyNow !== undefined) topics[index].whyNow = whyNow

    await saveTopics(topics)
    return NextResponse.json(topics[index])
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
