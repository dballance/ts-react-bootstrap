import React from 'react';
import { render } from 'react-dom';

import App from './app/app';

render(
  React.createElement(App, {toWhat: 'World'}, null), 
  document.getElementById('root')
)


