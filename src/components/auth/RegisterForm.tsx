"use client";

import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingButton from "../general/loading-button";
import { Eye, EyeOff } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .min(5, { message: "Email must be at least 5 characters." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

type RegisterFormValues = z.infer<typeof formSchema>;

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: RegisterFormValues) {
    try {
    } catch (error) {}
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter your name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter your email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Enter your password</FormLabel>
              <FormControl>
                <div className="flex items-center border-input rounded-md border px-2 focus:border-ring focus:ring-ring/50 focus:ring-[3px]">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    className="border-none outline-0 ring-0 focus-visible:ring-0 focus-visible:outline-0"
                    {...field}
                  />
                  <span
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </span>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingButton
          loadingText="Registering"
          type="submit"
          isLoading={false}
        >
          Register
        </LoadingButton>
      </form>
    </Form>
  );
}
