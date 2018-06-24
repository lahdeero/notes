import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import fire from './fire'

class Notes extends React.Component {
	constructor(props) {
		super(props)
		this.state = { notes: [] }
	}
	componentWillMount(){
		let notesRef = fire.database().ref('notes').orderByKey().limitToLast(100);
		notesRef.on('child_added', snapshot => {
		let note = { data: snapshot.val().data, title: snapshot.val().title, id: snapshot.key }
		console.log(snapshot)
		this.setState({ notes: [note].concat(this.state.notes) })
	})
}

	render() {
		return (
	  	<div>
	  	  <h2>All Notes:</h2>
				{this.state.notes.map(note =>
					<li key={note.id}>{note.title} {note.category} {note.data}</li>
				)}
	  	</div>
		)
	}
}


export default Notes
