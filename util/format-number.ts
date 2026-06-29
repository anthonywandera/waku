export function formatNumber(
  value: number,
  options?: Intl.NumberFormatOptions,
) {
  const formatter = new Intl.NumberFormat(navigator.language, { ...options });
  return formatter.format(value);
}
