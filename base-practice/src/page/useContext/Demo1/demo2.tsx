import React, { useContext } from 'react';
import { ThemeContext, IThemeContext } from '../demo1';
const Demo2 = () => {
  const context = useContext<IThemeContext>(ThemeContext);
  return (
    <div>
      <div>{context.theme}</div>
    </div>
  );
};

export default Demo2;
