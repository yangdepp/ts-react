import { lazy } from 'react';

const useEffect = lazy(() => import('../../page/useEffect'));

const routes = [
  {
    path: '/useEffect',
    title: 'useEffect',
    icon: 'desktop',
    children: [
      {
        path: '/demo1',
        title: 'demo1',
        component: useEffect,
      },
    ],
  },
];

export default routes;
