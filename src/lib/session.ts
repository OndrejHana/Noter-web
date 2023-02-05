import { authOption } from "@/pages/api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";

export default async function customGetServerSession(ctx: { req: GetServerSidePropsContext["req"], res: GetServerSidePropsContext["res"] }) {
  return await getServerSession(ctx.req, ctx.res, authOption); 
}
