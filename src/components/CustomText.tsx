import { cva, VariantProps } from "class-variance-authority";

const style = cva(["text-black", "dark:text-white"], {
  variants: {
    type: {
      heading1: ["font-semibold", "text-4xl", "leading-10"],
      heading2: ["font-medium", "text-3xl", "leading-9"],
      heading3: ["font-medium", "text-2xl", "leading-8"],
      large: ["opacity-100"],
      body: ["opacity-80"],
    },
  },
});

export interface Props extends VariantProps<typeof style> {
  content: string;
}

export default function CustomText({ type, content, ...Props }: Props): JSX.Element {
  return <p className={style({ type })} {...Props}>{content}</p>;
}
