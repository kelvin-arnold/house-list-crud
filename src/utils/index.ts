export const toPriceFormat = (num: number): string => {
  if (isNaN(num)) {
    return 'Invalid number';
  }

  const price = num.toFixed(2);
  const formattedPrice = '$' + price.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedPrice;
};
