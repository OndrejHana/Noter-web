import Editor from "@/components/editor/Editor";
import { GetServerSidePropsContext } from "next";

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  return { 
    props: {}
  }
}

export default function Homepage() {
  return (<Editor/>);
}
