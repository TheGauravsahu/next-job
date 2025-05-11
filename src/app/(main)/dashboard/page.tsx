import EmployerJobsTable from "@/components/pages/Dashboard/EmployerJobsTable";
import UserAppliedJobsTable from "@/components/pages/Dashboard/UserAppliedJobsTable";
import { auth } from "@/lib/auth";
import React from "react";

export default async function DashboardPage() {
  const { user } = await auth();
  return (
    <div className="px-8 py-22">
      <h1 className="text-2xl font-bold md:leading-16.5 leading-14 mb-2">
        {user?.name}&apos;s
        <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent">
          {" "}
          Dashboard
        </span>
      </h1>
      <div>
        {user?.role === "EMPLOYER" ? (
          <EmployerJobsTable />
        ) : (
          <UserAppliedJobsTable />
        )}
      </div>
    </div>
  );
}
