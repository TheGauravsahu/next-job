"use client";

import JobCard, { JobCardSkeleton } from "@/components/pages/Jobs/JobCard";
import { useJobList } from "@/hooks/useJob";

export default function JobsList() {
  const { data, isPending, error } = useJobList();

  // console.log(data);

  if (isPending) return <JobsListSkeleton />;

  if (error) return <div>Something went wrong.</div>;

  return (
    <div className="flex flex-wrap gap-5 justify-center md:justify-start items-start max-w-6xl w-full">
      {data.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

function JobsListSkeleton() {
  return (
    <div className="flex flex-wrap gap-5 justify-center md:justify-start items-start max-w-6xl w-full">
      {[1, 2, 3].map((item) => (
        <JobCardSkeleton key={item} />
      ))}
    </div>
  );
}
