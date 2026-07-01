import { Metadata } from "next";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Waku - Page Not Found!",
  description: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="p-40 max-sm:p-20">
      <div className="w-fit m-auto flex flex-col gap-10 items-center">
        <div className="flex gap-6 items-center">
          <h1 className="text-5xl font-bold">404</h1> Page Not Found!
        </div>
        <nav className="flex items-center gap-6 max-sm:flex-col">
          <Link
            href={"/groups"}
            className="py-2 px-4 border border-border backdrop-blur-2xl rounded-lg bg-linear-to-r from-[color-mix(var(--secondary),transparent_70%)] to-transparent"
          >
            Browse Groups
          </Link>
          <Link href={"/"} className="flex gap-2 items-center ">
            <span>Back to home</span>
            <FaArrowRight />
          </Link>
        </nav>
      </div>
    </div>
  );
}
