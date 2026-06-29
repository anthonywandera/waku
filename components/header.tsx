import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        backgroundImage:
          "linear-gradient(170deg,color-mix(in srgb, var(--primary),#000000ee 90%) 50%, transparent)",
      }}
      className="py-6 px-12 sticky top-0 backdrop-blur-xl z-50"
    >
      <nav className="flex justify-between gap-12 items-center text-sm">
        <div>
          <Link href={"/"} className="font-extrabold text-2xl">
            WAKU
          </Link>
        </div>
        <div className="flex gap-12">
          <Link href={"/"}>Home</Link>
          <Link href={"/groups"}>Browse Groups</Link>
          <Link href={"#"}>How it Works</Link>
          <Link href={"#"}>Trust & Safety</Link>
          <Link href={"#"}>FAQ</Link>
        </div>
        <div className="flex gap-3 font-semibold *:rounded-lg *:py-2 *:px-3">
          <Link href={"#"} className="border border-border">
            Log in
          </Link>
          <Link href={"#"} className="hero-cta-gradient">
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}
