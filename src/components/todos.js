import React from 'react'
import ReactDOM from 'react-dom'
 
class Todos extends React.Component {
	render () {
		return(
			<header>
		      <h1>Todos</h1>
		      <input id="new-todo" type="text" placeholder="What needs to be done?" />
		    </header>
		);
	}
}

ReactDOM.render(<Todos />, document.getElementById('todoapp'));