import Link from "next/link";
import { CiWallet } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import {
  MdOutlineContactSupport,
  MdOutlineLogout,
  MdOutlinePayment,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const sidebarSections: {
  title: string;
  links: { icon: React.ReactNode; title: string; url: string }[];
}[] = [
  {
    title: "MAIN",
    links: [
      // { icon: <MdOutlineSpaceDashboard />, title: "Dashboard", url: "#" },
      { icon: <RxDashboard />, title: "My Groups", url: "#" },
      { icon: <MdOutlinePayment />, title: "Payments", url: "#" },
      { icon: <CiWallet />, title: "Wallet", url: "/wallet" },
      { icon: <IoMdNotificationsOutline />, title: "Notifications", url: "#" },
    ],
  },
  {
    title: "ACCOUNT",
    links: [
      // { icon: <FaRegUser />, title: "Profile", url: "#" },
      { icon: <IoSettingsOutline />, title: "Settings", url: "/settings" },
      { icon: <MdOutlineContactSupport />, title: "Support", url: "#" },
      { icon: <MdOutlineLogout />, title: "logout", url: "#" },
    ],
  },
];

export default function SideNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex">
        <aside className="border-r border-border p-6 h-screen w-70 overflow-y-scroll scrollbar-none">
          <h1 className="text-2xl font-extrabold mb-6">WAKU</h1>

          <div className="flex flex-col gap-8">
            {sidebarSections.map((sect) => (
              <section key={sect.title}>
                <h2 className="text-xs text-muted mb-2 px-4">{sect.title}</h2>
                <nav>
                  <ul className="flex flex-col text-sm">
                    {sect.links.map((link) => (
                      <li key={link.title}>
                        <Link
                          href={link.url}
                          className="py-3 px-4 rounded-xl hover:bg-elevated flex items-center gap-2"
                        >
                          <span className="text-lg">{link.icon}</span>
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </section>
            ))}
          </div>
        </aside>
        <main className="w-full h-screen overflow-y-scroll scrollbar-none">
          {children}
        </main>
      </div>
    </>
  );
}
