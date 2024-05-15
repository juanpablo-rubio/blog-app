"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bird, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function NavigationMenu() {
  const pathname = usePathname();

  const linkColor = (href: string) =>
    pathname === href ? "text-foreground" : "text-muted-foreground";

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm">
        <Link href="/">
          <Bird className="h-6 w-6" />
        </Link>
        <Link
          href="#"
          className={cn(
            linkColor("#"),
            "transition-colors hover:text-foreground",
          )}
        >
          Posts
        </Link>
        <Link
          href="#"
          className={cn(
            linkColor("#"),
            "transition-colors hover:text-foreground",
          )}
        >
          Topics
        </Link>
        <Link
          href="#"
          className={cn(
            linkColor("#"),
            "transition-colors hover:text-foreground",
          )}
        >
          Community
        </Link>
        <Link
          href="#"
          className={cn(
            linkColor("#"),
            "transition-colors hover:text-foreground",
          )}
        >
          About
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className={cn(linkColor("#"), "hover:text-foreground")}
            >
              Posts
            </Link>
            <Link
              href="#"
              className={cn(linkColor("#"), "hover:text-foreground")}
            >
              Topics
            </Link>
            <Link
              href="#"
              className={cn(linkColor("#"), "hover:text-foreground")}
            >
              Community
            </Link>
            <Link
              href="#"
              className={cn(linkColor("#"), "hover:text-foreground")}
            >
              About
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex flex-col w-full items-end">
        <ThemeToggle />
      </div>
    </header>
  );
}
