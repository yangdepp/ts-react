import React, { useState, useEffect } from 'react';

interface ICount<T, U> {
  name: T;
  value: U;
}

const Component = () => {
  // const [count, setCount] = useState<Array<ICount<string, number>>>([]);
  const [count, setCount] = useState<ICount<string, number>[]>([]);

  const addRow = () => {
    fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCount([...count, { name: data.name, value: data.status }]);
      });
  };

  useEffect(addRow, []);

  return (
    <div>
      <div>
        {count.map((item, index) => (
          <div key={index}>
            {item.name}: {item.value}
          </div>
        ))}
      </div>
      <button onClick={addRow}>+1行</button>
    </div>
  );
};

export default Component;
