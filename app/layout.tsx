import { UserLoggedIn } from "@/components/user-logged-in";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextTopLoader showSpinner={false} />
        <UserLoggedIn>{children}</UserLoggedIn>
      </body>
    </html>
  );
}
