import React from 'react';
import * as Uuid from 'uuid';
import { ContextHouse } from '../../context';
import { Message } from '../../../../components';
import { Card, CardList } from '../../components';

const LayoutHouseSaved: React.FC = () => {
  const { savedHouses } = React.useContext(ContextHouse);
  return (
    <div className='p-4 w-full'>
      {savedHouses.length ? (
        <CardList>
          {savedHouses.map(house => (
            <Card key={`house-${Uuid.v4()}`} data={{ ...house }} />
          ))}
        </CardList>
      ) : (
        <Message message='There is not any house saved' />
      )}
    </div>
  );
};

export default LayoutHouseSaved;
