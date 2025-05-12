import {
  applyToJob,
  createJob,
  deleteJob,
  editJob,
  getAllEmployerJobs,
  getAllJobs,
  getAllUserJobs,
  getJobApplicants,
  getJobById,
} from "@/services/job.service";
import { APIError } from "@/types/auth.types";
import {
  CreateJobFormValues,
  EditJobFormValues,
  JobApplicant,
  JobByIdType,
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

      if (error.response?.data?.message === "Validation Error") {
        error.response.data.errors?.map((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error(error.response?.data?.message || "Failed to create job.");
      }
    },
  });
};

export const useJobDetails = (id: string) => {
  return useQuery<JobByIdType>({
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

      if (error.response?.data?.message === "Validation Error") {
        error.response.data.errors?.map((err) => {
          toast.error(err.message);
        });
      } else {
        toast.error(error.response?.data?.message || "Failed to create job.");
      }
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
      toast.error(error.response?.data?.message || "Failed to delete job.");
    },
  });
};

export const useApplyToJob = (jobId: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => applyToJob(jobId),
    onSuccess: (data: { message: string }) => {
      // console.log(data);
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["jobs", jobId] });
    },
    onError: (error: APIError) => {
      console.log(error);
      toast.error(error.response?.data?.message || "Failed to apply to job.");
    },
  });
};

export const useEmployerJobs = () => {
  return useQuery<JobSummaryType[]>({
    queryFn: getAllEmployerJobs,
    queryKey: ["employer-jobs"],
  });
};

export const useUserJobs = () => {
  return useQuery<JobSummaryType[]>({
    queryFn: getAllUserJobs,
    queryKey: ["user-jobs"],
  });
};

export const useJobApplicants = (jobId: string) => {
  return useQuery<JobApplicant[]>({
    queryFn: () => getJobApplicants(jobId),
    queryKey: ["jobs-applicants", jobId],
  });
};
