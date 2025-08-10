import { formatBytes } from "@/app/ultils/format-bytes";
import { Button } from "@/components/Button";
import { CheckCircle2, Trash2, UploadCloud } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

export const fileItem = tv({
  base: "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4",

  variants: {
    state: {
      progress: "bg-blue-50 border-blue-200",
      complete: "bg-green-50 border-green-200",
      error: "bg-red-50 border-red-200"
    },

    defaultVariants: {
      state: "progress"
    }
  }
});

export interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string;
  size: number;
}

export function FileItem({ name, size, state }: FileItemProps) {
  return (
    <div className={fileItem({ state })}>
      <div className="rounded-full border-violet-100 bg-violet-200 p-2 text-violet-600">
        <UploadCloud className="h-4 w-4" />
      </div>

      {state === "error" ? (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <div className="text-sm font-medium text-error-700">
              Upload failed, please try again.
            </div>
            <div className="text-sm text-error-600">{name}</div>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-red-700 hover:text-red-900"
          >
            try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-start gap-1">
          <div className="flex flex-col">
            <div className="text-sm font-medium text-zinc-700">{name}</div>
            <div className="text-sm text-zinc-500">{formatBytes(size)}</div>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-violet-600"
                style={{ width: state === "complete" ? "100%" : "80%" }}
              />
            </div>
            <span className="text-sm font-medium text-zinc-500">
              {state === "complete" ? "100%" : "80%"}
            </span>
          </div>
        </div>
      )}

      {state === "complete" ? (
        <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="ghost">
          <Trash2 className="w-5 h-5 text-zinc-500" />
          <span className="sr-only">Remove</span>
        </Button>
      )}
    </div>
  );
}
