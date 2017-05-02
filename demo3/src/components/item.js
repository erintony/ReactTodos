import React from 'react';
import TodosAction from "../action/TodosAppAction";

class Item extends React.Component {

	constructor(){
		super();
		this.state = {editing: false};
	}

	/**
	* doubleClick to change state to edit
	*/
	edit() {
		this.state.editing = true;
		this.setState(this.state);
	}

	/**
	* close edit state
	*/
	close() {
		this.state.editing = false;
		this.setState(this.state);
	}

	componentDidUpdate (){
		if(this.state.editing){
			this.refs.input.focus();
		}
	}

	render() {
		let done = this.props.item.done?"done":"";
		done += this.state.editing?" editing":"";

		return(
			<li ref="edit" className={done} >
			   <div className="view" onDoubleClick={this.edit.bind(this)} >
			      <input className="toggle" checked={done?"checked":""}
                         onClick={TodosAction.toggleDone.bind(this, this.props.index)}
                         type="checkbox" />
			      <label>{this.props.item.value} </label>
			      <a className="destroy" onClick={TodosAction.removeItem.bind(this, this.props.index)} ></a>
			    </div>
			    <input ref='input' className="edit" autoFocus onBlur={this.close.bind(this)} type="text" defaultValue={this.props.item.value} />
			</li>
		);
	}
}

export default Item;