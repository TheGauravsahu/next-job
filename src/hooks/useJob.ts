import { getAllJobs } from "@/services/job.service";
import { JobSummaryType } from "@/types/job.types";
import { useQuery } from "@tanstack/react-query";

export const useJobList = () => {
  return useQuery<JobSummaryType[]>({
    queryKey: ["jobs"],
    queryFn: getAllJobs,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
