import bg_image from "@/public/hero.png";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      style={{
        backgroundImage: `linear-gradient(90deg,color-mix(var(--background),transparent 3%) 20%,transparent), url("${bg_image.src}")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="p-12 grid grid-cols-2 items-center gap-24 min-h-svh w-svw max-md:flex max-md:flex-col max-md:items-start max-md:p-6 max-md:gap-12"
    >
      {children}
    </main>
  );
}
