import { Group } from "@/types";

export const groups: Group[] = [
  {
    id: "01",
    name: "Otaku Nation",
    ownerId: "01",
    maxMembers: 4,
    description: "This is an awesome group",
    isVerified: true,
    refundProtected: true,
    monthlyPrice: 150,
    plan: "Crunchyroll Mega Fan",
    rating: 4.5,
    status: "active",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7RIE6MEypExL4hiKJGLxvPRi70gNY_ij_Q&s",
    coverImage:
      "https://png.pngtree.com/thumb_back/fh260/background/20250709/pngtree-beautiful-anime-princess-in-elegant-gown-fantasy-art-image_17586506.webp",
    renewalDate: "7/24/2026",
    createdAt: "12/9/2025",
    totalReviews: 48,
    rules: [
      "No Hentai",
      "Ensure total silence",
      "Do not enter anothor user's profile",
    ],
  },
  {
    id: "02",
    name: "Narobi Club",
    ownerId: "01",
    maxMembers: 4,
    description:
      "We are a chill community of anime lovers. Always renew on time. Join Us!",
    isVerified: false,
    refundProtected: true,
    monthlyPrice: 150,
    plan: "Crunchyroll Mega Fan",
    rating: 4.5,
    status: "active",
    profileImage:
      "https://images.stockcake.com/public/3/b/6/3b69aea5-3e27-4867-8d74-3446f8bc568b_large/gentle-anime-smile-stockcake.jpg",
    coverImage: "https://4kwallpapers.com/images/walls/thumbs/23027.jpg",
    renewalDate: "7/14/2026",
    createdAt: "12/9/2025",
    totalReviews: 12,
  },
  {
    id: "03",
    name: "Nippon Kenya",
    ownerId: "02",
    maxMembers: 4,
    description: "This is an awesome group",
    isVerified: true,
    refundProtected: false,
    monthlyPrice: 150,
    plan: "Crunchyroll Mega Fan",
    rating: 4.8,
    status: "active",
    profileImage:
      "https://a.storyblok.com/f/178900/1920x1080/cfccdef6c1/the-apothecary-diaries-still.jpg/m/1200x0/filters:quality(95)format(webp)",
    coverImage:
      "https://www.shutterstock.com/image-illustration/anime-eyes-closeup-boy-260nw-2490556117.jpg",
    renewalDate: "7/4/2026",
    createdAt: "12/9/2025",
    totalReviews: 19,
  },
  {
    id: "04",
    name: "Shadow Garden",
    ownerId: "03",
    maxMembers: 4,
    description: "This is an awesome group",
    isVerified: true,
    refundProtected: false,
    monthlyPrice: 150,
    plan: "Crunchyroll Mega Fan",
    rating: 4.0,
    status: "active",
    profileImage:
      "https://preview.redd.it/whats-your-favorite-female-anime-character-and-why-v0-46rpcm8aeu7e1.jpeg?width=640&crop=smart&auto=webp&s=6a26289605490701399a7d2c0b5548c1e38845aa",
    coverImage:
      "https://png.pngtree.com/png-vector/20231227/ourmid/pngtree-kawai-anime-girl-vector-png-image_11382225.png",
    renewalDate: "6/9/2026",
    createdAt: "12/9/2025",
    totalReviews: 4,
  },
];
