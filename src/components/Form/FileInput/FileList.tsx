"use client";

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";

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
              <div className="text-sm text-zinc-500">{file.size} bytes</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
