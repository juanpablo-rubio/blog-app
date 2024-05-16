"use server";

import { Post } from "@/types/Post";
import { PrismaClient } from "@prisma/client";
import { paginationParams } from "@/app/posts/_config/pagination-params";

const prisma = new PrismaClient();

const { postsPerPage } = paginationParams;

export async function fetchPosts({
  userId,
  page,
}: {
  userId: number | undefined;
  page: number;
}): Promise<Post[]> {
  const offset = (page - 1) * postsPerPage;

  if (userId) {
    return await prisma.post.findMany({
      include: {
        user: true,
      },
      where: {
        user: {
          id: userId,
        },
      },
      skip: offset,
      take: postsPerPage,
    });
  } else {
    return await prisma.post.findMany({
      include: {
        user: true,
      },
      skip: offset,
      take: postsPerPage,
    });
  }
}

export async function fetchPostsPages({
  userId,
}: {
  userId: number | undefined;
}): Promise<number> {
  if (userId) {
    const postsCount = await prisma.post.count({
      where: {
        user: {
          id: userId,
        },
      },
    });
    return Math.ceil(postsCount / postsPerPage);
  } else {
    const postsCount = await prisma.post.count();
    return Math.ceil(postsCount / postsPerPage);
  }
}
