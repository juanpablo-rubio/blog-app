import PostList from "@/app/posts/post-list";
import PostSearch from "@/components/posts/post-search";
import PostListSkeleton from "@/components/posts/post-list-skeleton";
import Pagination from "@/components/ui/pagination";

import { Suspense } from "react";
import { fetchPostsPages } from "@/server-actions/posts";

type PostsPageProps = {
  searchParams?: {
    userId?: string;
    page?: string;
  };
};

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const userId = searchParams?.userId || "";
  const page = Number(searchParams?.page) || 1;

  const totalPages = await fetchPostsPages({
    userId: Number(userId) || undefined,
  });

  return (
    <div className="flex flex-col items-center w-full py-6 px-2 mx-auto max-w-3xl">
      <PostSearch placeholder="Search posts by User ID..." />
      <Suspense key={userId + page} fallback={<PostListSkeleton />}>
        <PostList query={userId} page={page} />
      </Suspense>
      <Pagination totalPages={totalPages} />
    </div>
  );
}
