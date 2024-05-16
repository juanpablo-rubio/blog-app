"use client";

import Link from "next/link";

import { TriangleAlertIcon } from "lucide-react";

export default function Error() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-6">
      <div className="rounded-full bg-red-100 p-6 dark:bg-red-900">
        <TriangleAlertIcon className="h-12 w-12 text-red-500 dark:text-red-400" />
      </div>
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Oops, something went wrong!</h1>
        <p className="text-muted-foreground">
          We&apos;re sorry, but an error occurred while loading the posts. Please try
          again later.
        </p>
      </div>
      <Link
        className="inline-flex items-center rounded-md bg-foreground h-10 px-6 
                   text-sm font-medium text-background"
        href="/"
      >
        Go back home
      </Link>
    </div>
  );
}
