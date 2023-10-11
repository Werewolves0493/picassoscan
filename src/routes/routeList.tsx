import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import HomePage from '@/pages/HomePage';

export const navList = {
  Home: {
    path: `/`,
    element: HomePage,
  }
};

export const NavigateList = () => {
  const routes = useRoutes([{
    path: `/`,
    element: <HomePage />,
  }]);
  return routes;
};