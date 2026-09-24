import Input from "@/components/input";
import bg_image from "@/public/hero.png";
import { Metadata } from "next";
import Link from "next/link";
import { MdOutlineVerifiedUser } from "react-icons/md";

const features: { name: string; description: string }[] = [
  {
    name: "Secure payments",
    description: "Your money is safe with escrow protection",
  },
  { name: "Verified owners", description: "Only trusted owners on Waku" },
  {
    name: "Refund protection",
    description: "We've got your back if renewal fails",
  },
];

export const metadata: Metadata = {
  title: "Waku · login",
};

export default function LoginPage() {
  return (
    <>
      <main
        style={{
          backgroundImage: `linear-gradient(90deg,color-mix(var(--background),transparent 3%) 20%,transparent), url("${bg_image.src}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="p-12 grid grid-cols-2 gap-24"
      >
        <article>
          <h1 className="text-3xl font-bold mb-3">Welcome back!</h1>
          <p className="text-muted mb-8">
            Sign in to continue your anime journey
          </p>

          <div className="flex flex-col gap-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex items-center gap-2">
                <div className="p-2 bg-[color-mix(var(--success),transparent_80%)] rounded-full flex items-center justify-center">
                  <MdOutlineVerifiedUser className="text-2xl text-success" />
                </div>
                <div>
                  <h3>{feature.name}</h3>
                  <p className="text-muted">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <form className="m-auto bg-[color-mix(var(--background),transparent_10%)] p-6 rounded-lg border border-border w-full flex flex-col gap-4">
          <h1 className="text-xl pb-4 font-semibold">Login</h1>
          <Input
            name="username"
            type="text"
            label="Email or Username"
            placeholder="Enter your email or username"
            required
          />
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            required
          />
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="accent-secondary rounded-lg"
            />
            <label htmlFor="remember" className="text-sm text-muted">
              Remember me
            </label>
          </div>

          <button className="px-6 py-2 bg-primary w-full rounded-lg font-bold text-lg">
            Log In
          </button>

          <p className="text-sm text-muted text-center">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Register
            </Link>
          </p>
        </form>
      </main>
    </>
  );
}
