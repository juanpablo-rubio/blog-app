"use client";

import { useEffect, useState } from "react";
import { TrashIcon } from "lucide-react";
import {
  AlertDialogTrigger,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogFooter,
  AlertDialogContent,
  AlertDialog,
} from "@/components/ui/alert-dialog";

type PostDeleteDialogProps = {
  onDeleteConfirmation: () => void;
};

export default function PostDeleteDialog({
  onDeleteConfirmation,
}: PostDeleteDialogProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <AlertDialog>
      <AlertDialogTrigger 
        className="rounded-md text-red-500 h-10 w-10 transition-colors hover:bg-red-100 dark:hover:bg-red-900"
      >
        <TrashIcon className="h-4 w-4 mx-auto" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Post</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this post? This action cannot be
            undone and the post will be permanently deleted.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="text-red-500 bg-red-100 hover:bg-red-200 dark:bg-red-950 dark:hover:bg-red-900"
            onClick={onDeleteConfirmation}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ) : null;
}
