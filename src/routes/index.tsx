import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
const Layout = () => import('@/layout');
const HomePage = () => import('@/pages/HomePage');
const AboutUsPage = () => import('@/pages/AboutUs');
const NotFoundPage = () => import('@/pages/NotFound');

const routes: RouteObject[] = [
  {
    path: '/', 
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage/>,
      },
      {
        path: '/aboutus',
        element: <AboutUsPage/>,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];