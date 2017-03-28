import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Main from './main'
import Footer from './footer'
 
class Todos extends React.Component {
	constructor(){
		super();
		this.state = {items: [], allDone: false}
	}

	addItem(item){
		this.state.items.push(item);
		this.setState(this.state);
	}

	removeItem(index){
		this.state.items.splice(index,1);
		this.setState(this.state);
	}

	/**
	* Mark all as complete
	*/
	markAllToggle{
		this.state.allDone = !this.state.allDone;
		this.setState(this.state);
	}

	render () {
		return(
			<div>
				<Header addItem={this.addItem.bind(this)} />
				<Main items={this.state.items} markAllToggle={this.markAllToggle.bind(this)} removeItem={this.removeItem.bind(this)} />
				<Footer items={this.state.items}/>
			</div>
		);
	}
}

ReactDOM.render(<Todos />, document.getElementById('todoapp'));