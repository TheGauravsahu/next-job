"use client";

import React, { useEffect } from "react";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z
    .string()
    .email({ message: "Please enter a valid email address." })
    .min(5, { message: "Email must be at least 5 characters." }),
  role: z.enum(["APPLICANT", "EMPLOYER"], {
    required_error: "Please select a role.",
  }),
});

export type EditFormValues = z.infer<typeof formSchema>;

export default function EditProfileForm() {
  const { user } = useAuthStore();

  const form = useForm<EditFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      role: "APPLICANT",
    },
  });

  useEffect(() => {
    if (user) {
      form.setValue("name", user.name);
      form.setValue("email", user.email);
      form.setValue("role", user.role as "APPLICANT" | "EMPLOYER");
    }
  }, [user, form]);

  return (
    <Form {...form}>
      <form className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} disabled />
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
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@example.com" {...field} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex gap-4"
                >
                  <FormItem className="flex items-center">
                    <FormControl>
                      <RadioGroupItem value="APPLICANT" disabled />
                    </FormControl>
                    <FormLabel className="font-normal">Applicant</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center">
                    <FormControl>
                      <RadioGroupItem value="EMPLOYER" disabled />
                    </FormControl>
                    <FormLabel className="font-normal">Employer</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled variant="gradient" className="w-full my-2">
          Save changes
        </Button>
      </form>
    </Form>
  );
}
