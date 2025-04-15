import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
