import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '@fx/react__redux';

const withStore = (Component: React.FC): ReactNode => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

export default withStore;
