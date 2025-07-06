"use client";
import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from "react";

export interface RootProps extends ComponentProps<"div"> {}

type FileInputContextType = {
  id: string;
  files?: File[];
  onFilesSelected?: (files: File[], multiple?: boolean) => void;
};

export const FileInputContext = createContext({} as FileInputContextType);

export function Root(props: RootProps) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  function onFilesSelected(newFiles: File[], multiple = false) {
    if (multiple) {
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    } else {
      setFiles(newFiles);
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
}

export const useFileInput = () => useContext(FileInputContext);
