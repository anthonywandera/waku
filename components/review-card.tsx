import Avatar from "./avatar";
import { calculateDaysLeft, getStars } from "@/util";

export default function ReviewCard({
  message,
  rating,
  username,
  createdAt,
  avatar = "noimage",
}: {
  message: string;
  rating: number;
  username: string;
  createdAt: string;
  avatar?: string;
}) {
  return (
    <article className="p-4 bg-elevated shadow rounded-xl flex gap-4 text-sm">
      <Avatar src={avatar} alt={username} className="w-14 h-14" />
      <div className="w-full">
        <div className="flex items-center gap-6 border-b border-border w-full py-2 mb-2">
          <h1 className="font-semibold">@{username}</h1>
          <div className="flex gap-0.5 text-yellow-500 text-xs">
            {getStars(rating)}
          </div>
          <span className="text-xs text-muted">
            {Math.abs(calculateDaysLeft(createdAt))} days ago
          </span>
        </div>
        <p className="text-xs text-mute">{message}</p>
      </div>
    </article>
  );
}
