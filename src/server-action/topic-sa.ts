"use server"

import { revalidatePath } from "next/cache"

import { topicDAO, TopicCreateInput, TopicDeleteInput } from "@/db/dao"

export const createTopic = async (pagePath: string, data: TopicCreateInput) => {
  await topicDAO.createOne(data)
  revalidatePath(pagePath)
}

// export const deleteTopic = async (topic: TopicDeleteInput) => {
//   await topicDAO.deleteOne(topic)
// }
