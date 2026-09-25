export default function AuthForm({
  title,
  children,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <form className="bg-[color-mix(var(--background),transparent_10%)] p-6 rounded-lg border border-border w-full flex flex-col gap-4">
      <h1 className="text-xl pb-4 font-extrabold">{title}</h1>

      {children}
    </form>
  );
}
