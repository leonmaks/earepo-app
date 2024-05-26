import { CreateTopicForm } from "@/feature/topic/CreateTopicForm"
import { TopicList } from "@/feature/topic/TopicList"

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1>Public Root</h1>
      <CreateTopicForm pagePath="/" className="mb-10 max-w-[300px]" />
      <TopicList pagePath="/" />
    </main>
  )
}
