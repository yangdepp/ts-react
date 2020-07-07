import React, { Component, createContext } from 'react';
import Demo1Child from './Demo1/demo1';

export interface IThemeContext {
  theme: string;
}

export const ThemeContext = createContext<IThemeContext>({ theme: '' });

class Demo1 extends Component {
  render() {
    return (
      <ThemeContext.Provider value={{theme: 'drak'}}>
        <Demo1Child />
      </ThemeContext.Provider>
    );
  }
}

export default Demo1;
