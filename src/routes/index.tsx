import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Layout from '@/layout';
import HomePage from '@/pages/HomePage';
import AboutUsPage from '@/pages/AboutUs';
import NotFoundPage from '@/pages/NotFound';
// import TopArticlePage from '@/pages/TopArticle';
import VirtualizeListPage from '@/pages/virtualizeList';

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
  // {
  //   path: '/topArticle', 
  //   element: <TopArticlePage />,
  // },
  {
    path: '/virtualizeList', 
    element: <VirtualizeListPage />,
  },
  
];
const AppRoutes = () => useRoutes(routes);
export default AppRoutes;
