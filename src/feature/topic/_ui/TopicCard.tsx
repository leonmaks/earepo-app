"use client"

import { useTransition } from "react"
import { Topic } from "@prisma/client"

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card"
import { Button } from "@/shared/ui/button"

export function TopicCard({
  topic,
  onDelete,
}: {
  topic: Topic
  onDelete: () => Promise<void>
}) {
  const [isLoadingDelete, startDeleteTransition] = useTransition()

  const handleDelete = () => {
    startDeleteTransition(async () => {
      await onDelete()
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{topic.subject}</CardTitle>
        <CardDescription>{topic.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button disabled={isLoadingDelete} onClick={handleDelete}>
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}
