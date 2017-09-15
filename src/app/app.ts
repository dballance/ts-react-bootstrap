import React, { Component } from 'react';

interface Props {
  toWhat: string
}

interface State {}

export default class App extends Component<Props, State> {
  render(){
    return React.createElement('div', {}, `Hello ${this.props.toWhat}`);
  }
}