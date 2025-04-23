import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useDeleteJob } from "@/hooks/useJob";
import { Trash } from "lucide-react";

export default function DeleteJobDialog({ jobId }: { jobId: string }) {
  const { mutate: deleteJob } = useDeleteJob(jobId);
  
  return (
    <Dialog>
      <DialogTrigger>
        <Trash className="text-muted-foreground size-4 cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete this job.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => deleteJob()} variant="destructive">
            Confirm
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
