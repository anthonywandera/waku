import Header from "@/components/header";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NextTopLoader />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
