import { cache } from "react"
import { Prisma, type Topic as __Topic } from "@prisma/client"

import { db } from "@/db"

export interface Topic extends __Topic {}
export interface TopicCreateInput extends Prisma.TopicCreateInput {}
export interface TopicDeleteInput {
  id: string
}

class TopicDAO {
  getAll = cache((): Promise<Topic[]> => db.topic.findMany())

  createOne = (data: TopicCreateInput): Promise<Topic> =>
    db.topic.create({ data: data })

  deleteOne = ({ id }: TopicDeleteInput) => db.topic.delete({ where: { id } })
}

export const topicDAO = new TopicDAO()
