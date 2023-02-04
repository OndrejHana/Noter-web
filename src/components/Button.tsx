import CustomText from "./CustomText";

import { cva, VariantProps } from "class-variance-authority";

const style = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "px-4",
    "py-1",
    "m-2",
    "rounded",
    "shadow-md",
  ],
  {
    variants: {
      type: {
        primary: ["bg-blue-mid"],
        secondary: ["bg-gray-mid"],
        danger: ["bg-red-mid"],
      },
    },
    defaultVariants: {
      type: "primary",
    },
  }
);

export interface Props extends VariantProps<typeof style> {
  content: string;
}

export default function Button({ type, content }: Props): JSX.Element {
  return (
    <button className={style({ type })}>
      <CustomText type="body" content={content} />
    </button>
  );
}
