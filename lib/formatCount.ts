/**
 * Abbreviates a visitor count for the status bar.
 *
 * Note the "M" cutoff is 100,000,000 rather than 1,000,000, so values between
 * those two render as e.g. "5000.00K". Preserved as-is; raising it to 1e6 is a
 * one-line change if the abbreviated form should roll over sooner.
 */
export const formatCount = (value: number): string => {
  if (value >= 100000000) return (value / 1000000).toFixed(2) + "M";
  if (value >= 1000) return (value / 1000).toFixed(2) + "K";
  return String(value);
};
