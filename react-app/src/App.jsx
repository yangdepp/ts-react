import React, { createContext, Component } from 'react';
import ArkComponent from './components/ark-test.jsx';
const ThemeContext = createContext('light');

class Demo1 extends Component {
  static contextType = ThemeContext;
  render() {
    const theme = this.context;

    return (
      <div>
        {theme}
        <div>demo1</div>
        <ArkComponent />
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <ThemeContext.Provider>
        <Demo1 />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
