import React, { Component } from 'react'
import fire from './fire'

class AddNote extends Component {

	componentWillMount() {}
	addNote = (e) => {
		e.preventDefault();
		fire.database().ref('notes').push({
			title: this.inputEm.value,
			category: this.inputEn.value,
			data: this.inputEl.value
		})
		this.inputEm.value = ''
		this.inputEn.value = ''
		this.inputEl.value = ''
	}

	render() {
		return (
			<div>
      	<form onSubmit={this.addNote.bind(this)}>
					<div>
						Title: 
						<input type="text" ref={ em => this.inputEm = em }/>
					</div>
					<div>
						Category:
						<input type="text" ref= { en => this.inputEn = en }/>
					</div>
					<div>
						Note: 
						<input type="text" ref={ el => this.inputEl = el }/>
					</div>
      	  <input type="submit"/>
      	</form>
			</div>
		)
	}
}

export default AddNote
