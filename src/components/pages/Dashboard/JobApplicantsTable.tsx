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

import { useJobApplicants } from "@/hooks/useJob";

export default function JobApplicantsTable({ jobId }: { jobId: string }) {
  const { data: applicants, isPending } = useJobApplicants(jobId);

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
        <CardTitle>All Applicants</CardTitle>
        <CardDescription>
          List of all applicants that has applied for the job.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Id</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {!isPending && (applicants?.length ?? 0) < 1 ? (
              <p className="p-2">No applicants found.</p>
            ) : (
              <>
                {applicants?.map((applicant, index) => (
                  <TableRow
                    key={applicant._id}
                    className={index % 2 === 1 ? "bg-accent" : ""}
                  >
                    <TableCell className="font-medium">
                      {applicant._id}
                    </TableCell>
                    <TableCell>{applicant.name}</TableCell>
                    <TableCell>{applicant.email}</TableCell>
                    <TableCell>
                      {applicant.role.charAt(0) +
                        applicant.role
                          .slice(1)
                          .toLowerCase()
                          .replace(/_/g, " ")}
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
