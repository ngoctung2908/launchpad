import 'core-js';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import { bootstrap } from '@fx/web_common';

import { App } from './bitcityz';
import withStore from './with-redux';

bootstrap((win: Window, doc: Document) => {
  win.timeoutToReload && clearTimeout(win.timeoutToReload);

  ReactDOM.render(
    <React.Fragment>
      {withStore(App)}
    </React.Fragment>,
    doc.getElementById('root-app')
  );
});
