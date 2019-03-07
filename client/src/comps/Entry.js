import React, { Component } from 'react'
import './Comps.css'

import socket from './../helpers/socket'

class Entry extends Component {
  constructor(props) {
		super(props)

    this.state = {
			playerId: '',
			client: socket(),
			enterGame: false
		}

		this.handleInput = this.handleInput.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.getPlayers = this.getPlayers.bind(this)
	}

	handleInput (event) {
		this.setState({
			playerId: event.target.value
		})
	}
	handleSubmit () {
		this.setState({
			enterGame: true
		})

		this.state.client.play({
			id: this.state.playerId,
			direction: '0'
		})
	}

	getPlayers () {
		console.log(this.props.players)
		return this.props.players.map((val, index) =>
			<h1
				key={index}
			>
				{val.player}
			</h1>
		)
	}

  render() {
		const buttonState = () => {
			let classes = 'name-enter'

			if (this.state.playerId.length > 0)
				classes += ' -is-active'

			return classes
		}

		const hideEntry = () => {
			let classes = 'name-view'

			if (this.state.enterGame) classes += ' -is-hidden'

			return classes
		}

    return (
      <div className="Entry">
				<div className={hideEntry()}>
					<input
						className="name-input"
						type="userId"
						placeholder="please enter player ID"
						onChange={this.handleInput}
						value={this.state.value}
					/>
					<button
						className={buttonState()}
						onClick={this.handleSubmit}
					>
						PLAY
					</button>
				</div>
				<div className="game-board">
					<div className="game-board__players">
						{ this.getPlayers() }
					</div>
				</div>
      </div>
    )
  }
}

export default Entry
