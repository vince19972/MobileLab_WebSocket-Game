import React, { Component } from 'react'
import Entry from './comps/Entry'
import './App.css'

import socket from './helpers/socket'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      players: [],
      client: socket()
    }
  }

  componentDidMount () {
    this.state.client.socket.on('user joined', (player, direction) => {
      // console.log(player)
      // console.log(direction)
      // console.log(this.state.players)

      const userExisted = this.state.players.filter((val) =>
        player === val.player
      ).length > 0

      if (!userExisted) {
        this.setState({
          players: [...this.state.players, {
            player,
            direction
          }]
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Entry players={this.state.players}/>
      </div>
    )
  }
}

export default App
