import React, { FC, useState, useMemo, memo, useCallback } from 'react';

interface ICounterProps {
  counter: number;
  onClick: () => void;
}

const Counter: FC<ICounterProps> = memo((props) => {
  console.log('counter rendered');
  return (
    <div>
      <div onClick={props.onClick}>{props.counter}</div>
    </div>
  );
});

const App = () => {
  const [counter, setCounter] = useState(0);

  // double变化时，才会更新子组件
  const double = useMemo(() => {
    return counter * 2;
    // eslint-disable-next-line
  }, [counter === 3]);

  // 只会运行一次
  // const onClick = useMemo(() => {
  //   return () => {
  //     console.log('click');
  //   };
  // }, []);

  // 也可以使用useCallback
  const onClick = useCallback(() => {
    console.log('click');
  }, []);

  // useMemo(() => fn)
  // 等价于 useCallback(fn)

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        Click{counter}
        {double}
      </button>
      <Counter counter={double} onClick={onClick} />
    </div>
  );
};

export default App;
