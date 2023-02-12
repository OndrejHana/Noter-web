import Image from "next/image";
import bold from "@/p/icons/format_bold.svg";
import Icon from "../../Icon";

const nodeTypesToNames = {
  paragraph: 'Normal',
  h1: "Heading 1",
  h2: 'Heading 2',
  h3: 'Heading 3',
};

export default function ToolbarPlugin() {
  return (
    <div className="flex m-0 p-0 h-9 border-b-2 border-gray-mid">
    </div>
  );
}