import SignUpForm from "@/components/sign-up-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create account - Waku",
  description: "Create a new account",
};

export default function SignUpPage() {
  return (
    <>
      <SignUpForm />
    </>
  );
}
