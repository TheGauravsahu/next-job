import { z } from "zod";

export const createJobSchema = z.object({
  title: z.string().min(1, "Job title cannot be blank."),
  description: z.string().min(1, "Job description cannot be blank."),
  salary: z.string().min(1, "Salary cannot be blank."),
  salaryFrequency: z.enum(["MONTHLY", "ANNUALLY"], {
    required_error: "Salary frequency is required.",
  }),
  skills: z.array(
    z.object({
      id: z.string(),
      text: z.string().min(1).min(1, "Skills list cannot be empty."),
    })
  ),
  category: z.string().min(1, "Category cannot be blank."),
  companyName: z.string().min(1, "Company name cannot be blank."),
  companyLogo: z.string().url("Company logo must be a valid URL"),
  companyLocation: z.string().min(1, "Company location cannot be blank."),
  employmentType: z.enum(["Full_time", "Part_time", "Internship", "Contract"], {
    required_error: "Employment type is required.",
  }),
  workplaceType: z.enum(["On_site", "Remote", "Hybrid"], {
    required_error: "Workplace type is required.",
  }),
});
