import api from "@/lib/axios";
import { CreateJobFormValues, EditJobFormValues } from "@/types/job.types";

export const getAllJobs = async () => {
  return (await api.get("/jobs")).data.data;
};

export const createJob = async (data: CreateJobFormValues) => {
  const job = {
    ...data,
    salary: {
      amount: Number(data.salary.amount),
      frequency: data.salary.frequency,
    },
  };
  return (await api.post("/jobs", job)).data;
};

export const editJob = async (data: EditJobFormValues, jobId: string) => {
  const job = {
    ...data,
    salary: {
      amount: Number(data.salary.amount),
      frequency: data.salary.frequency,
    },
  };

  // console.log("TRANSFORMED-JOB", job);
  return (await api.put("/jobs/" + jobId, job)).data;
};

export const getJobById = async (id: string) => {
  return (await api.get("/jobs/" + id)).data.data;
};

export const deleteJob = async (id: string) => {
  return (await api.delete("/jobs/" + id)).data;
};

export const applyToJob = async (jobId: string) => {
  return (await api.post("/jobs/" + jobId + "/apply")).data;
};

export const getAllEmployerJobs = async () => {
  return (await api.get("/jobs/employer-jobs")).data.data;
};

export const getAllUserJobs = async () => {
  return (await api.get("/jobs/user-jobs")).data.data;
};

export const getJobApplicants = async (jobId: string) => {
  return (await api.get("/jobs/" + jobId + "/applicants")).data.data;
};
