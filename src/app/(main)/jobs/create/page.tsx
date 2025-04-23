import CreateJobBreadCrumb from "@/components/pages/CreateJob/CreateJobBreadCrumb";
import CreateJobForm from "@/components/pages/CreateJob/CreateJobForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function CreateJobPage() {
  const { user } = await auth();

  if (user?.role !== "EMPLOYER") redirect("/jobs");

  return (
    <div className="h-full w-full">
      <CreateJobBreadCrumb />
      <div className="h-full w-full flex  items-center justify-center">
        <Card className="w-full md:w-[60%]   md:p-4 py-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-1">
              <h1 className="text-2xl font-bold">
                Create
                <span className="text-transparent bg-gradient-to-t from-blue-400 to-blue-700 bg-clip-text">
                  {" "}
                  Job
                </span>
              </h1>
            </CardTitle>
            <CardDescription>
              Let&apos;s get the word out! Add a new job listing to connect with
              talented professionals.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CreateJobForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
