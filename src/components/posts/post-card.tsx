"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CardContent, Card } from "@/components/ui/card";
import { Post } from "@/types/Post";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0].toUpperCase())
      .join("");
  };

  return (
    <Card>
      <CardContent className="flex items-start w-full p-6 gap-4">
        <Avatar>
          <AvatarFallback>{getInitials(post.user.name)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            <h4 className="font-semibold">{post.user.name}</h4>
            <span className="text-sm text-muted-foreground">
              @{post.user.username}
            </span>
          </div>
          <p className="text-sm leading-relaxed">{post.body}</p>
          <div className="text-xs text-muted-foreground">
            18:42 PM - May 15, 2024
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
