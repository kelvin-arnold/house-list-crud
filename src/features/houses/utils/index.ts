import { House, PriceRange } from '../types';

export const getBedrooms = (data: House[]) =>
  [...data].sort((a, b) => b.Bedrooms - a.Bedrooms).shift()?.Bedrooms ?? 1;
export const getBathrooms = (data: House[]) =>
  [...data].sort((a, b) => b.Bathrooms - a.Bathrooms).shift()?.Bathrooms ?? 1;
export const getParking = (data: House[]) =>
  [...data].sort((a, b) => b.Parking - a.Parking).shift()?.Parking ?? 1;
export const getPriceRange = (data: House[]): PriceRange => {
  const dataSorted = [...data].sort((a, b) => b.SalePrice - a.SalePrice);
  return {
    low: dataSorted.pop()?.SalePrice ?? 0,
    higth: dataSorted.shift()?.SalePrice ?? 0,
  };
};

export const getFilterOptions = (size: number) => [
  ...Array(size)
    .fill(null)
    .map((_, key) => ({
      label: `+${key + 1}`,
      value: `${key + 1}`,
    })),
];
