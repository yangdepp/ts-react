import React, { useState, useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log('click');
  };

  useEffect(() => {
    document.querySelector('#size')?.addEventListener('click', handleClick, false);
    return () => document.querySelector('#size')?.removeEventListener('click', handleClick, false);
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>click {count}</button>
      {count % 2 ? <div id="size">size1</div> : <div id="size">size2</div>}
    </div>
  );
};

export default App;
