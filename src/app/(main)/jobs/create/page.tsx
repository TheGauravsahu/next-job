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
    <div className="h-full w-full lg:px-32 md:px-16 py-32">
      <div className="h-full w-full flex items-center justify-center">
        <Card className="w-[90%] md:w-[70%]  md:p-4 py-8">
          <CardHeader>
            <CardTitle>
              <h1 className="text-2xl font-bold">
                Create
                <span className="text-transparent bg-gradient-to-t from-blue-400 to-blue-700 bg-clip-text">
                  {" "}
                  Job
                </span>
              </h1>
            </CardTitle>
            <CardDescription>This job will be listed publicly.</CardDescription>
          </CardHeader>
          <CardContent>
            <CreateJobForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
