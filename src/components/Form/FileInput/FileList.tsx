"use client";

import { useFileInput } from "./Root";

export default function FileList() {
  const { files } = useFileInput();

  return (
    <div className="mt-4 space-y-3">
      {files && files.length > 0 ? (
        files.map((file, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 bg-gray-100 rounded-md"
          >
            <span className="text-sm text-gray-700">{file.name}</span>
            <span className="text-xs text-gray-500">
              {Math.round(file.size / 1024)} KB
            </span>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No files selected</p>
      )}
    </div>
  );
}
