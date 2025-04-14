import JobsList from "@/components/pages/Jobs/JobsList";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function JobPage() {
  return (
    <div className="py-32 px-16 h-full w-full ">
      <div className="w-full flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Find Your
          <span className="bg-gradient-to-t from-blue-400 to-blue-700 bg-clip-text text-transparent">
            {" "}
            Next Job
          </span>
        </h1>
        <Link href="/">
          <Button variant="gradient">Create a Job</Button>
        </Link>
      </div>
      <JobsList />
    </div>
  );
}
