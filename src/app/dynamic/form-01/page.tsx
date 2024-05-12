"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
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

const stopObj = z.object({
  order: z.coerce.number(),
  zip: z.string().trim().min(1),
  city: z.string({ required_error: "This field is required." }).trim().min(1),
  state: z
    .string({ required_error: "This field is required." })
    .trim()
    .length(2, "2-letter state abbreviation"),
  country: z.coerce
    .string()
    .trim()
    .length(2, "Two-letter country code (ISO 3166-1 alpha-2)"),
})

const formSchema = z.object({
  firstName: z.string({ required_error: "This field is required." }),
  currency: z.enum(["USD", "CAD"]),
  stops: z
    .array(stopObj)
    .min(2, "2 stops minimum required (pickup and dropoff)"),
})

export default function Form01Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "John",
      currency: "USD",
      stops: [
        {
          order: 1,
          city: "New York",
          state: "NY",
          zip: "02116",
          country: "US",
        },
        { order: 2, city: "Austin", state: "TX", zip: "12345", country: "US" },
      ],
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("onSubmit:", values)
  }

  const { fields } = useFieldArray({ name: "stops", control: form.control })

  return (
    <div className="bg-[#305645] w-full justify-center flex">
      <div className="w-3/4 bg-white px-5 py-3 my-20 rounded-lg">
        <Form {...form}>
          <div className="text-center font-medium">
            <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Complete Form
            </h1>
          </div>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex space-x-4 w-full">
              <div className="w-1/2">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currency</FormLabel>
                    <FormControl>
                      <Input placeholder="USD" {...field} />
                    </FormControl>
                    <FormDescription>USD or CAD.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* FIXME how to correctly render and update each stop object?? */}
            {fields.map((field, index) => (
              <div key={field.id}>
                <FormField
                  control={form.control}
                  name={`stops.${index}.city`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormDescription />
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`stops.${index}.state`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
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

            <Button
              type="submit"
              className="bg-orange-500 font-extrabold w-full"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
