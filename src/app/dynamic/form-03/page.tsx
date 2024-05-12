"use client"
import { z } from "zod"

import { DynamicFeildDef, createSchema } from "@/schemas"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const attributes: DynamicFeildDef[] = [
  { id: "name", name: "name", label: "Name", type: "string" },
  { id: "email", name: "email", label: "Email", type: "string" },
  { id: "password", name: "password", label: "Password", type: "string" },
  { id: "code", name: "code", label: "Code", type: "string" },
]

const schema = createSchema(attributes)

type schemaType = z.infer<typeof schema>

export default function Form03Page() {
  const form = useForm<schemaType>({
    resolver: zodResolver(schema),
  })

  return (
    <Form {...form}>
      <form onSubmit={() => {}} className="space-y-8">
        {attributes.map((attribute, index) => (
          <div key={attribute.id}>
            <FormField
              control={form.control}
              name={attribute.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{attribute.label}</FormLabel>
                  <FormDescription />
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        ))}
      </form>
    </Form>
  )
}
