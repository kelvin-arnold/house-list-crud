import React from 'react';
import styles from './_card.module.css';
import { House } from '../../types';
import { toPriceFormat } from '../../../../utils';
import { Button } from '../../../../components';

const ComponentHouseCard: React.FC<{
  data: House;
  onSelectHouse?: () => void | null;
}> = ({
  data: { Title, Location, Bathrooms, Bedrooms, SalePrice, ThumbnailURL },
  onSelectHouse,
}) => {
  return (
    <div className={styles['card-wrapper']}>
      <div
        id='house-card-thumbnail'
        className={styles['card-thumbnail']}
        style={{
          backgroundImage: `url(${ThumbnailURL})`,
        }}
      />
      <div id='house-card-content' className={styles['card-content']}>
        <div id='house-card-body' className={styles['card-content-body']}>
          <div
            id='house-card-body-description'
            className={styles['card-content-body-description']}
          >
            <div
              id='house-card-body-description-title'
              className={styles['card-content-body-description-title']}
            >
              {Title}
            </div>
            <div
              id='house-card-body-description-location'
              className={styles['card-content-body-description-location']}
            >
              {Location}
            </div>
            <div
              id='house-card-body-description-place'
              className={styles['card-content-body-description-place']}
            >{`${Bedrooms} beds | ${Bathrooms} baths`}</div>
          </div>
          <div
            id='house-card-body-description-price'
            className={styles['card-content-body-description-price']}
          >
            {toPriceFormat(SalePrice)}
          </div>
        </div>
        {onSelectHouse && (
          <div id='house-card-footer' className={styles['card-content-footer']}>
            <Button label='View Details' onClick={onSelectHouse} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentHouseCard;
