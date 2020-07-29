import { autoAddPathToChildren } from '../js/routes_helper';
import useState from './useState';
import useEffect from './useEffect';
import useContext from './useContext';
import useMemo from './useMemo';
import useRef from './useRef';
import useArkd from './useArkd';

const routes = autoAddPathToChildren(
  [].concat(useState, useEffect, useContext, useMemo, useRef, useArkd),
);

export default routes;
