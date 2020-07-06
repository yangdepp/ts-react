import React, { useState, useEffect, FC } from 'react';

const Demo2: FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  useEffect(() => {
    console.log('第一次或者每次更新数据会调用： add Effect', positions.x, positions.y);
    const updateMouse = (e: MouseEvent) => {
      console.log('inner MouseEvent', positions.x, positions.y);
      setPositions({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener('mousemove', updateMouse);
    return () => {
      console.log('返回一个函数，清除上一次的effect', positions.x, positions.y);
      document.removeEventListener('mousemove', updateMouse);
    };
  });
  console.log('before Render ', positions.x, positions.y);
  return (
    <div>
      <p>Effect存在return时，React可以在执行当前Effect之前，对上一个Effect进行清除操作</p>
      <p>因此可以在return中写入这个逻辑</p>
      <p>x: {positions.x}</p>
      <p>y: {positions.y}</p>
    </div>
  );
};

export default Demo2;
