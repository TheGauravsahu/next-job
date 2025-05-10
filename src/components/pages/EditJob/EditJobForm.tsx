"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { EditJobFormValues } from "@/types/job.types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import LoadingButton from "@/components/general/loading-button";
import { TagInput, Tag } from "emblor";
import { editJobSchema } from "./EditJobSchema";
import { useEditJob, useJobDetails } from "@/hooks/useJob";
import { Loader2 } from "lucide-react";

export default function EditJobForm({ jobId }: { jobId: string }) {
  const { data: job, isPending, error } = useJobDetails(jobId);
  const editJobMutation = useEditJob(jobId);

  const [tags, setTags] = React.useState<Tag[]>([]);
  const [activeTagIndex, setActiveTagIndex] = React.useState<number | null>(
    null
  );

  const form = useForm<EditJobFormValues>({
    resolver: zodResolver(editJobSchema),
    defaultValues: {
      title: job?.title,
      description: "",
      category: "",
      employmentType: "FULL_TIME",
      workplaceType: "REMOTE",
      skills: [],
      company: {
        logo: "",
        name: "",
        location: "",
      },
      salary: {
        amount: "",
        frequency: "MONTHLY",
      },
    },
  });

  const { setValue } = form;

  useEffect(() => {
    if (job) {
      form.reset({
        title: job.title,
        description: job.description,
        category: job.category,
        employmentType: job.employmentType,
        workplaceType: job.workplaceType,
        skills: job.skills,
        company: {
          logo: job.company.logo,
          name: job.company.name,
          location: job.company.location,
        },
        salary: {
          amount: job.salary.amount.toString(),
          frequency: job.salary.frequency,
        },
      });

      setTags(
        job.skills.map((skill) => ({
          text: skill,
          id: skill,
        }))
      );
    }
  }, [job, form]);

  function onSubmit(values: EditJobFormValues) {
    // console.log(values);
    editJobMutation.mutate(values);
    form.reset();
  }

  if (isPending)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader2 className="w-8 h-8  animate-spin text-blue-700" />
        <span className="sr-only">Loading...</span>
      </div>
    );

  if (error) return <div>An error occured: {error.message}</div>;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input placeholder="Frontend Engineer" {...field} />
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
                <Textarea placeholder="Job description..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="salary.amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary (no comma) </FormLabel>
              <FormControl>
                <Input placeholder="50000" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="salary.frequency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Salary Frequency</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="MONTHLY">Monthly</SelectItem>
                  <SelectItem value="ANNUALLY">Annually</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input placeholder="Software Development" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="skills"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skills</FormLabel>
              <FormControl>
                <TagInput
                  {...field}
                  placeholder="Enter skills."
                  tags={tags}
                  setTags={(newTags) => {
                    setTags(newTags);
                    setValue(
                      "skills",
                      (newTags as Tag[]).map((tag: Tag) => tag.text)
                    );
                  }}
                  activeTagIndex={activeTagIndex}
                  setActiveTagIndex={setActiveTagIndex}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company.name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Google" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company.logo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Logo URL</FormLabel>
              <FormControl>
                <Input placeholder="https://logo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company.location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Location</FormLabel>
              <FormControl>
                <Input placeholder="Bangalore, India" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="employmentType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employment Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select employment type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="FULL_TIME">Full-time</SelectItem>
                  <SelectItem value="PART_TIME">Part-time</SelectItem>
                  <SelectItem value="INTERSHIP">Internship</SelectItem>
                  <SelectItem value="CONTRACT">Contract</SelectItem>
                  <SelectItem value="FREELANCE">Freelance</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="workplaceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Workplace Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select workplace type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ONSITE">On-site</SelectItem>
                  <SelectItem value="REMOTE">Remote</SelectItem>
                  <SelectItem value="HYBRID">Hybrid</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <LoadingButton
          isLoading={editJobMutation.isPending}
          loadingText="Saving Changes"
        >
          Save Changes
        </LoadingButton>
      </form>
    </Form>
  );
}
