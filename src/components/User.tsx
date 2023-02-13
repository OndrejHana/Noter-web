import { useSession, signOut } from "next-auth/react";
import { CustomText } from "./CustomText";
import Image from "next/image";
import { Button } from "./Button";


export default function User() {
  const { data: session, status } = useSession()

  if (status === "authenticated") {
    return (
      <div className="bg-gray-dark rounded-lg p-2 mt-4 w-48">
        <CustomText content={session.user?.name}/>
        <div className="flex justify-end">
          <Button intent={"danger"} content="Sign out!" onClick={()=>signOut()}/>
        </div>
      </div>
    );
  }

  return <a href="/api/auth/signin">Sign in</a>

}