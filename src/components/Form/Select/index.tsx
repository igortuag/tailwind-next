"use client";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { SelectItem } from "./SelectItem";
import { ReactNode } from "react";

export interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode;
  placeholder?: string;
}

export default function Select({
  children,
  placeholder,
  ...props
}: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm hover:border-zinc-400  focus:outline-none data-[placeholder]:text-zinc-600 outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 dark:border-zinc-400 dark:bg-zinc-700 dark:focus-within:border-violet-900 dark:focus-within:ring-violet-500/30 dark:data-[placeholder]:text-zinc-400 dark:text-zinc-100">
        <SelectPrimitive.Value
          className="text-black"
          placeholder={placeholder}
        />
        <SelectPrimitive.Icon className="text-zinc-500">
          <ChevronDown className="h-5 w-5" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 shadow-sm rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] overflow-hidden animate-slideDownAndFade dark:bg-zinc-800 dark:border-zinc-700"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
