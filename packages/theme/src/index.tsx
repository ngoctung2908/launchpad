import React from 'react';
import ReactDOM from 'react-dom';

import { bootstrap } from '@fx/web_common';

import App from './app';

bootstrap((win: Window, doc: Document) => {
  ReactDOM.render(<App />, doc.getElementById('root-app'));
});
