import Image from "next/image";

import add_link from "@/p/icons/add_link.svg";
import add_task from "@/p/icons/add_task.svg";
import arrow_right from "@/p/icons/arrow_right.svg";
import code_blocks from "@/p/icons/code_blocks.svg";
import code from "@/p/icons/code.svg";
import expand_more from "@/p/icons/expand_more.svg";
import file_present from "@/p/icons/file_present.svg";
import format_bold from "@/p/icons/format_bold.svg";
import format_italic from "@/p/icons/format_italic.svg";
import format_list_bulleted from "@/p/icons/format_list_bulleted.svg";
import format_list_numbered from "@/p/icons/format_list_numbered.svg";
import math from "@/p/icons/math.svg";
import note_add from "@/p/icons/note_add.svg";
import separator from "@/p/icons/separator.svg";
import share from "@/p/icons/share.svg";

type IconName = "add_link" | "add_task" | "arrow_right" | "code_blocks" | "code" | "expand_more" | "file_present" | "format_bold" | "format_italic" | "format_list_bulleted" | "format_list_numbered" | "math" | "note_add" | "separator" | "share";

const icons = {
  add_link,
  add_task,
  arrow_right,
  code_blocks,
  code,
  expand_more,
  file_present,
  format_bold,
  format_italic,
  format_list_bulleted,
  format_list_numbered,
  math,
  note_add,
  separator,
  share,
};

interface Props {
  icon: IconName;
}


export default function Icon({ icon }: Props): JSX.Element {
  return <Image src={icons[icon]} alt={add_link} width={20} height={20} className="m-2 fill-white"/>;
}
