import React, { useCallback } from 'react';

import {
  useAppDispatch,
  //
  counterSlice,
} from '@fx/react__redux';

interface Props {
  id?: string;
}

const CounterControls: React.FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const increment = useCallback(() => {
    console.log(55555);
    dispatch(counterSlice.increment());
  }, [dispatch]);
  const decrement = () => dispatch(counterSlice.decrement());

  return (
    <div id={props.id}>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default CounterControls;
