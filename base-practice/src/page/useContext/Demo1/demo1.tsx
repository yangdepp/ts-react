import React, { Component } from 'react';
import Demo2Child from './demo2';

class Demo1 extends Component {
  render() {
    return (
      <div>
        <div>
          <Demo2Child />
        </div>
      </div>
    );
  }
}

export default Demo1;
