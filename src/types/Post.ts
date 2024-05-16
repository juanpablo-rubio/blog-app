import { User } from "./User";

export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  user: User;
};
