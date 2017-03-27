import React from 'react'
import ReactDOM from 'react-dom'
 
class Header extends React.Component {
	handleKeyUp(event){
		if(event.keyCode == 13){
			let item = {value: this.refs.input.value, done: false};
			this.props.addItem(item);
			this.refs.input.value = '';
		}
	}
	render () {
		return(
			<header>
		      <h1>Todos</h1>
		      <input id="new-todo" ref='input' type="text" placeholder="What needs to be done?" onKeyUp={this.handleKeyUp.bind(this)} />
		    </header>
		);
	}
}

export default Header