import React, { Component, createContext } from 'react';
import Demo1Child from './Demo1/demo1';

export const ThemeContext = createContext<string>('light');

class Demo1 extends Component {
  render() {
    return (
      <ThemeContext.Provider value={'dark'}>
        <Demo1Child />
      </ThemeContext.Provider>
    );
  }
}

export default Demo1;
