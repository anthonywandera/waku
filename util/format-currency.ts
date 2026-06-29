export function formatCurrency(
  value: number,
  options?: Intl.NumberFormatOptions,
) {
  const formatter = new Intl.NumberFormat(navigator.language, {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
    ...options,
  });
  return formatter.format(value);
}
