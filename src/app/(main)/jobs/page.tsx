import JobsList from "@/components/pages/Jobs/JobsList";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import Link from "next/link";
import React from "react";

export default async function JobPage() {
  const { user } = await auth();

  return (
    <div className="px-4 py-4 h-full w-full ">
      <div className="w-full flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Find Your
          <span className="bg-gradient-to-t from-blue-400 to-blue-700 bg-clip-text text-transparent">
            {" "}
            Next Job
          </span>
        </h1>

        {user?.role === "EMPLOYER" && (
          <Link href="/jobs/create">
            <Button variant="gradient">Create a Job</Button>
          </Link>
        )}
      </div>
      <JobsList />
    </div>
  );
}
