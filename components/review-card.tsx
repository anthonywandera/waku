import { Review } from "@/types";
import Avatar from "./avatar";
import { users } from "@/data";
import { calculateDaysLeft, getStars } from "@/util";

export default function ReviewCard({ review }: { review: Review }) {
  const user = users.find((u) => u.id === review.memberId)!;
  return (
    <article className="p-4 bg-elevated shadow rounded-xl flex gap-4 text-sm">
      <Avatar src={user.avatar} alt={user.username} className="w-14 h-14" />
      <div className="w-full">
        <div className="flex items-center gap-6 border-b border-border w-full py-2 mb-2">
          <h1 className="font-semibold">@{user.username}</h1>
          <div className="flex gap-0.5 text-yellow-500 text-xs">
            {getStars(review.stars)}
          </div>
        </div>
        <p className="text-xs text-muted mb-2">
          {Math.abs(calculateDaysLeft(review.createdAt))} days ago
        </p>
        <p className="text-xs text-mute">{review.review}</p>
      </div>
    </article>
  );
}
