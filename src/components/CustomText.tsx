import { ComponentProps } from "react";
import { cva, VariantProps } from "class-variance-authority";

const style = cva(["text-black", "dark:text-white", "opacity-80", "m-1"], {
  variants: {
    type: {
      heading1: [
        "font-semibold",
        "text-4xl",
        "leading-10",
        "opacity-100",
        "dark: opacity-80",
      ],
      heading2: [
        "font-medium",
        "text-3xl",
        "leading-9",
        "opacity-100",
        "dark: opacity-80",
      ],
      heading3: [
        "font-medium",
        "text-2xl",
        "leading-8",
        "opacity-100",
        "dark: opacity-80",
      ],
      "large-light": ["opacity-100", "font-light"],
      "large-normal": ["opacity-100", "font-normal"],
      "large-bold": ["opacity-100", "font-semibold"],
      "body-light": ["opacity-80", "font-light"],
      "body-normal": ["opacity-80", "font-normal", "text-base"],
      "body-bold": ["opacity-80", "font-semibold"],
    },
  },
});

type divProps = ComponentProps<"div">;
export interface Props extends divProps, VariantProps<typeof style> {
  content: string;
}

export function CustomText({ type, content, ...props }: Props): JSX.Element {
  return (
    <div className={style({ type })} {...props}>
      {content}
    </div>
  );
}
