import Input from "@/components/input";

export default function LoginPage() {
  return (
    <>
      <form className="m-auto my-12">
        <h1 className="text-xl mb-4 font-semibold">Log in</h1>
        <Input name="username" type="text" label="Username" required />
        <Input name="password" type="password" label="Password" required />
        <button className="px-6 py-2 bg-primary w-full rounded-lg">
          Log In
        </button>
      </form>
    </>
  );
}
