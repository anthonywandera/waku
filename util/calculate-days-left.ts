import { getTimeIn } from "./get-time";

export function calculateDaysLeft(date: string) {
  const renewalDate = new Date(date);
  const today = new Date();
  const difference = renewalDate.getTime() - today.getTime();
  const timeInDays = getTimeIn("days", difference);
  return Math.ceil(timeInDays);
}
