import React, { lazy } from 'react';
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom';
import { RouteRoot } from './_root';

import { HouseRoutes } from '../features/houses/routes';

const Auth = lazy(() => import('../layouts/auth/layout_auth'));
const NotFound = lazy(() => import('../layouts/notfound/layout_notfound'));
const Error = lazy(() => import('../layouts/error/layout_error'));

const route = (path: string, element: React.ReactNode): RouteObject => {
  return {
    path: path,
    element: element,
    errorElement: <Error />,
  };
};

const routes = createBrowserRouter(
  [
    {
      element: <RouteRoot />,
      children: [...HouseRoutes, route('*', <NotFound />)],
    },
    route('/', <Auth />),
  ],
  {}
);

const Routes: React.FC = () => {
  return (
    <RouterProvider router={routes} fallbackElement={<div>Spinner</div>} />
  );
};

export default Routes;
