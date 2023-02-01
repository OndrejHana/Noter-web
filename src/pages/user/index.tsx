import Button from "@/components/Button";

export default function User() {
  return (
    <div className="bg-gray-darker h-screen flex justify-center items-center">
      <div className="bg-gray-dark rounded-lg h-auto w-60 mb-20">
        <h1 className="font-bold text-white text-center p-2 m-6">Welcome</h1>
        <div className="flex justify-center p-4">
          <Button type="primary" content="Login" />
          <Button type="secondary" content="Register" />
        </div>
      </div>
    </div>
  );
}
