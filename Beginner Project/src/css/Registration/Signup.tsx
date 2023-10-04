import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import FormFieldList from "./FormFieldList.json"

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
import { toast } from "@/components/ui/use-toast"
import { Input } from "@/components/ui/input"
import { Link } from "react-router-dom"

const FormSchema = z
  .object({
    name: z.string().min(4, {
      message: "Name must be at least 4 characters",
    }),
    email: z.string().email({
      message: "Invalid email address",
    }),
    password: z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters",
      })
      .max(20, {
        message: "Password must be below 20 characters",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export function Signup() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <div className="text-2xl font-semibold mb-4 uppercase">Sign up</div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="my-4">
          {FormFieldList.map((formField, index) => (
            <FormField
              control={form.control}
              name={formField.name as any}
              key={index}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{formField.label}</FormLabel>
                  <FormControl>
                    <Input
                      type={formField.type}
                      placeholder={formField.placeholder}
                      {...field}
                    />
                  </FormControl>
                  {FormFieldList.length - 1 === index && (
                    <FormDescription>
                      Don't have an account?{" "}
                      <span className="font-semibold cursor-pointer">
                        <Link to="/">Sign In</Link>
                      </span>
                    </FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </div>
        <Button type="submit" className="w-full">
          Register
        </Button>
      </form>
    </Form>
  )
}
