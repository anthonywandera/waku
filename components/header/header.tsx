"use client";

import Link from "next/link";
import { useState } from "react";

// Import icons
import { IoMdSearch } from "react-icons/io";

function Search() {
  const [visible, toggleVisibility] = useState(false);

  return (
    <form className={`px-1 rounded flex items-center gap-1.5 border`}>
      <input
        name="query"
        placeholder="search"
        type="text"
        className="focus:outline-none"
        hidden={visible}
        required
      />

      <button
        type="button"
        onClick={() => {
          toggleVisibility((prevState) => !prevState);
        }}
        className="cursor-pointer"
      >
        <IoMdSearch />
      </button>
    </form>
  );
}

export default function Header() {
  return (
    <header className="flex items-center justify-between px-2 py-1 bg-[var(--theme-background-shade)] ">
      <span>WAKU</span>
      <nav className="flex gap-5">
        <Search />
        <Link href="#">Home</Link>
        <Link href="#">News</Link>
        <Link href="#">Discussions</Link>
        <Link href="#">Channels</Link>
        <Link href="#">Chats</Link>
        <Link href="#">Account</Link>
      </nav>
    </header>
  );
}
