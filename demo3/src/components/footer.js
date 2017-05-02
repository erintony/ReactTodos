import React from 'react';
import TodosAction from '../action/TodosAppAction';

class Footer extends React.Component {
	/**
	* get the number of done item
	*/
	getComplete() {
		let completed = 0;
		for(let item of this.props.items) {
			if(item.done) completed++;
		};
		return completed;

	}

	render () {
		return (
			<footer className={this.props.items.length > 0 ? "" : "hide"} >
		      <a id="clear-completed" onClick={TodosAction.clearCompleted} >Clear {this.getComplete()} completed item</a>
		      <div id="todo-count"><b>{this.props.items.length-this.getComplete()}</b> item left. </div>
		    </footer>
		);
	}
}

export default Footer