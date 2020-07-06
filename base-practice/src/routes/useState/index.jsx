import { lazy } from 'react';

const UseState = lazy(() => import('../../page/useState'));

const routes = [
  {
    path: '/useState',
    title: 'UseState',
    icon: 'desktop',
    children: [
      {
        path: '/demo1',
        title: 'demo1',
        component: UseState,
      },
    ],
  },
];

export default routes;
