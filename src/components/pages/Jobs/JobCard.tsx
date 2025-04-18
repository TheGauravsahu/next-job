import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDate, formatSalary } from "@/lib/utils";
import { JobSummaryType } from "@/types/job.types";
import { Bookmark } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function JobCard({ job }: { job: JobSummaryType }) {
  return (
    <div className="border p-2 rounded-xl w-[20rem] h-[22rem]  bg-indigo-500/5   hover:border-blue-700 transition-all duration-300">
      <div className="w-full h-full flex flex-col items-center gap-2 p-2">
        <div className="w-full h-[80%]">
          {/* header */}
          <div className="w-full flex justify-between items-center">
            <Button variant="outline" className="rounded-full text-xs">
              {formatDate(job.postedAt)}
            </Button>
            <Button variant="outline" className="rounded-full">
              <Bookmark size={16} />
            </Button>
          </div>

          <div className="w-full flex items-center justify-between mt-2">
            <div className="w- py-4">
              <h3>{job.companyName}</h3>
              <div>
                <h1 className="text-xl font-bold">{job.title}</h1>
              </div>
            </div>

            <div className="bg-white rounded-full size-8 overflow-hidden cursor-pointer">
              <Image
                src="/company/amazon.png"
                alt="amazon"
                width={200}
                height={200}
                className="size-8"
              />
            </div>
          </div>

          <div className="w-full flex flex-wrap items-center gap-2 py-1">
            <Button variant="outline" className="rounded-full">
              {job.employmentType.replace(/_/g, " ")}
            </Button>
            <Button variant="outline" className="rounded-full">
              {job.workplaceType.replace(/_/g, " ")}
            </Button>

            {/* skills */}
            {job.skills.slice(0, 3).map((skill, index) => (
              <Button key={index} variant="outline" className="rounded-full">
                {skill}
              </Button>
            ))}
          </div>
        </div>

        {/* footer */}
        <div className="w-full flex items-center justify-betweeen">
          <div className="w-full">
            <h2>{formatSalary(job.salary, job.salaryFrequency)}</h2>
            <p className="text-muted-foreground">{job.companyLocation}</p>
          </div>
          <Button variant="outline" className="rounded-full">
            Details
          </Button>
        </div>
      </div>
    </div>
  );
}

export function JobCardSkeleton() {
  return (
    <div className="border p-2 rounded-xl w-[20rem] h-[22rem]">
      <div className="w-full h-full flex flex-col items-center gap-2 p-2">
        <div className="w-full h-[80%]">
          {/* header */}
          <div className="w-full flex justify-between items-center">
            <Skeleton className="h-6 px-4 w-[100px] rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>

          <div className="w-full flex items-center justify-between mt-2">
            <div className="py-4">
              <Skeleton className="h-6 w-[150px]" />
              <Skeleton className="h-6 w-[200px] mt-2.5" />
            </div>

            <Skeleton className="h-10 w-10 rounded-full" />
          </div>

          <div className="w-full flex flex-wrap items-center gap-2 py-1">
            {[1, 2, 3, 4,5].map((item) => (
              <Skeleton key={item} className="h-7 rounded-full w-[90px]" />
            ))}
          </div>
        </div>

        {/* footer */}
        <div className="w-full flex items-center justify-betweeen">
          <div className="w-full">
            <div className="space-y-2">
              <Skeleton className="h-6 w-[150px]" />
              <Skeleton className="h-6 w-[100px]" />
            </div>
          </div>
          <Skeleton className="h-7 rounded-full w-[100px]" />
        </div>
      </div>
    </div>
  );
}
