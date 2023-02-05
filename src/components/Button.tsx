import { CustomText, Props as CustomTextProps } from "./CustomText";
import { cva, VariantProps } from "class-variance-authority";

const style = cva(
  ["flex", "items-center", "justify-center", "px-3", "m-2", "rounded-lg", "shadow-md"],
  {
    variants: {
      intent: {
        primary: ["bg-blue-mid"],
        secondary: ["bg-gray-mid"],
        danger: ["bg-red-mid"],
      },
    },
  }
);

export interface Props extends CustomTextProps, VariantProps<typeof style> {
  content: string;
}

export function Button({ intent, content, ...props }: Props): JSX.Element {
  return (
    <button className={style({ intent })}>
      <CustomText type="body-normal" content={content} {...props} />
    </button>
  );
}
