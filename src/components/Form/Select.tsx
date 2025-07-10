"use client";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";

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
            <SelectPrimitive.Item
              value="br"
              className="flex items-center gap-2 py-2.5 outline-none data-[highlighted]:bg-zinc-50 data-[highlighted]:text-violet-900 justify-between"
            >
              <SelectPrimitive.ItemText className="text-sm text-zinc-900">
                Brazil
              </SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="text-violet-600">
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
            <SelectPrimitive.Item
              value="us"
              className="flex items-center gap-2 py-2.5 outline-none data-[highlighted]:bg-zinc-50 data-[highlighted]:text-violet-900 justify-between"
            >
              <SelectPrimitive.ItemText className="text-sm text-zinc-900">
                United States
              </SelectPrimitive.ItemText>
              <SelectPrimitive.ItemIndicator className="text-violet-600">
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}
