import AuthArticle from "@/components/auth-article";
import AuthForm from "@/components/auth-form";
import Input from "@/components/input";
import { Metadata } from "next";
import Link from "next/link";
import { MdOutlineVerifiedUser } from "react-icons/md";

const features: string[] = [
  "Join thousands of anime fans",
  "Safe, easy and reliable",
  "Start sharing and saving",
];

export const metadata: Metadata = {
  title: "Waku · Join",
};

export default function SignUpPage() {
  return (
    <>
      <AuthArticle
        title="Join Waku today!"
        description="Create your account and start watching more for less"
      >
        <div className="flex flex-col gap-4">
          {features.map((feature) => (
            <div key={feature} className="flex items-center gap-4">
              <div className="p-2 bg-[color-mix(var(--success),transparent_80%)] rounded-full flex items-center justify-center">
                <MdOutlineVerifiedUser className="text-2xl text-success" />
              </div>

              <p>{feature}</p>
            </div>
          ))}
        </div>
      </AuthArticle>

      <AuthForm title="Sign Up">
        <Input
          name="username"
          type="text"
          label="Username"
          placeholder="Choose a username"
          required
        />
        <Input
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          required
        />
        <Input
          name="phone"
          type="tel"
          label="Phone Number"
          placeholder="0712345678"
          required
        />
        <Input
          name="password"
          type="password"
          label="Password"
          placeholder="Create a password"
          required
        />
        <Input
          name="confirm_password"
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          required
        />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="accent-secondary rounded-lg"
          />
          <label htmlFor="terms" className="text-sm text-muted">
            I agree to the{" "}
            <Link href="#" className="text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-primary">
              Privacy Policy
            </Link>
          </label>
        </div>

        <button className="px-6 py-2 bg-primary w-full rounded-lg font-bold text-lg">
          Create Account
        </button>

        <p className="text-sm text-muted text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-primary hover:underline">
            Log In
          </Link>
        </p>
      </AuthForm>
    </>
  );
}
