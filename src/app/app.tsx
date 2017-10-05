import React, { Component } from 'react'

interface Props {
  toWhat: string
}

export default class App extends Component<Props, {}> {
  render() {
    return <div className="title">Hello ! {this.props.toWhat}</div>
  }
}
