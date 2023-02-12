import Editor from "@/components/editor/Editor";
import { GetServerSidePropsContext } from "next";
import { Button } from "@/components/Button";

export function getServerSideProps(ctx: GetServerSidePropsContext) {
  return {
    props: {}
  }
}

export default function Homepage() {
  return (
    <div className="dark:bg-gray-darker h-screen p-6">
      <Editor />
    </div>
  );
}
