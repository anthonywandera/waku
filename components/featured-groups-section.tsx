import { Group } from "@/types";
import { formatCurrency } from "@/util";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaStar } from "react-icons/fa6";

const groups: Group[] = [
  {
    id: "01",
    name: "Otaku Nation",
    ownerId: "01",
    maxMembers: 4,
    description: "This is an awesome group",
    isVerified: true,
    refundProtected: true,
    monthlyPrice: 150,
    plan: "Mega Fan",
    rating: 4.5,
    status: "active",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7RIE6MEypExL4hiKJGLxvPRi70gNY_ij_Q&s",
    coverImage:
      "https://png.pngtree.com/thumb_back/fh260/background/20250709/pngtree-beautiful-anime-princess-in-elegant-gown-fantasy-art-image_17586506.webp",
    renewalDate: "7/4/2026",
    createdAt: "12/9/2025",
  },
  {
    id: "02",
    name: "Narobi Club",
    ownerId: "01",
    maxMembers: 4,
    description: "This is an awesome group",
    isVerified: true,
    refundProtected: true,
    monthlyPrice: 150,
    plan: "Mega Fan",
    rating: 4.5,
    status: "active",
    profileImage: "https://stockcake.com/i/gentle-anime-smile_2091227_1357255",
    coverImage: "https://4kwallpapers.com/images/walls/thumbs/23027.jpg",
    renewalDate: "7/4/2026",
    createdAt: "12/9/2025",
  },
  {
    id: "03",
    name: "Nippon Kenya",
    ownerId: "01",
    maxMembers: 4,
    description: "This is an awesome group",
    isVerified: true,
    refundProtected: true,
    monthlyPrice: 150,
    plan: "Mega Fan",
    rating: 4.8,
    status: "active",
    profileImage:
      "https://a.storyblok.com/f/178900/1920x1080/cfccdef6c1/the-apothecary-diaries-still.jpg/m/1200x0/filters:quality(95)format(webp)",
    coverImage:
      "https://www.shutterstock.com/image-illustration/anime-eyes-closeup-boy-260nw-2490556117.jpg",
    renewalDate: "7/4/2026",
    createdAt: "12/9/2025",
  },
  {
    id: "04",
    name: "Shadow Garden",
    ownerId: "01",
    maxMembers: 4,
    description: "This is an awesome group",
    isVerified: true,
    refundProtected: true,
    monthlyPrice: 150,
    plan: "Mega Fan",
    rating: 4.0,
    status: "active",
    profileImage:
      "https://preview.redd.it/whats-your-favorite-female-anime-character-and-why-v0-46rpcm8aeu7e1.jpeg?width=640&crop=smart&auto=webp&s=6a26289605490701399a7d2c0b5548c1e38845aa",
    coverImage:
      "https://png.pngtree.com/png-vector/20231227/ourmid/pngtree-kawai-anime-girl-vector-png-image_11382225.png",
    renewalDate: "7/4/2026",
    createdAt: "12/9/2025",
  },
];

export default function FeaturedGroupsSection() {
  return (
    <section className="m-12">
      <div className="flex justify-between mb-4">
        <h1 className="font-bold text-2xl">Featured Groups</h1>
        <Link href={"#"} className="flex items-center gap-2 text-primary">
          View all <FaArrowRight />
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {groups.slice(0, 4).map((group) => (
          <article
            key={group.id}
            className="bg-elevated border border-border rounded-xl overflow-hidden"
          >
            <Image
              src={group.coverImage}
              alt={group.name}
              width={200}
              height={100}
              className="w-full h-40 object-center object-cover"
            />
            <div className="p-2 flex flex-col gap-4">
              <h1 className="font-bold">{group.name}</h1>
              <p className="bg-secondary w-fit font-semibold px-2 rounded">
                {group.plan}
              </p>
              <p className="flex gap-2 items-center border-b border-border">
                <span className="flex gap-1 items-center text-yellow-500 font-semibold">
                  <FaStar />
                  {group.rating.toFixed(1)}
                </span>
                <span className="text-xs text-muted">(26)</span>
              </p>
              <p className="text-sm text-muted">Renews in 9 days</p>
              <p className="text-lg font-semibold">
                {formatCurrency(group.monthlyPrice)}
                <span className="text-sm font-medium">/month</span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
