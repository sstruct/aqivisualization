require('normalize.css/normalize.css');
require('styles/App.scss');
// require('./InitMaps.js')

import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Map from './Maps'

class Main extends React.Component {
  render () {
    return (
      <div>
        <Header />
        <Map />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('app'))
