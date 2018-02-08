import React, { Component } from 'react';
import './app.scss';

interface Props {
  toWhat: string;
}

export default class App extends Component<Props, {}> {
  public render() {
    return <div className="title">Hello ! {this.props.toWhat}</div>;
  }
}
