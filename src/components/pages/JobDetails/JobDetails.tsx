"use client";

import { useJobDetails } from "@/hooks/useJob";
import JobDetailsBreadcrumb from "./JobDetailsBreadcrumb";
import { Loader2 } from "lucide-react";
import JobInformation from "./JobInformation";

interface JobDetailsProps {
  id: string;
}
export default function JobDetails({ id }: JobDetailsProps) {
  const { data: job, isPending, error } = useJobDetails(id);

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
        <JobDetailsBreadcrumb jobTitle={job.title} />
      </div>

      {/* Top */}
      <div className="flex gap-4 p-4 md:mt-2 mt-4">
        <div className="bg-white dark:bg-white/95 shadow-md rounded-lg w-32 h-32">
          <img alt={job.companyName} src="/company/amazon.png" />
        </div>
        <div>
          <h1>{job.title}</h1>
          <h2 className="text-foreground/90">{job.companyName}</h2>

          <div className="mt-2">
            <p className="text-xs text-muted-foreground">Posted By</p>
            <p className="text-sm">{job.employerName}</p>
          </div>
        </div>
      </div>

      {/* Middle */}
      <div className="w-full flex flex-col md:flex-row  items-start justify-between gap-4">
        {/* Description */}
        <div className="w-full mt-2 p-4 wf-full">
          <h2>Job Description</h2>

          <div className="shadow-sm p-4 mt-2 border rounded-lg">
            <p>{job.description}</p>
          </div>
        </div>

        {/* Information */}
        <JobInformation
          companyLocation={job.companyLocation}
          workplaceType={job.workplaceType}
          employmentType={job.employmentType}
        />
      </div>
    </div>
  );
}
