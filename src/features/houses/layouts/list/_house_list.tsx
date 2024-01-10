import * as React from 'react';
import * as Uuid from 'uuid';
import { useNavigate } from 'react-router-dom';
import { ContextHouse } from '../../context';
import { useFetchData } from '../../hooks';
import { FilterOptions, House } from '../../types';
import { Message } from '../../../../components';
import { Card, Filter, CardList } from '../../components';

const LayoutHome: React.FC = () => {
  const navigate = useNavigate();
  const [houses, setHouses] = React.useState<House[]>([]);
  const { setCurrentHouse } = React.useContext(ContextHouse);
  const { data, error, loading, fecthData } = useFetchData();

  React.useEffect(() => {
    fecthData('/houses');
  }, []);

  React.useEffect(() => {
    if (data) {
      setHouses([...data]);
    }
  }, [data]);

  const showHouseDetails = (house: House) => {
    setCurrentHouse(house);
    navigate('/houses/detail/');
  };

  const filterHouses = ({ beds, baths, parking, minPrice }: FilterOptions) => {
    const filteredHouses = [...data].filter(house => {
      const meetsBedCriteria = house.Bedrooms >= beds;
      const meetsBathCriteria = house.Bathrooms >= baths;
      const meetsParkingCriteria = house.Parking >= parking;
      const meetsPriceCriteria = house.SalePrice >= minPrice;
      return (
        meetsBedCriteria &&
        meetsBathCriteria &&
        meetsParkingCriteria &&
        meetsPriceCriteria
      );
    });
    setHouses(filteredHouses);
  };

  return (
    <div className='p-4 w-full'>
      {loading && <div>Loading fetch data</div>}
      {error && <div>Some error here</div>}
      {data && houses && (
        <>
          <Filter data={data} onFilter={filterHouses} />
          <CardList>
            {houses.map(house => (
              <Card
                key={`house-${Uuid.v4()}`}
                data={{ ...house }}
                onSelectHouse={() => showHouseDetails(house)}
              />
            ))}
          </CardList>
          {houses.length === 0 && (
            <Message message='There is not Houses, try other filter' />
          )}
        </>
      )}
    </div>
  );
};

export default LayoutHome;
