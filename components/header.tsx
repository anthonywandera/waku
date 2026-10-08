"use client";

import Link from "next/link";
import { userLoggedInCtx } from "./user-logged-in";
import { useContext } from "react";
import Avatar from "./avatar";

export default function Header() {
  const logInUserCtx = useContext(userLoggedInCtx);

  return (
    <header
      style={{
        backgroundImage:
          "linear-gradient(170deg,color-mix(in srgb, var(--primary),#000000ee 90%) 50%, transparent)",
      }}
      className="py-6 px-12 sticky top-0 backdrop-blur-xl z-50 max-sm:px-6 max-sm:py-4"
    >
      <nav className="flex justify-between gap-12 items-center text-sm">
        <div>
          <Link href={"/"} className="font-extrabold text-2xl">
            WAKU
          </Link>
        </div>
        <div className="flex gap-12 max-md:hidden">
          <Link href={"/"}>Home</Link>
          <Link href={"/groups"}>Browse Groups</Link>
          <Link href={"#"}>How it Works</Link>
          <Link href={"#"}>Trust & Safety</Link>
          <Link href={"#"}>FAQ</Link>
        </div>

        {logInUserCtx.user ? (
          <Avatar
            src={logInUserCtx.user.avatar || "/no-image.jpeg"}
            alt={logInUserCtx.user.username}
            size={40}
          />
        ) : (
          <div className="flex gap-3 font-semibold *:rounded-lg *:py-2 *:px-3">
            <Link href={"/login"} className="border border-border">
              Log in
            </Link>
            <Link href={"/signup"} className="hero-cta-gradient">
              Sign up
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
