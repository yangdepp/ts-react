import React, { FC, useState } from 'react';

const UseState: FC = () => {
  const [obj, setObj] = useState({
    count: 0,
    name: 'counter',
  });
  return (
    <div>
      <div>{obj.name}</div>
      <div>{obj.count}</div>
      <button onClick={() => setObj({ ...obj, count: obj.count + 1 })}>+</button>
      <button onClick={() => setObj({ ...obj, count: obj.count - 1 })}>-</button>
    </div>
  );
};

export default UseState;
