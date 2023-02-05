import customGetServerSession from "@/lib/session";
import { GetServerSidePropsContext } from "next"

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await customGetServerSession(ctx);

  if (!session) {
    console.log("no session");

    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  };

  return {
    redirect: {
      destination: "/app/homepage",
      permanent: false,
    },
  };
}

export default function App() { }
