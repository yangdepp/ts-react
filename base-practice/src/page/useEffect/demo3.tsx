import React, { useState, useEffect, FC } from 'react';
let timer: number;

const Demo3: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('222');
    timer = window.setInterval(() => {
      setCount((pre) => pre + 1);
    }, 1000);
    return () => {
      console.log('444');
      window.clearInterval(timer);
      document.title = `已卸载${count}`;
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log('111');
    document.title = `update${count}`;
  }, [count]);
  console.log('render');
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => window.clearInterval(timer)}>clear</button>
    </div>
  );
};

export default Demo3;
