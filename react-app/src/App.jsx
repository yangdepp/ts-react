import React, { createContext, Component } from 'react';
 const ThemeContext = createContext('light');

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
