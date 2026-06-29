export function calculateDaysLeft(date: string) {
  const renewalDate = new Date(date);
  const today = new Date();
  const difference = renewalDate.getTime() - today.getTime();

  const timeInDays = difference / (1000 * 60 * 60 * 24);
  return Math.ceil(timeInDays);
}
