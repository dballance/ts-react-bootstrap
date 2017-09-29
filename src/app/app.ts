import React, { Component } from 'react'

interface Props {
  toWhat: string
}

export default class App extends Component<Props, {}> {
  render() {
    return React.createElement('div', {}, `Hello ! ${this.props.toWhat}`)
  }
}
