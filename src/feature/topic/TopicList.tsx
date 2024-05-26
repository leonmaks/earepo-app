import { revalidatePath } from "next/cache"

import { topicDAO } from "@/db/dao"

import { TopicCard } from "./_ui/TopicCard"

export async function TopicList({ pagePath }: { pagePath: string }) {
  const topics = await topicDAO.getAll()

  const handleDeleteAction = async (id: string) => {
    "use server"
    await topicDAO.deleteOne({ id })
    revalidatePath(pagePath)
  }

  return (
    <div className="flex flex-col gap-3">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          topic={topic}
          onDelete={handleDeleteAction.bind(null, topic.id)}
        />
      ))}
    </div>
  )
}
