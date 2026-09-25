import Link from "next/link";

export default function AuthArticle({
  title,
  description,
  children,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <article>
      <Link href="/" className="text-muted underline text-sm mb-4 block">
        Back to home
      </Link>
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      <p className="text-muted mb-8">{description}</p>

      {children}
    </article>
  );
}
