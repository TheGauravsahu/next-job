"use client";
import Loader from "@/components/general/loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useUserJobs } from "@/hooks/useJob";
import { formatDate, formatSalary } from "@/lib/utils";
import Link from "next/link";

export default function UserAppliedJobsTable() {
  const { data: jobs, isPending } = useUserJobs();

  if (isPending) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Jobs</CardTitle>
        <CardDescription>List of all jobs that you applied to.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Employment Type</TableHead>
              <TableHead>Workplace Type</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Posted On</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs?.map((job, index) => (
              <TableRow
                key={job._id}
                className={index % 2 === 1 ? "bg-accent" : ""}
              >
                <TableCell className="font-medium">{job._id}</TableCell>
                <TableCell>{job.company.name}</TableCell>
                <TableCell>
                  {job.workplaceType.charAt(0) +
                    job.workplaceType.slice(1).toLowerCase().replace(/_/g, " ")}
                </TableCell>
                <TableCell>
                  {job.employmentType.charAt(0) +
                    job.employmentType
                      .slice(1)
                      .toLowerCase()
                      .replace(/_/g, " ")}
                </TableCell>
                <TableCell>
                  {formatSalary(job.salary.amount, job.salary.frequency)}
                </TableCell>
                <TableCell>{formatDate(job.createdAt)}</TableCell>
                <Link href={"/jobs/" + job._id}>
                  <TableCell className="hover:underline">View</TableCell>
                </Link>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
