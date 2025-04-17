"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-2 py-1 bg-[var(--theme-background-shade)] ">
      <span>WAKU</span>
      <nav className="flex gap-5">
        <Link href="/home">Home</Link>
        <Link href="/discussions">Discussions</Link>
        <Link href="/channels">Channels</Link>
        <Link href="/chats">Chats</Link>
        <Link href="/account">Account</Link>
      </nav>
    </header>
  );
}
