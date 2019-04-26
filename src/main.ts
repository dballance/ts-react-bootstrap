import React from 'react';
import { render } from 'react-dom';

// tslint:disable-next-line
import 'sanitize.css/sanitize.css';

import App from './app/app';

const root = document.getElementById('root');
const element = React.createElement(App);

render(element, root);
