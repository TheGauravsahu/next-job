import api from "@/lib/axios";

export const getAllJobs = async () => {
  return (await api.get("/jobs")).data;
};
