import { NextResponse } from 'next/server'
import { isAuthenticated } from '@/lib/auth'
import { getTopics } from '@/lib/topics'

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const topics = await getTopics()
  return NextResponse.json(topics)
}
