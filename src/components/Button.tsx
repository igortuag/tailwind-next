import { ComponentProps } from "react";
import { tv } from "tailwind-variants";

const button = tv({
  base: [
    "rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500",
    "active:opacity-80"
  ],
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

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={button({ variant: props.variant, size: props.size })}
      {...props}
    />
  );
};
