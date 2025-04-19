import { MapPin, Briefcase, Building2 } from "lucide-react";

interface JobInformationProps {
  workplaceType: string;
  employmentType: string;
  companyLocation: string;
}

export default function JobInformation({
  companyLocation,
  workplaceType,
  employmentType,
}: JobInformationProps) {
  return (
    <div className="md:w-[40%] w-full mt-2 p-4">
      <h2>Job Information & Benefits</h2>

      <div className="shadow-sm p-4 mt-2 border rounded-lg">
        <h3 className="font-semibold">Job Type</h3>
        <div className="flex items-center flex-wrap gap-2 mt-2">
          {/* Workplace Type */}
          <div className="border flex gap-2 items-center text-muted-foreground py-2 px-4 rounded-lg">
            <Building2 className="h-4 w-4" />
            <span className="text-sm">{workplaceType.replace(/_/g, " ")}</span>
          </div>

          {/* Employment Type */}
          <div className="border flex gap-2 items-center text-muted-foreground py-2 px-4 rounded-lg">
            <Briefcase className="h-4 w-4" />
            <span className="text-sm">{employmentType.replace(/_/g, " ")}</span>
          </div>

          {/* Company Location */}
          <div className="border flex gap-2 items-center text-muted-foreground py-2 px-4 rounded-lg">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{companyLocation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
