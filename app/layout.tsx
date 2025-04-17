import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/header";
import Search from "@/components/search/search";

export const metadata: Metadata = {
  title: "Waku",
  description: "Anime Fans Community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Search />
        <Header />
        {children}
      </body>
    </html>
  );
}
