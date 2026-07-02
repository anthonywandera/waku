import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord, FaInstagram, FaTiktok } from "react-icons/fa6";
import { IoSendOutline } from "react-icons/io5";

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

const socialLinks: { platform: string; url: string; icon: React.ReactNode }[] =
  [
    { platform: "Instagram", url: "#", icon: <FaInstagram /> },
    { platform: "Discord", url: "#", icon: <FaDiscord /> },
    { platform: "Telegram", url: "#", icon: <FaTelegramPlane /> },
    { platform: "TikTok", url: "#", icon: <FaTiktok /> },
  ];

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(to top,var(--background),transparent 40%), linear-gradient(to right,transparent ,var(--elevated) 10% 90%,transparent)",
      }}
      className="px-12 pb-8 max-sm:px-6"
    >
      <div className="flex gap-12 border-b border-border py-12 mb-4 max-md:flex-col">
        <article>
          <h1 className="font-bold text-2xl mb-4">WAKU</h1>
          <p className="text-sm text-muted mb-8">
            Waku helps anime fans watch more by sharing crunchyroll plans safely
            and effortlessly.
          </p>
          <nav className="flex gap-8 text-2xl">
            {socialLinks.map((link) => (
              <Link key={link.platform} href={link.url}>
                {link.icon}
              </Link>
            ))}
          </nav>
        </article>
        <div className="grid grid-cols-3 gap-12 w-full max-sm:grid-cols-1">
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
          <p className="text-sm text-muted mb-4">
            Get updates on new features and tips for anime fans.
          </p>
          <form className="border border-border rounded-lg flex">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="outline-none p-2 w-full"
            />
            <button type="submit" className="bg-primary py-2 px-4 rounded-lg">
              <IoSendOutline />
            </button>
          </form>
        </article>
      </div>
      <div className="text-sm flex justify-between">
        <p className="text-muted">
          &copy; {new Date().getFullYear()} Waku. All rights reserved.
        </p>
        <p>Made with ❤️ for anime fans</p>
      </div>
    </footer>
  );
}
