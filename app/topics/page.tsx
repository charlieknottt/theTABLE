import { getTopics } from '@/lib/topics'
import TopicsClient from './TopicsClient'

export default async function Topics() {
  const topics = await getTopics()
  return <TopicsClient topics={topics} />
}
