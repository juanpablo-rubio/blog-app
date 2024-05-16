import PostCard from "@/components/posts/post-card";

import { fetchPosts } from "@/server-actions/posts";

type PostListProps = {
  query: string;
  page: number;
};

export default async function PostList({ query, page }: PostListProps) {
  const userId = Number(query) || undefined;
  const posts = await fetchPosts({ userId, page });

  return (
    <>
      {posts.length > 0 ? (
        <ul className="flex flex-col gap-8 w-full list-none">
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      ) : (
        <span className="font-medium text-foreground">No posts were found</span>
      )}
    </>
  );
}
