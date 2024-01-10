import * as React from 'react';
import { Button } from '../../../../components';
import { ContextHouse } from '../../context';
import { useNavigate } from 'react-router-dom';
import { toPriceFormat } from '../../../../utils';
import { DetailFooter, Contact } from '../../components';

const LayoutHouseDetail: React.FC = () => {
  const navigate = useNavigate();
  const { currentHouse, setSavedHouses, savedHouses } =
    React.useContext(ContextHouse);

  React.useEffect(() => {
    if (!currentHouse) {
      navigate('/houses/');
    }
  }, [currentHouse]);

  const markAsSaved = () => {
    if (!currentHouse) return;
    const houseIndex = savedHouses.findIndex(
      house => house.Id === currentHouse!.Id
    );
    if (houseIndex !== -1) {
      const updatedHouses = [...savedHouses];
      updatedHouses[houseIndex] = currentHouse;
      setSavedHouses(updatedHouses);
    } else {
      setSavedHouses([...savedHouses, currentHouse]);
    }
  };

  return (
    <div className='p-4 w-full lg:w-1024 py-8 flex flex-row gap-10'>
      <div
        id='house-detail-content'
        className='content flex flex-col gap-4 w-8/12'
      >
        <div
          id='house-detail-content-header'
          className='flex flex-row justify-between'
        >
          <div
            id='house-detail-content-header-descrition'
            className='flex flex-col'
          >
            <span className='text-2xl'>{currentHouse?.Title}</span>
            <span className='text-base text-slate-500'>
              {currentHouse?.Location}
            </span>
          </div>
          <div
            id='house-detail-content-header-price'
            className='flex flex-col items-end justify-center'
          >
            <span className='text-lg'>
              {toPriceFormat(currentHouse?.SalePrice ?? 0)}
            </span>
            <span className='text-sm text-slate-500'>
              Date Listened: {currentHouse?.DateListed}
            </span>
          </div>
        </div>
        <div id='house-detail-content-body'>
          <div
            id='house-card-thumbnail'
            className={`pt-1/2 bg-no-repeat bg-cover bg-center bg-slate-200`}
            style={{
              backgroundImage: `url(${currentHouse?.PictureURL})`,
            }}
          />
        </div>
        <div
          id='house-detail-content-footer'
          className='flex flex-row gap-2 flex-wrap justify-between py-4 px-8 border border-slate-400'
        >
          <DetailFooter
            name={'bed'}
            label={'BED'}
            value={`${currentHouse?.Bedrooms ?? ''}`}
          />
          <DetailFooter
            name={'bath'}
            label={'BATH'}
            value={`${currentHouse?.Bathrooms ?? ''}`}
          />
          <DetailFooter
            name={'parking'}
            label={'PARKING'}
            value={`${currentHouse?.Parking ?? ''}`}
          />
          <DetailFooter
            name={'sqft'}
            label={'SQFT'}
            value={`${currentHouse?.Sqft ?? ''}`}
          />
          <DetailFooter
            name={'built'}
            label={'YEAR BUILT'}
            value={`${currentHouse?.YearBuilt ?? ''}`}
          />
        </div>
      </div>
      <div
        id='house-detail-contact'
        className='w-4/12 flex flex-col gap-4 items-end'
      >
        <Button label={'Save property'} icon='favorite' onClick={markAsSaved} />
        <Contact />
      </div>
    </div>
  );
};

export default LayoutHouseDetail;
