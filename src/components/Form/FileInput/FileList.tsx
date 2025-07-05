"use client";

import { Trash2, UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";
import { formatBytes } from "@/app/ultils/format-bytes";

export function FileList() {
  const { files } = useFileInput();

  return (
    <div className="mt-4 space-y-3">
      {files?.map((file) => (
        <div
          className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
          key={file.name}
        >
          <div className="rounded-full border-violet-100 bg-violet-200 p-2 text-violet-600">
            <UploadCloud className="h-4 w-4" />
          </div>

          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <div className="text-sm font-medium text-zinc-700">
                {file.name}
              </div>
              <div className="text-sm text-zinc-500">
                {formatBytes(file.size)}
              </div>
            </div>

            <div className="flex w-full items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-zinc-100">
                <div className="h-2 rounded-full bg-violet-600 w-4/5" />
              </div>
              <span className="text-sm font-medium text-zinc-500">80%</span>
            </div>

            <button
              type="button"
              className="ml-auto p-2 hover:bg-zinc-50 rounded-mds"
            >
              <Trash2 className="w-5 h-5 text-zinc-500" />
              <span className="sr-only">Remove</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
