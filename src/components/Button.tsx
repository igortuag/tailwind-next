import { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const button = tv({
  base: "rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700",
  variants: {
    variant: {
      primary: "bg-violet-600 text-white hover:bg-violet-700",
      secondary: "bg-zinc-100 text-zinc-700 hover:bg-zinc-200",
    },
    size: {
      small: "text-xs px-3 py-1",
      medium: "text-sm px-4 py-2",
      large: "text-lg px-5 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export interface ButtonProps extends ComponentProps<"button"> {}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm bg-violet-600 text-white hover:bg-violet-700"
      {...props}
    />
  );
};
