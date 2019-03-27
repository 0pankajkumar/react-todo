import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'


class App extends Component {
	state = {
		characters : [
		{
        name: 'Get into IIT-B',
        job: 'Score 88+ in GATE',
    },
    {
        name: 'Become a full stack developer',
        job: 'learn React,node,django',
    },]
	};

	removeCharacter = index => {
		const {characters} = this.state

		this.setState({
			characters: characters.filter((character, i) => {
				return i!= index
			}),
		})
	}

	handleSubmit = character => {
		this.setState({characters : [...this.state.characters, character]})
	}
	render() {
		const { characters } = this.state
		return (
			<div className="container">
				<h1>To Do</h1>
				<p>Have fire inside</p>
				<Table characterData={characters} removeCharacter={this.removeCharacter} />
				<Form handleSubmit={this.handleSubmit} />
			</div>
			)
	}
}

export default App