import Link from "next/link";
import bg_image from "../public/hero.png";
import { FaRegPlayCircle } from "react-icons/fa";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { formatNumber } from "@/util";
import { FaArrowRight } from "react-icons/fa6";

const platformFeatures: {
  icon: React.ReactNode;
  accent: string;
  title: string;
  description: string;
}[] = [
  {
    icon: <MdOutlineVerifiedUser />,
    accent: "var(--info)",
    title: "Refund Protected",
    description: "You're covered",
  },
  {
    icon: <MdOutlineVerifiedUser />,
    accent: "var(--success)",
    title: "Verified Owners",
    description: "Trusted & refined",
  },
  {
    icon: <MdOutlineVerifiedUser />,
    accent: "var(--accent)",
    title: "Secure Payments",
    description: "Via MPESA",
  },
  {
    icon: <BiSupport />,
    accent: "var(--primary)",
    title: "24/7 Support",
    description: "We've got you",
  },
];

const platformStats = {
  activeMembers: formatNumber(128),
  activeGroups: 9,
  successfulRenewals: formatNumber(0.97, { style: "percent" }),
  averageOwnerRating: 4.8,
};

function Stat({ title, value }: { title: string; value: number | string }) {
  return (
    <article className="text-center not-last:border-r border-border">
      <h1 className="text-4xl font-semibold mb-2 text-primary">{value}</h1>
      <h2 className="text-xs text-muted">{title}</h2>
    </article>
  );
}

export default function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: `linear-gradient(90deg,color-mix(in srgb, var(--primary),#000000f6 90%) 30%,transparent), linear-gradient(to top,color-mix(in srgb, var(--primary),#000000f6 90%) 20%,transparent 30%), url('${bg_image.src}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="p-12 pt-36 -mt-12"
    >
      <article className="flex flex-col gap-6 mb-12">
        <div className="text-5xl font-extrabold flex flex-col gap-2">
          <p>WATCH MORE.</p>
          <p>PAY LESS.</p>
          <p className="text-accent">TOGETHER.</p>
        </div>
        <div className="text-muted">
          <p>Premium Crunchyroll groups.</p>
          <p>Trusted by anime fans.</p>
        </div>
        <div className="flex gap-3 font-semibold *:rounded-lg *:py-3 *:px-6">
          <Link
            href={"#"}
            className="hero-cta-gradient flex items-center gap-4"
          >
            Explore Crunchyroll Groups
            <FaArrowRight />
          </Link>
          <Link href={"#"} className="flex gap-2 items-center">
            <FaRegPlayCircle className="text-2xl" />
            How it works
          </Link>
        </div>
      </article>
      <div className="flex flex-col gap-6 *:border *:border-border *:backdrop-blur *:p-4 *:rounded-xl *:bg-[color-mix(in_srgb,var(--elevated),#0000_90%)]">
        <div className="grid grid-cols-4 gap-6">
          {platformFeatures.map((feature) => (
            <article key={feature.title} className="flex items-center gap-3">
              <div
                style={{
                  color: feature.accent,
                  backgroundColor: `color-mix(in srgb, var(--elevated), ${feature.accent} 10%)`,
                }}
                className="bg-elevated p-2 rounded-xl text-2xl flex items-center justify-center"
              >
                {feature.icon}
              </div>
              <div>
                <h1 className="font-bold mb-1">{feature.title}</h1>
                <p className="text-xs text-muted">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-6">
          <Stat value={platformStats.activeMembers} title="Active Members" />
          <Stat value={platformStats.activeGroups} title="Active Groups" />
          <Stat
            value={platformStats.successfulRenewals}
            title="Successful Renewals"
          />
          <Stat
            value={platformStats.averageOwnerRating}
            title="Average Owner Rating"
          />
        </div>
      </div>
    </section>
  );
}
