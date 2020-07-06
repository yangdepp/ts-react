import React, { useState, useEffect, FC } from 'react';

const Demo3: FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log('第一次或者每次更新数据会调用： add Effect', positions.x, positions.y);
    const updateMouse = (e: MouseEvent) => {
      console.log('inner MouseEvent', positions.x, positions.y);
      setPositions({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('click', updateMouse);
    return () => {
      console.log('返回一个函数，清除上一次的effect', positions.x, positions.y);
      document.removeEventListener('click', updateMouse);
    };
  });
  console.log('before Render ', positions.x, positions.y);
  return (
    <div>
      <p>React会在执行当前Effect之前，对上一个Effect进行清除，如果存在return值的话</p>
      <p>x: {positions.x}</p>
      <p>y: {positions.y}</p>
    </div>
  );
};

export default Demo3;
