import React, { useState, useEffect, FC } from 'react';
const UseEffect: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('add effect');
    document.title = `点击${count}次`;
  });

  return (
    <div>
      <div>useEffect中的回调，只在第一次和每次更新时，执行</div>
      <div>Count:{count}</div>
      <button onClick={() => setCount((preCount) => preCount + 1)}>点我</button>
    </div>
  );
};

export default UseEffect;
