import React, { FC } from 'react';
import { Button, AutoFocusNext } from 'arkd';

const App: FC = () => {
  return (
    <div>
      <div>Hello Arkd</div>
      <Button>111</Button>
      <AutoFocusNext total={6} />
    </div>
  );
};

export default App;
