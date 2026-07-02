export function formatDate(date: string, options?: Intl.DateTimeFormatOptions) {
  const formatter = new Intl.DateTimeFormat(navigator.language, {
    month: "short",
    day: "numeric",
    year: "numeric",
    ...options,
  });

  return formatter.format(new Date(date));
}
