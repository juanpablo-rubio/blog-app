import PostCard from "@/components/posts/post-card";

import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Post } from "@/types/Post";

const mock: Post = {
  id: 1,
  title: "Post Title",
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  userId: 1,
  user: {
    id: 1,
    name: "User",
    username: "Username",
    email: "test@email.com",
    phone: "099123456",
    website: "test.com",
  },
};

test("PostCard", () => {
  render(<PostCard post={mock} />);

  const name = screen.getByText(mock.user.name);
  const username = screen.getByText(`@${mock.user.username}`);
  const postBody = screen.getByText(mock.body);
  const deleteIcon = screen.getByTestId("trash-icon-id");

  expect(name).toBeDefined();
  expect(username).toBeDefined();
  expect(postBody).toBeDefined();
  expect(deleteIcon).toBeDefined();
});
