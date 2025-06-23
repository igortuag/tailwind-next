import { ComponentProps } from "react";

interface ControlProps extends ComponentProps<"input"> {}

export default function Control(props: ControlProps) {
  return <input type="file" className="sr-only" id="photo" {...props} />;
}
