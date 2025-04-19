import JobDetails from "@/components/pages/JobDetails/JobDetails";

interface JobDetailsPageProps {
  params: Promise<{ id: string }>;
}
export default async function JobDetailsPage({ params }: JobDetailsPageProps) {
  const { id } = await params;

  return (
    <div>
      <JobDetails id={id} />
    </div>
  );
}
