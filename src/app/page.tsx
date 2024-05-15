import Link from "next/link";
import { Bird } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)]">
      <Bird className="absolute z-0 foreground opacity-5 pointer-events-none w-[300px] h-[300px]" />
      <h1 className="mb-8 text-4xl text-center font-bold">
        Welcome to our Blog!
      </h1>
      <Link
        href="#"
        className="z-1 px-5 py-4 rounded-lg transition-colors hover:bg-secondary"
      >
        <h2 className="mb-3 text-2xl font-semibold">Explore Posts</h2>
        <p className="text-sm opacity-50 max-w-[30ch]">
          Explore the latest posts from our community and join the conversation.
        </p>
      </Link>
    </main>
  );
}
