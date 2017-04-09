import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Main from './main';
import Footer from './footer';

//import TodosAppAction from '../action/TodosAppAction';
import TodoStore from '../store/TodoStore';

/**
* the root component
*/ 
class TodosApp extends React.Component {
	constructor(){
		super();
		//this.state = {items: [], allDone: false}
		this.state = TodoStore.getList();
		this._onChange = this._onChange.bind(this);
	}

	componentDidMount() {
		TodoStore.addChangeListener(this._onChange);
	}
		
	componentWillUnmount() {
	    TodoStore.removeChangeListener(this._onChange);
	}

	_onChange() {
		this.setState(TodoStore.getList());
	}


	/**
	* 一个item checkbox点击事件
	*/
	toggleDone(index) {
		this.state.items[index].done = !this.state.items[index].done;
		this.setState(this.state);
	}


	render () {
		return(
			<div>
				<Header />
				<Main items={this.state.items} toggleDone={this.toggleDone.bind(this)} />
				<Footer items={this.state.items} />
			</div>
		);
	}
}

ReactDOM.render(<TodosApp />, document.getElementById('todoapp'));