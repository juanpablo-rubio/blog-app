import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const config = {
  USERS_API_URL: "https://jsonplaceholder.typicode.com/users",
  POSTS_API_URL: "https://jsonplaceholder.typicode.com/posts",
};

async function seed() {
  const usersResponse = await fetch(config.USERS_API_URL);
  const users = await usersResponse.json();

  const postsResponse = await fetch(config.POSTS_API_URL);
  const posts = await postsResponse.json();

  await prisma.user.createMany({
    data: users.map((user: any) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website,
    })),
  });

  await prisma.post.createMany({
    data: posts.map((post: any) => ({
      id: post.id,
      title: post.title,
      body: post.body,
      userId: post.userId,
    })),
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
