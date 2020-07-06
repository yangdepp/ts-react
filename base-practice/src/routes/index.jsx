import { autoAddPathToChildren } from '../js/routes_helper';
import useState from './useState';
import useEffect from './useEffect';

const routes = autoAddPathToChildren([].concat(useState, useEffect));

export default routes;
