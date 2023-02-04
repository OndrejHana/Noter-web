import Button from "@/components/Button";
import CustomText from "@/components/CustomText";
import Link from "next/link";

export default function User() {
  return (
    <div className="bg-gray-darker h-screen flex justify-center items-center">
      <div className="bg-gray-dark rounded-lg h-auto w-60 mb-20">
        <div className="text-center p-2 m-6">
          <CustomText content="Welcome" type="heading2"/>
        </div>
        <div className="flex justify-center p-4">
          <Link href="/user/login"><Button type="primary" content="Login" /></Link>
          <Link href="/user/login"><Button type="secondary" content="Register" /></Link>
        </div>
      </div>
    </div>
  );
}
