import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { buttonVariants } from "@/components/ui/button";
import { NewLabelForm } from "./NewLabelForm";
import { cn } from "@/lib/utils";

const NewLabel = () => {
  return (
    <Dialog>
      <DialogTrigger
        className={cn(buttonVariants({ variant: "outline" }), "m-2")}
      >
        New Label
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>You are about to create a lasting label!</DialogTitle>
          <DialogDescription>
            You will not be able to delete this label. This is not a temporary
            custom label. This is for new remaining labels.
          </DialogDescription>
        </DialogHeader>
        <NewLabelForm />
      </DialogContent>
    </Dialog>
  );
};

export default NewLabel;
