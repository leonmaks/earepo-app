"use client"

import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { createTopic } from "@/server-action"

import { cn } from "@/shared/utils"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"
import { Button } from "@/shared/ui/button"

const createTopicFormSchema = z.object({
  subject: z.string(),
  description: z.string(),
})

export function CreateTopicForm({
  pagePath,
  className,
}: {
  pagePath: string
  className: string
}) {
  const [isCreateTransition, startCreateTransition] = useTransition()

  const form = useForm({
    resolver: zodResolver(createTopicFormSchema),
    defaultValues: {
      subject: "",
      description: "",
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            createTopic(pagePath, data)
          })
        })}
        className={cn(className, "space-y-8")}
      >
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="subject..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isCreateTransition}>
          Add
        </Button>
      </form>
    </Form>
  )
}
