export function getTimeIn(
  format:
    | "seconds"
    | "minutes"
    | "hours"
    | "days"
    | "weeks"
    | "months"
    | "years",
  time: number,
) {
  // conversions from milliseconds
  const sec = 1000;
  const min = 60 * sec;
  const hour = 60 * min;
  const day = 24 * hour;
  const week = day * 7;
  const month = day * 30;
  const year = day * 366;

  switch (format) {
    case "seconds":
      return time / sec;
    case "minutes":
      return time / min;
    case "hours":
      return time / hour;
    case "days":
      return time / day;
    case "weeks":
      return time / week;
    case "months":
      return time / month;
    case "years":
      return time / year;
  }
}
