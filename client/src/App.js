import React, { Component } from 'react'
import './App.css'

import socket from './helpers/socket'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      client: socket()
    }
  }

  componentDidMount() {
    console.log('mounted')
    // this.state.client.testing()
  }

  render() {
    return (
      <div className="App">
        <h1>testing</h1>
        <button onClick={this.state.client.testing}>
          button
        </button>
      </div>
    )
  }
}

export default App
