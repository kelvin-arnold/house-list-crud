import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Body } from '../components';
import { links } from './_links';

const RouteRoot: React.FC = () => {
  return (
    <div className='container'>
      <Header links={links} />
      <Body>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </React.Suspense>
      </Body>
    </div>
  );
};

export { RouteRoot };
