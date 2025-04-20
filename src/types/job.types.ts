import { createJobSchema } from "@/components/pages/CreateJob/CreateJobSchema";
import { editJobSchema } from "@/components/pages/EditJob/EditJobSchema";
import { z } from "zod";

export type SalaryFrequency = "MONTHLY" | "ANNUALLY";
export type EmploymentType =
  | "Full_time"
  | "Part_time"
  | "Internship"
  | "Contract";
export type WorkplaceType = "On_site" | "Remote" | "Hybrid";

export interface JobSummaryType {
  id: string;
  title: string;
  salary: number;
  salaryFrequency: SalaryFrequency;
  skills: string[];
  companyName: string;
  companyLogo: string;
  companyLocation: string;
  employmentType: EmploymentType;
  workplaceType: WorkplaceType;
  postedAt: string;
}

export interface JobDetailsType extends JobSummaryType {
  description: string;
  category: string;
  postedByEmail: string;
  employerName: string;
}
export type CreateJobFormValues = z.infer<typeof createJobSchema>;
export type EditJobFormValues = z.infer<typeof editJobSchema>;
