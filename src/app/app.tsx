import { css } from '@emotion/core';
import React from 'react';
// tslint:disable-next-line
import { hot } from 'react-hot-loader/root';

const styles = css`
  color: white;
  background-color: blue;
`;

const App = () => {
  return <div css={styles}>Hello World!</div>;
};

export default hot(App);
