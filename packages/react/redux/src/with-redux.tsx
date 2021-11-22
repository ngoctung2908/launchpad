import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { AnyAction, Store } from 'redux';

const withStore = (Component: React.FC, store: Store<any, AnyAction>): ReactNode => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

export default withStore;
