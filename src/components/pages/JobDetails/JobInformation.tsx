import { MapPin, Briefcase, Building2, FolderKanban } from "lucide-react";
import React from "react";

interface JobInformationProps {
  category: string;
  workplaceType: string;
  employmentType: string;
  companyLocation: string;
}

export default function JobInformation({
  category,
  companyLocation,
  workplaceType,
  employmentType,
}: JobInformationProps) {
  return (
    <div className="md:w-[28rem] w-full mt-2">
      <h2>Job Information & Benefits</h2>

      <div className="shadow-sm p-4 mt-2 border rounded-lg bg-gradient-to-r from-blue-400/5 to-blue-800/5 ">
        <h3 className="font-semibold">Job Type</h3>
        <div className="flex items-center flex-wrap gap-2 mt-2">
          {/* Category*/}
          <Badge>
            <>
              <FolderKanban className="h-4 w-4" />
              <span className="text-sm">{category}</span>
            </>
          </Badge>

          {/* Workplace Type */}
          <Badge>
            <>
              <Building2 className="h-4 w-4" />
              <span className="text-sm">
                {workplaceType.replace(/_/g, " ")}
              </span>
            </>
          </Badge>

          {/* Employment Type */}
          <Badge>
            <Briefcase className="h-4 w-4" />
            <span className="text-sm">{employmentType.replace(/_/g, " ")}</span>
          </Badge>

          {/* Company Location */}
          <Badge>
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{companyLocation}</span>
          </Badge>
        </div>
      </div>
    </div>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="border  cursor-pointer bg-blue-400/5 hover:border-blue-900  flex gap-2 items-center text-muted-foreground py-2 px-4 rounded-lg">
      {children}
    </div>
  );
}
