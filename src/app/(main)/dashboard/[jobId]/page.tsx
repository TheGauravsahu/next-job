import ApplicantBreadCrumb from "@/components/pages/Dashboard/ApplicantBreadCrumb";
import JobApplicantsTable from "@/components/pages/Dashboard/JobApplicantsTable";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

interface JobApplicantsPageProps {
  params: Promise<{ jobId: string }>;
}
export default async function JobApplicantsPage({
  params,
}: JobApplicantsPageProps) {
  const { jobId } = await params;
  const { user } = await auth();

  if (user?.role !== "EMPLOYER") return redirect("/dashboard");

  return (
    <div>
      <div className="px-8 py-22">
        <h1 className="text-2xl font-bold md:leading-16.5 leading-14 mb-2">
          All
          <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
            {" "}
            Applicants
          </span>
        </h1>
        <div>
          <ApplicantBreadCrumb />
        </div>
        <div>
          <JobApplicantsTable jobId={jobId} />
        </div>
      </div>
    </div>
  );
}
