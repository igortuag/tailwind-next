import { ComponentProps, createContext, useId } from "react";

export interface RootProps extends ComponentProps<"div"> {}

type FileInputContextType = {
  id: string;
};

export const FileInputContext = createContext<FileInputContextType | null>(
  null
);

export function Root(props: RootProps) {
  const id = useId();

  return (
    <FileInputContext.Provider value={{ id }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
}
