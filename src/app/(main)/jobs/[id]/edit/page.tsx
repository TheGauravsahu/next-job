import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import EditJobForm from "@/components/pages/EditJob/EditJobForm";

interface EditeJobPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditJobPage({ params }: EditeJobPageProps) {
  const { id } = await params;
  const { user } = await auth();

  if (user?.role !== "EMPLOYER") redirect("/jobs");

  return (
    <div className="h-full w-full flex  items-center justify-center">
      <Card className="w-full md:w-[60%]  md:p-4 py-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-1">
            <h1 className="text-2xl font-bold">
              Edit
              <span className="text-transparent bg-gradient-to-t from-blue-400 to-blue-700 bg-clip-text">
                {" "}
                Job
              </span>
            </h1>
          </CardTitle>
          <CardDescription>
            Edit the job post as needed. Changes go live instantly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EditJobForm jobId={id} />
        </CardContent>
      </Card>
    </div>
  );
}
