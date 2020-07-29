import { lazy } from 'react';

const useRef = lazy(() => import('../../page/useRef/demo1'));

const routes = [
  {
    path: '/useRef',
    title: 'useRef',
    icon: 'desktop',
    children: [
      {
        path: '/demo1',
        title: 'demo1',
        component: useRef,
      },
    ],
  },
];

export default routes;
