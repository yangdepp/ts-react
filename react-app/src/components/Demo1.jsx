import React, { Component } from 'react';
import { fn } from '../App';

const ThemeContext = fn();

class Demo1 extends Component {
  static contextType = ThemeContext;
  render() {
    const theme = this.context;

    return (
      <div>
        {theme}
        <div>demo1</div>
      </div>
    );
  }
}

export default Demo1;
