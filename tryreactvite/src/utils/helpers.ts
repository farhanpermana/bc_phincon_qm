/**
 * Formats a number as Indonesian Rupiah (IDR)
 * @param amount - The amount to format (in Rupiah)
 * @returns Formatted currency string (e.g. "Rp1.000.000")
 */
export const formatIDR = (amount: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };