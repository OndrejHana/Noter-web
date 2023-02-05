import { Button } from "@/components/Button";
import { CustomText } from "@/components/CustomText";

export default function login() {
  return (
    <div className="bg-gray-darker h-screen flex justify-center items-center">
      <div className="bg-gray-dark shadow-md rounded-lg p-5">
        <CustomText type="heading1" content="Login" />
        <form action="/api/user/login" method="POST">
          <div className="p-0 mt-4">
            <CustomText content="Username" type="body-normal" />
            <input
              type="text"
              className="rounded w-full p-1 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="p-0 mt-4">
            <CustomText content="Password" type="body-normal" />
            <input
              type="password"
              className="rounded w-full p-1 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="float-right mt-4">
            <Button content="Submit!" intent={"primary"} />
          </div>
        </form>
      </div>
    </div>
  );
}
