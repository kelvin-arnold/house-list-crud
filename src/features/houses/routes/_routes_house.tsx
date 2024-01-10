import React from 'react';
import { Outlet, RouteObject } from 'react-router-dom';
import { ContextProviderHouse } from './../context';

import {
  LayoutHouseList,
  LayoutHouseDetail,
  LayoutHouseSaved,
} from '../layouts';

const route = (path: string, element: React.ReactNode): RouteObject => {
  return {
    path: path,
    element: element,
  };
};

const routes = [
  {
    element: (
      <ContextProviderHouse>
        <Outlet />
      </ContextProviderHouse>
    ),
    children: [
      route('/houses/', <LayoutHouseList />),
      route('/houses/detail', <LayoutHouseDetail />),
      route('/houses/saved', <LayoutHouseSaved />),
    ],
  },
];

export default routes;
