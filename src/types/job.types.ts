import { createJobSchema } from "@/components/pages/CreateJob/CreateJobSchema";
import { z } from "zod";

export interface JobSummaryType {
  id: string;
  title: string;
  salary: number;
  salaryFrequency: string;
  skills: string[];
  companyName: string;
  companyLogo: string;
  companyLocation: string;
  employmentType: string;
  workplaceType: string;
  postedAt: string;
}

export type CreateJobFormValues = z.infer<typeof createJobSchema>;
