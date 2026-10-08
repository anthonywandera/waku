"use client";

import { Form, Input } from "@/components/form";
import { useContext, useState } from "react";
import { userLoggedInCtx } from "./user-logged-in";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const logUserCtx = useContext(userLoggedInCtx);

  return (
    <Form
      onSubmit={(formData) => {
        setIsPending(true);

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then<{
            message: string;
            user: { id: number; username: string; avatar: string };
          }>(async (res) => {
            if (!res.ok) {
              const data = await res.json();
              throw new Error(data.message);
            } else {
              setError("");
              return await res.json();
            }
          })
          .then((data) => {
            logUserCtx.logIn(data.user);
            router.replace("/groups");
          })
          .catch((err) => {
            setError(err.message);
          })
          .finally(() => {
            setIsPending(false);
          });
      }}
      className="mx-auto my-20 flex flex-col gap-4"
    >
      {error && (
        <p className="text-error p-4 bg-[color-mix(var(--error),transparent_80%)] rounded-xl">
          {error}
        </p>
      )}
      <Input
        name="user"
        label="Username"
        type="text"
        placeholder="Enter username or email"
        autoComplete="username"
        required
      />
      <Input
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        placeholder="Enter password"
        required
      />

      <button
        className="bg-primary py-2 px-8 rounded-lg w-full"
        disabled={isPending}
      >
        {isPending ? "Signing up" : "Login"}
      </button>
    </Form>
  );
}
