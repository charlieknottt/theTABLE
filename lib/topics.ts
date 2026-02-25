import fs from 'fs'
import path from 'path'
import type { Topic } from '@/types/topic'

const DATA_PATH = path.join(process.cwd(), 'data', 'topics.json')

export function getTopics(): Topic[] {
  const raw = fs.readFileSync(DATA_PATH, 'utf-8')
  return JSON.parse(raw)
}

export function saveTopics(topics: Topic[]): void {
  fs.writeFileSync(DATA_PATH, JSON.stringify(topics, null, 2), 'utf-8')
}
