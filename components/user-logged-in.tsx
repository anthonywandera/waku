"use client";

import { createContext, useState } from "react";

interface User {
  id: number;
  username: string;
  avatar: string;
}

export const userLoggedInCtx = createContext<{
  user?: User;
  logIn: (user: User) => void;
  logOut: () => void;
}>({ logIn: () => {}, logOut: () => {} });

export function UserLoggedIn({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();

  function logIn(user: User) {
    setUser(user);
  }

  function logOut() {
    setUser(undefined);
  }

  return (
    <userLoggedInCtx.Provider value={{ user, logIn, logOut }}>
      {children}
    </userLoggedInCtx.Provider>
  );
}
