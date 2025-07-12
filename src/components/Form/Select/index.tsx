"use client";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { SelectItem } from "./SelectItem";

export default function Select() {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm shadow-sm hover:border-zinc-400 focus:border-violet-600 focus:outline-none focus:ring-1 focus:ring-violet-600 data-[placeholder]:text-zinc-600">
        <SelectPrimitive.Value
          className="text-black"
          placeholder="SelectPrimitive a country..."
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
          className="z-10 rounded-lg border border-zinc-200 bg-white w-[--radix-select-trigger-width] overflow-hidden"
        >
          <SelectPrimitive.Viewport>
            <SelectItem text="Brazil" value="br" />
            <SelectItem text="Argentina" value="ar" />
            <SelectItem text="Chile" value="cl" />
            <SelectItem text="Colombia" value="co" />
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
