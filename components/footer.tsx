import Link from "next/link";

const sitemap: { title: string; links: { title: string; url: string }[] }[] = [
  {
    title: "Platform",
    links: [
      { title: "Browse Groups", url: "#" },
      { title: "How it Works", url: "#" },
      { title: "Trust & Safety", url: "#" },
      { title: "Pricing", url: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { title: "Help Center", url: "#" },
      { title: "Contact Us", url: "#" },
      { title: "Report an Issue", url: "#" },
      { title: "Refund Policy", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Terms of Service", url: "#" },
      { title: "Privacy Policy", url: "#" },
      { title: "Cookie Policy", url: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(to top,var(--background),transparent 40%), linear-gradient(to right,transparent ,var(--elevated) 10% 90%,transparent)",
      }}
      className="px-12 pb-8"
    >
      <div className="flex gap-12 border-b border-border py-12 mb-4">
        <article>
          <h1 className="font-bold text-2xl mb-4">WAKU</h1>
          <p className="text-sm text-muted">
            Waku helps anime fans watch more by sharing crunchyroll plans safely
            and effortlessly.
          </p>
        </article>
        <div className="grid grid-cols-3 gap-12 w-full">
          {sitemap.map((site) => (
            <article key={site.title}>
              <h1 className="font-bold text-lg mb-4">{site.title}</h1>
              <nav>
                <ul className="text-sm text-muted flex flex-col gap-2">
                  {site.links.map((link) => (
                    <li key={link.title}>
                      <Link href={link.url}>{link.title}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </article>
          ))}
        </div>
        <article>
          <h1 className="font-bold text-lg mb-4">
            Subscribe to our newsletter
          </h1>
          <p className="text-sm text-muted">
            Get updates on new features and tips for anime fans.
          </p>
        </article>
      </div>
      <div className="text-sm flex justify-between">
        <p className="text-muted">&copy; 2026 Waku. All rights reserved.</p>
        <p>Made with ❤️ for anime fans</p>
      </div>
    </footer>
  );
}
