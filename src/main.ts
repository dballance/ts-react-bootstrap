import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './app/app'

const root = document.getElementById('root')

const renderApp = (Component: React.ComponentClass<{ toWhat: string }>) => {
  render(
    React.createElement(
      AppContainer,
      undefined,
      React.createElement(Component, { toWhat: 'World!' }, null)
    ),
    root
  )
}
renderApp(App)

if (module.hot) {
  module.hot.accept('./app/app', () => {
    renderApp(App)
  })
}
