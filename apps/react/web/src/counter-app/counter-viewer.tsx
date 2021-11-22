import React from 'react';

import {
  useAppSelector,
  //
  counterSlice,
} from '@fx/react__redux';

interface Props {
  id?: string;
}

const CounterViewer: React.FC<Props> = (props) => {
  const count = useAppSelector(counterSlice.selectValue);
 

  return (
    <div id={props.id}>
      <h1>Count: {count}</h1>
    </div>
  );
};

export default CounterViewer;
