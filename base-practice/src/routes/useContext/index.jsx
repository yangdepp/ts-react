import { lazy } from 'react';

const Demo1 = lazy(() => import('../../page/useContext/demo1'));

const routes = [
  {
    path: '/usseContext',
    title: 'usseContext',
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
