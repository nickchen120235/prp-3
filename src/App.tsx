import React from 'react'
import { CssBaseline } from '@material-ui/core'

import { TitleBar } from './component/TitleBar'

const App = () => {
  return (
    <div>
      <CssBaseline />
      <TitleBar title='PRP Assignment 3' />
      <p>Hello React!</p>
    </div>
  )
}

export default App