import React from 'react'
import ReactDOM from 'react-dom'
 
class Main extends React.Component {
	render () {
		return (
			<section id="main">
		      <input id="toggle-all" type="checkbox">
		      <label for="toggle-all">Mark all as complete</label>
		      <ul id="todo-list"></ul>
		    </section>
		);
	}
}
