import React, { useState, useEffect, FC } from 'react';

const Demo4: FC = () => {
  const [like, setLike] = useState(0);
  const [update, setUpdate] = useState(false);
  console.log('before Render ');
  useEffect(() => {
    console.log('add Effect');
    document.title = `点击了${like}次`;
  }, [like]);

  return (
    <div style={{ border: '1px solid #ccc' }}>
      <p>React会在执行当前Effect之前，对上一个Effect进行清除，如果存在return值的话</p>
      <button onClick={() => setLike(like + 1)}>
        <span role="img" aria-label="赞">
          👍
        </span>
        +{like}
      </button>
      <button onClick={() => setUpdate(!update)}>{update ? 'ON' : 'OFF'}</button>
    </div>
  );
};

export default Demo4;
