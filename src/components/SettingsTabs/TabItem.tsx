"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

export interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export default function TabItem({ value, title, isSelected }: TabItemProps) {
  return (
    <Tabs.Trigger
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 outline-none group"
      value={value}
    >
      <span className="group-focus-visible:ring-2 rounded group-focus-visible:ring-violet-500 group-focus-visible:ring-offset-4 whitespace-nowrap">
        {title}
      </span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute inset-x-0 -bottom-px h-0.5 bg-violet-700 dark:bg-violet-300"
        />
      )}
    </Tabs.Trigger>
  );
}
