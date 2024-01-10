export type House = {
  Id: number;
  DateListed: string;
  Title: string;
  Description: string;
  SalePrice: number;
  ThumbnailURL: string;
  PictureURL: string;
  Location: string;
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
};

export type DataFetchHouse = {
  data: House[];
};

export type PriceRange = {
  low: number;
  higth: number;
};

export type FilterOptions = {
  beds: number;
  baths: number;
  parking: number;
  minPrice: number;
};

export type HeaderFilterProps = {
  data: House[];
  onFilter: (options: FilterOptions) => void;
};
