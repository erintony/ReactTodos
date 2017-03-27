import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Main from './main'
import Footer from './footer'
 
class Todos extends React.Component {
	constructor(){
		super();
		this.state = {items: []}
	}

	addItem(item){
		this.state.items.push(item);
		this.setState(this.state);
	}

	render () {
		return(
			<div>
				<Header addItem={this.addItem.bind(this)} />
				<Main items={this.state.items} />
				<Footer items={this.state.items}/>
			</div>
		);
	}
}

ReactDOM.render(<Todos />, document.getElementById('todoapp'));