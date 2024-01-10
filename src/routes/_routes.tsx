import React from 'react';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { RouteRoot } from './_root';

import { HouseRoutes } from '../features/houses/routes';

import { LayoutAuth, LayoutError, LayoutNotFound } from './../layouts';

const route = (path: string, element: React.ReactNode): RouteObject => {
  return {
    path: path,
    element: element,
    errorElement: <LayoutError />,
  };
};

const routes = createBrowserRouter(
  [
    {
      element: <RouteRoot />,
      children: [...HouseRoutes, route('*', <LayoutNotFound />)],
    },
    route('/', <LayoutAuth />),
  ],
  {}
);

const Routes: React.FC = () => {
  return (
    <RouterProvider router={routes} fallbackElement={<div>Spinner</div>} />
  );
};

export default Routes;
