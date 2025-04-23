import {
  createJob,
  deleteJob,
  editJob,
  getAllJobs,
  getJobById,
} from "@/services/job.service";
import { APIError } from "@/types/auth.types";
import {
  CreateJobFormValues,
  EditJobFormValues,
  JobDetailsType,
  JobSummaryType,
} from "@/types/job.types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateJobFormValues) => createJob(data),
    onSuccess: (data: { message: string }) => {
      // console.log(data);

      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
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

export const useEditJob = (jobId: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (jobData: EditJobFormValues) => editJob(jobData, jobId),
    onSuccess: (data: { message: string }) => {
      // console.log(data);
      toast.success(data.message);

      queryClient.invalidateQueries({ queryKey: ["jobs", jobId] });
      router.push("/jobs/" + jobId);
    },
    onError: (error: APIError) => {
      console.log(error);
      toast.error(error.response?.data?.errorMessage || "Failed to edit job.");
    },
  });
};

export const useDeleteJob = (jobId: string) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteJob(jobId),
    onSuccess: (data: { message: string }) => {
      // console.log(data);
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["jobs"] });

      router.push("/jobs");
    },
    onError: (error: APIError) => {
      console.log(error);
      toast.error(
        error.response?.data?.errorMessage || "Failed to delete job."
      );
    },
  });
};
