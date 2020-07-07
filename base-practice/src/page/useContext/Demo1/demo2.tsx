import React, { Component } from 'react';
import Demo3Child from './demo3';
class Demo2 extends Component {
  render() {
    return (
      <div>
        <div>
          <Demo3Child />
        </div>
      </div>
    );
  }
}

export default Demo2;
