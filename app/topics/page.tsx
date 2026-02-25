import { getTopics } from '@/lib/topics'
import TopicsClient from './TopicsClient'

export default function Topics() {
  const topics = getTopics()
  return <TopicsClient topics={topics} />
}
