import React from 'react';
import styles from './_filter.module.css';
import { Button, Range, Dropdown } from '../../../../components';
import { PriceRange, HeaderFilterProps, FilterOptions } from '../../types';
import {
  getBathrooms,
  getBedrooms,
  getParking,
  getPriceRange,
  getFilterOptions,
} from '../../utils';

const ComponentHouseFilter: React.FC<HeaderFilterProps> = ({
  data,
  onFilter,
}) => {
  const filterInitialValue: FilterOptions = {
    beds: 1,
    baths: 1,
    parking: 1,
    minPrice: 0,
  };
  const [filterOptions, setFilterOptions] =
    React.useState<FilterOptions>(filterInitialValue);

  const submitFilter = () => onFilter(filterOptions);

  const bedrooms = getFilterOptions(getBedrooms(data));
  const bathrooms = getFilterOptions(getBathrooms(data));
  const parking = getFilterOptions(getParking(data));
  const priceRange = getPriceRange(data);

  return (
    <div className={styles['filter-wrapper']}>
      <div id='house-filter-options' className={styles['filter-options']}>
        <div id='house-filter-bedrooms'>
          <Dropdown
            label='Bedrooms'
            options={bedrooms}
            onOptionSelect={value => {
              setFilterOptions(prevState => ({
                ...prevState,
                beds: parseInt(value.value),
              }));
            }}
            id='dropdown-bedrooms'
          />
        </div>
        <div id='house-filter-bathrooms'>
          <Dropdown
            label='Bathrooms'
            options={bathrooms}
            onOptionSelect={value => {
              setFilterOptions(prevState => ({
                ...prevState,
                baths: parseInt(value.value),
              }));
            }}
            id='dropdown-bathrooms'
          />
        </div>
        <div id='house-filter-parking'>
          <Dropdown
            label='Parking'
            options={parking}
            onOptionSelect={value => {
              setFilterOptions(prevState => ({
                ...prevState,
                parking: parseInt(value.value),
              }));
            }}
            id='dropdown-parking'
          />
        </div>
        <div id='house-filter-range'>
          <Range
            label='Price range'
            min={priceRange.low}
            max={priceRange.higth}
            onChangeValue={value => {
              setFilterOptions(prevState => ({
                ...prevState,
                minPrice: value,
              }));
            }}
          />
        </div>
      </div>
      <div id='house-filter-action'>
        <Button label='Search' icon='search' onClick={submitFilter} />
      </div>
    </div>
  );
};

export default ComponentHouseFilter;
