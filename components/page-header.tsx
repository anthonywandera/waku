export default function PageHeader({
  title,
  image = "https://i.pinimg.com/1200x/d7/a2/01/d7a2015334f569c80ce234d7b81e6cd3.jpg",
}: {
  title: string;
  image?: string;
}) {
  return (
    <header
      style={{
        backgroundImage: `linear-gradient(to right,var(--background) 30%,color-mix(var(--background),transparent 20%) 80%, transparent), url("${image}")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="p-12"
    >
      <h1 className="text-xl font-extrabold">{title}</h1>
    </header>
  );
}
