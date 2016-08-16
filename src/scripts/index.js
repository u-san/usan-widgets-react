import React from 'react'
import { render } from 'react-dom'
import Root from './routers'
import '../styles/index.less'

render(
  <Root />,
  document.getElementById('app')
)