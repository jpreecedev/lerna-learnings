import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './global/styles.scss'

import Header from 'header'
import Layout from './components/Layout'
import App from './components/App'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Layout>
    <Header />
    <App />
  </Layout>,
  document.getElementById('root')
)
