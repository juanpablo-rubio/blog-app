"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';
import { Input } from "@/components/ui/input";

type PostSearchProps = {
  placeholder: string;
};

export default function PostSearch({ placeholder }: PostSearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("userId", term);
    } else {
      params.delete("userId");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 500); 

  return (
    <div className="flex w-full max-w-sm mb-6 space-x-2">
      <Input
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (!/[0-9]/.test(e.key) && e.key != "Backspace") {
            e.preventDefault();
          }
        }}
        defaultValue={searchParams.get("userId")?.toString()}
      />
    </div>
  );
}
