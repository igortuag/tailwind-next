"use client";
import { ChangeEvent, ComponentProps } from "react";
import { useFileInput } from "./Root";

interface ControlProps extends ComponentProps<"input"> {}

export function Control({multiple, ...props}: ControlProps) {
  const { id, onFilesSelected } = useFileInput();

  function handleFileSelected(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files?.length || !onFilesSelected) {
      return;
    }
    onFilesSelected(Array.from(files));
  }
  return (
    <input
      type="file"
      className="sr-only"
      onChange={handleFileSelected}
      id={id}
      {...props}
    />
  );
}
