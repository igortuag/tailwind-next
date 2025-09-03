import { User } from "lucide-react";
import { useFileInput } from "./Root";
import { useMemo } from "react";

export function ImagePreview() {
  const { files } = useFileInput();

  const previewUrl = useMemo(() => {
    if (!files || files.length === 0) return null;

    const objectUrl = URL.createObjectURL(files[0]);
    return objectUrl;
  }, [files]);

  if (!previewUrl) {
    return (
      <div className="bg-violet-50 flex h-16 2-16 items-center justify-center rounded-full dark:bg-violet-500/10 dark:text-violet-300">
        <User className="w-8 h-8 text-violet-500" />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={previewUrl}
      alt="Preview"
      className="w-16 h-16 rounded-full object-cover"
      onLoad={() => URL.revokeObjectURL(previewUrl)}
    />
  );
}
