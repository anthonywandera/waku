import AuthArticle from "@/components/auth-article";
import AuthForm from "@/components/auth-form";
import Input from "@/components/input";
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
      <AuthArticle
        title="Welcome back!"
        description="Sign in to continue your anime journey"
      >
        <div className="flex flex-col gap-4">
          {features.map((feature) => (
            <div key={feature.name} className="flex items-center gap-4">
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
      </AuthArticle>

      <AuthForm title="Login">
        <Input
          name="username"
          type="text"
          label="Email or Username"
          placeholder="Enter your email or username"
          required
        />
        <div>
          <Input
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            required
          />
          <p className="text-sm text-right mt-2">
            <Link
              href="/forgot-password"
              className="text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </p>
        </div>

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
          <Link href="/signup" className="text-primary hover:underline">
            Register
          </Link>
        </p>
      </AuthForm>
    </>
  );
}
