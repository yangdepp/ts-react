import { lazy } from 'react';

const Demo1 = lazy(() => import('../../page/useArkd'));

const routes = [
  {
    path: '/useArkd',
    title: 'useArkd',
    icon: 'desktop',
    children: [
      {
        path: '/demo1',
        title: 'demo1',
        component: Demo1,
      },
    ],
  },
];

export default routes;
