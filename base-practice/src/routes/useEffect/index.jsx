import { lazy } from 'react';

const Demo1 = lazy(() => import('../../page/useEffect/demo1'));
const Demo2 = lazy(() => import('../../page/useEffect/demo2'));
const Demo3 = lazy(() => import('../../page/useEffect/demo3'));
const Demo4 = lazy(() => import('../../page/useEffect/demo4'));
const Demo5 = lazy(() => import('../../page/useEffect/demo5'));
const Demo6 = lazy(() => import('../../page/useEffect/demo6'));

const routes = [
  {
    path: '/useEffect',
    title: 'useEffect',
    icon: 'desktop',
    children: [
      {
        path: '/demo1',
        title: 'demo1',
        component: Demo1,
      },
      {
        path: '/demo2',
        title: 'demo2',
        component: Demo2,
      },
      {
        path: '/demo3',
        title: 'demo3',
        component: Demo3,
      },
      {
        path: '/demo4',
        title: 'demo4',
        component: Demo4,
      },
      {
        path: '/demo5',
        title: 'demo5',
        component: Demo5,
      },
      {
        path: '/demo6',
        title: 'demo6',
        component: Demo6,
      },
    ],
  },
];

export default routes;
