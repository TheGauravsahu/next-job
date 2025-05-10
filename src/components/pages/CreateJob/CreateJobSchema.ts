import { z } from "zod";

export const createJobSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(3, { message: "Title must be at least 3 characters long" }),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(10, { message: "Description must be at least 10 characters long" }),
  category: z
    .string({
      required_error: "Category is required",
      invalid_type_error: "Category must be a string",
    })
    .min(3, { message: "Category must be at least 3 characters long" }),
  workplaceType: z.enum(["REMOTE", "HYBRID", "ONSITE"], {
    message: "Workplace type must be one of: REMOTE, HYBRID, ONSITE",
  }),
  employmentType: z.enum(
    ["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP", "FREELANCE"],
    {
      message:
        "Employment type must be one of: FULL_TIME, PART_TIME, CONTRACT, INTERNSHIP, FREELANCE",
    }
  ),
  skills: z
    .array(
      z.string({
        required_error: "Skills are required",
        invalid_type_error: "Skills must be an array of strings",
      })
    )
    .min(1, { message: "At least one skill is required" }),
  salary: z.object({
    frequency: z.enum(["MONTHLY", "YEARLY"], {
      message: "Salary frequency must be either MONTHLY or YEARLY",
    }),
    amount: z
      .string({
        required_error: "Salary amount is required",
        invalid_type_error: "Salary amount must be a number",
      })
      .min(1, {
        message: "Salary amount must be at least 1",
      }),
  }),
  company: z.object({
    name: z
      .string({
        required_error: "Company name is required",
        invalid_type_error: "Company name must be a string",
      })
      .min(2, { message: "Company name must be at least 2 characters long" }),
    logo: z
      .string({
        required_error: "Company logo is required",
        invalid_type_error: "Company logo must be a string",
      })
      .url({ message: "Company logo must be a valid URL" }),
    location: z
      .string({
        required_error: "Company location is required",
        invalid_type_error: "Company location must be a string",
      })
      .min(2, {
        message: "Company location must be at least 2 characters long",
      }),
  }),
});
