import { lazy } from 'react';

const Demo1 = lazy(() => import('../../page/useMemo/demo1'));

const routes = [
  {
    path: '/useMemo',
    title: 'useMemo',
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
