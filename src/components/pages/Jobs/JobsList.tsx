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
        <JobCard key={job._id} job={job} />
      ))}
      {!isPending && data.length === 0 && (
        <div className="flex flex-col items-center justify-center w-full h-screen">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
            No jobs found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Please check back later or try again.
          </p>
        </div>
      )}
    </div>
  );
}

function JobsListSkeleton() {
  return (
    <div className="flex flex-wrap gap-8 md:gap-6 justify-center md:justify-start items-start max-w-6xl w-full">
      {[1, 2, 3].map((item) => (
        <JobCardSkeleton key={item} />
      ))}
    </div>
  );
}
