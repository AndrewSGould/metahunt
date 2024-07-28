export function formatNumber(
  number: number | undefined,
  minimumFractionDigits = 0,
  maximumFractionDigits = 1
) {
  if (!number) return 0;

  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(number);
}
