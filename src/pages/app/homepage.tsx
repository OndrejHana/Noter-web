import Editor from "@/components/editor/Editor";
import { GetServerSidePropsContext } from "next";
import customGetServerSession from "@/lib/session";
import { Session } from "next-auth";
import User from "@/components/User";

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await customGetServerSession(ctx);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  };

  return { 
    props: { session },
  };
}

export default function Homepage({ session }: { session: Session }) {
  return (
    <div className="dark:bg-gray-darker h-screen p-6">
      <Editor />
      <User/>
    </div>
  );
}
