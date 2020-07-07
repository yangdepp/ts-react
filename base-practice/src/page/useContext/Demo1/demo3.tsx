import React, { Component } from 'react';
import { ThemeContext } from '../demo1';

class Demo3 extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    return <div>111111</div>;
  }
}
export default Demo3;
