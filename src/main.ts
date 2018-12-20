import React from 'react';
import { render } from 'react-dom';
import './main.scss';

import App from './app/app';

const root = document.getElementById('root');
const element = React.createElement(App);

render(element, root);
