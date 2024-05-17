import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { NavigationMenu } from "@/components/navigation-menu";

test("NavigationMenu", () => {
  render(<NavigationMenu />);

  const postsLink = screen.getByText("Posts");
  const topicsLink = screen.getByText("Topics");
  const communityLink = screen.getByText("Community");
  const aboutLink = screen.getByText("About");

  expect(postsLink).toBeDefined();
  expect(topicsLink).toBeDefined();
  expect(communityLink).toBeDefined();
  expect(aboutLink).toBeDefined();
});
