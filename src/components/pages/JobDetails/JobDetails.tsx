"use client";

import { useApplyToJob, useJobDetails } from "@/hooks/useJob";
import JobDetailsBreadcrumb from "./JobDetailsBreadcrumb";
import { Loader2, Pencil } from "lucide-react";
import JobInformation, { Badge } from "./JobInformation";
import { formatSalary } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth";
import DeleteJobDialog from "./DeleteJobDialog";
import LoadingButton from "@/components/general/loading-button";

interface JobDetailsProps {
  id: string;
}
export default function JobDetails({ id }: JobDetailsProps) {
  const { user } = useAuthStore();
  const { data, isPending, error } = useJobDetails(id);
  const applyJobMutation = useApplyToJob(id);

  const { job, hasApplied } = data ?? {};

  // console.log(job);

  if (isPending)
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader2 className="w-8 h-8  animate-spin text-blue-700" />
        <span className="sr-only">Loading...</span>
      </div>
    );

  if (error) return <div>An error occured: {error.message}</div>;

  return (
    <div>
      <div>
        <JobDetailsBreadcrumb jobTitle={job?.title as string} />
      </div>

      {/* Top */}
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="w-full flex  gap-4 p-4 md:mt-2 mt-8">
          <div className="bg-white flex items-center justify-center dark:bg-white/95 p-2 shadow-md rounded-lg w-32 h-32">
            <img
              alt={job?.company.name}
              src={job?.company.logo}
              className="object-cover"
            />
          </div>

          {/* Job Details */}
          <div className="w-full flex justify-between">
            <div className="w-full">
              <h1 className="text-lg font-semibold">{job?.title}</h1>

              <h2 className="text-muted-foreground">{job?.company.name}</h2>
              <h3 className="tex-sm text-forground/85">
                {formatSalary(
                  job?.salary.amount as number,
                  job?.salary.frequency as string
                )}
              </h3>

              <div className="mt-2">
                <p className="text-xs text-muted-foreground">Posted By</p>
                <p className="text-sm">{job?.employer.name}</p>
              </div>

              <LoadingButton
                className="md:w-1/4"
                onClick={() => applyJobMutation.mutate()}
                isLoading={applyJobMutation.isPending}
                loadingText="Applying"
                // disabled={hasApplied}
              >
                {hasApplied ? "Applied" : "Apply"}
              </LoadingButton>
            </div>

            {/* Edit and Delete */}
            <div>
              {user?.role === "EMPLOYER" &&
                user.email === job?.employer.email && (
                  <div className="flex  md:items-center  gap-4">
                    <div className="flex items-center">
                      <Link href={"/jobs/" + job?._id + "/edit"}>
                        <Button
                          variant="ghost"
                          className="text-muted-foreground"
                        >
                          <Pencil size={12} />
                        </Button>
                      </Link>
                      <DeleteJobDialog jobId={id} />
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="md:w-[28rem] w-full mt-4  p-4 border rounded-lg h-fit bg-gradient-to-r from-blue-500/5 to-blue-800/5 ">
          <h3 className="font-semibold">Skills</h3>
          <div className="flex items-center flex-wrap gap-2 mt-2">
            {job?.skills.map((skill, index) => (
              <Badge key={skill + "-" + index}>
                <span className="text-sm">{skill}</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Middle */}
      <div className="w-full flex flex-col md:flex-row  items-start justify-between gap-4 mt-4">
        {/* Description */}
        <div className="w-full mt-2 md:p-4 wf-full">
          <h2>Job Description</h2>

          <div className="shadow-sm p-4 mt-2 border rounded-lg bg-gradient-to-r from-blue-400/5 to-blue-800/5">
            <p>{job?.description}</p>
          </div>
        </div>

        {/* Information */}
        <JobInformation
          category={job?.category as string}
          companyLocation={job?.company.location as string}
          workplaceType={job?.workplaceType as string}
          employmentType={job?.employmentType as string}
        />
      </div>
    </div>
  );
}
