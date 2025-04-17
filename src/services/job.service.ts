import api from "@/lib/axios";
import { CreateJobFormValues } from "@/types/job.types";

export const getAllJobs = async () => {
  return (await api.get("/jobs")).data;
};

export const createJob = async (data: CreateJobFormValues) => {
  const job = {
    ...data,
    salary: Number(data.salary),
    skills: [...data.skills.map((skill) => skill.text)],
  };

  console.log("TRANSFORMED-JOB", job);
  return (await api.post("/jobs", job)).data;
};
