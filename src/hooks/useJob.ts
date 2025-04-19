import { createJob, getAllJobs, getJobById } from "@/services/job.service";
import { APIError } from "@/types/auth.types";
import {
  CreateJobFormValues,
  JobDetailsType,
  JobSummaryType,
} from "@/types/job.types";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useJobList = () => {
  return useQuery<JobSummaryType[]>({
    queryKey: ["jobs"],
    queryFn: getAllJobs,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const useCreateJob = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: CreateJobFormValues) => createJob(data),
    onSuccess: (data: { message: string }) => {
      console.log(data);

      toast.success(data.message);
      router.push("/jobs");
    },
    onError: (error: APIError) => {
      console.log(error);
      toast.error(
        error.response?.data?.errorMessage || "Failed to create job."
      );
    },
  });
};

export const useJobDetails = (id: string) => {
  return useQuery<JobDetailsType>({
    queryKey: ["jobs", id],
    queryFn: () => getJobById(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
