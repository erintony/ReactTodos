import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Main from './main'
import Footer from './footer'

/**
* the root component
*/ 
class Todos extends React.Component {
	constructor(){
		super();
		this.state = {items: [], allDone: false}
	}

	/**
	* add a item
	*/
	addItem(item){
		this.state.items.push(item);
		this.setState(this.state);
	}

	/**
	* click X destroy(remove) an item
	*/
	removeItem(index){
		this.state.items.splice(index,1);
		this.setState(this.state);
	}

	/**
	* Mark all as complete
	*/
	markAllToggle(){
		this.state.allDone = !this.state.allDone;
		this.state.items.forEach((item)=>{
			item.done = this.state.allDone;
		});
		this.setState(this.state);
	}

	/**
	* 一个item checkbox点击事件
	*/
	toggleDone(index) {
		this.state.items[index].done = !this.state.items[index].done;
		this.setState(this.state);
	}

	/**
	* clear done items
	*/
	clearCompleted(){
		let items = this.state.items.filter((item,index)=>{
			return !item.done;
		});
		this.state.items = items;
		this.setState(this.state);
	}

	render () {
		return(
			<div>
				<Header addItem={this.addItem.bind(this)} />
				<Main items={this.state.items} markAllToggle={this.markAllToggle.bind(this)} removeItem={this.removeItem.bind(this)} toggleDone={this.toggleDone.bind(this)} />
				<Footer items={this.state.items} clearCompleted={this.clearCompleted.bind(this)} />
			</div>
		);
	}
}

ReactDOM.render(<Todos />, document.getElementById('todoapp'));