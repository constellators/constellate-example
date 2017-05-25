import React from 'react'
import { render } from 'react-dom'

import MyReactApp from 'myapp-react-app'

render(<MyReactApp />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}
