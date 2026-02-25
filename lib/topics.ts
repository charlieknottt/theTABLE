import fs from 'fs'
import path from 'path'
import { put, list } from '@vercel/blob'
import type { Topic } from '@/types/topic'

const DATA_PATH = path.join(process.cwd(), 'data', 'topics.json')
const BLOB_KEY = 'topics.json'

function getLocalTopics(): Topic[] {
  const raw = fs.readFileSync(DATA_PATH, 'utf-8')
  return JSON.parse(raw)
}

export async function getTopics(): Promise<Topic[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return getLocalTopics()
  }

  const { blobs } = await list({
    prefix: BLOB_KEY,
    limit: 1,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  })

  if (blobs.length > 0) {
    const res = await fetch(blobs[0].downloadUrl, { cache: 'no-store' })
    return await res.json()
  }

  // Blob doesn't exist yet — seed from local file
  const topics = getLocalTopics()
  await saveTopics(topics)
  return topics
}

export async function saveTopics(topics: Topic[]): Promise<void> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    fs.writeFileSync(DATA_PATH, JSON.stringify(topics, null, 2), 'utf-8')
    return
  }

  await put(BLOB_KEY, JSON.stringify(topics, null, 2), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
    token: process.env.BLOB_READ_WRITE_TOKEN,
  })
}
