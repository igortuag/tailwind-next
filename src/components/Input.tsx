import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type PrefixProps = ComponentProps<"div">;

export function Prefix(props: PrefixProps) {
  return <div {...props}></div>;
}

type ControlProps = ComponentProps<"input">;

export function Control(props: ControlProps) {
  return (
    <input
      {...props}
      className="flex-1 border-none bg-transparent outline-none text-zinc-900 placeholder-zinc-900 dark:placeholder-zinc-400 dark:text-zinc-100"
      placeholder="Search"
    />
  );
}

export type RootProps = ComponentProps<"div">;

export function Root({ className, ...props }: RootProps) {
  return (
    <div
      className={twMerge(
        "mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm ",
        "focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-100",
        "dark:border-zinc-400 dark:bg-zinc-700 dark:focus-within:border-violet-900 dark:focus-within:ring-violet-500/30",
        className
      )}
      {...props}
    />
  );
}
