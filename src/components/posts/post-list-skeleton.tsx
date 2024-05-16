"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { CardContent, Card } from "@/components/ui/card";

import { paginationParams } from "@/app/posts/_config/pagination-params";

function PostCardSkeleton() {
  return (
    <Card>
      <CardContent className="flex items-start p-6 gap-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-20" />
          </div>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function PostListSkeleton() {
  return (
    <div className="flex flex-col gap-8 w-full">
      {Array.from({ length: paginationParams.postsPerPage }).map((_, index) => (
        <PostCardSkeleton key={index} />
      ))}
    </div>
  );
}
