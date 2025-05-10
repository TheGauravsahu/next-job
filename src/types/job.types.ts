import { createJobSchema } from "@/components/pages/CreateJob/CreateJobSchema";
import { editJobSchema } from "@/components/pages/EditJob/EditJobSchema";
import { z } from "zod";

export type SalaryFrequency = "MONTHLY" | "YEARLY";
export type EmploymentType =
  | "FULL_TIME"
  | "PART_TIME"
  | "CONTRACT"
  | "INTERNSHIP"
export type WorkplaceType = "ONSITE" | "REMOTE" | "HYBRID";

export interface JobSummaryType {
  _id: string;
  title: string;
  skills: string[];
  salary: {
    amount: number;
    frequency: SalaryFrequency;
  };
  company: {
    name: string;
    logo: string;
    location: string;
  };
  employmentType: EmploymentType;
  workplaceType: WorkplaceType;
  createdAt: string;
}

export interface JobDetailsType extends JobSummaryType {
  description: string;
  category: string;
  employer: {
    _id: string;
    name: string;
    email: string;
    role: string;
  };
}
export type CreateJobFormValues = z.infer<typeof createJobSchema>;
export type EditJobFormValues = z.infer<typeof editJobSchema>;
