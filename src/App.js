import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Notes from './components/notes'
import AddNote from './components/addnote'

class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <div>
              <Link to="/">Notes</Link> &nbsp;
              <Link to="/addnote">Add note</Link> &nbsp;
              <Link to="/users">Add note</Link> &nbsp;
            </div>
            <Route exact path="/" render={() => <Notes />} />
            <Route path="/addnote" render={() => <AddNote />} />
            <Route path="/" render={() => <AddNote />} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
