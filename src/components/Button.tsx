import { cva, VariantProps } from "class-variance-authority";

const style = cva(["flex","items-center","justify-center", "px-4","py-1","m-2","rounded" ,"font-regular"], {
  variants: {
    type: {
      primary: ["bg-blue-mid", "text-white"],
      secondary: ["bg-gray-mid"," text-white"],
      danger: ["bg-red-mid","text-white"],
    }
  },
  defaultVariants: {
    type: "primary",
  }
})

export interface Props extends VariantProps<typeof style> {
  content: string
}

export default function Button({ type, content }: Props): JSX.Element {
  return (
    <button className={style({type})} >{content}</button>
  );
}
