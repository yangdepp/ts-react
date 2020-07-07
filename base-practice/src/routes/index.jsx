import { autoAddPathToChildren } from '../js/routes_helper';
import useState from './useState';
import useEffect from './useEffect';
import useContext from './useContext';

const routes = autoAddPathToChildren([].concat(useState, useEffect, useContext));

export default routes;
