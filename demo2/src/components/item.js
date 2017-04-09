import React from 'react';
//import $ from 'jquery'
import TodosAction from "../action/TodosAppAction";

class Item extends React.Component {

	constructor(){
		super();
		this.state = {editing: false};
	}
	
	removeItem(){
		//console.log("removeItem");
        TodosAction.removeItem(this.props.index);
	}

	/**
	* doubleClick to change state to edit
	*/
	edit() {
		//$(this.refs.edit).addClass("editing");
		this.state.editing = true;
		this.setState(this.state);
		//$(this.refs.input).focus();
	}

	/**
	* close edit state
	*/
	close() {
		//$(this.refs.edit).removeClass("editing");
		this.state.editing = false;
		this.setState(this.state);
	}

	toggleDone() {
		this.props.toggleDone(this.props.index);
	}

	componentDidUpdate (){
		if(this.state.editing){
			this.refs.input.focus();
		}
	}

	render() {
		let done = this.props.item.done?"done":"";
		done += this.state.editing?" editing":"";

		let autoFocus = this.state.editing?"true":"false";
		return(
			<li ref="edit" className={done} >
			   <div className="view" onDoubleClick={this.edit.bind(this)} >
			      <input className="toggle" checked={done?"checked":""} onClick={this.toggleDone.bind(this)} type="checkbox" />
			      <label>{this.props.item.value} </label>
			      <a className="destroy" onClick={this.removeItem.bind(this
			      	)} ></a>
			    </div>
			    <input ref='input' className="edit" autoFocus onBlur={this.close.bind(this)} type="text" defaultValue={this.props.item.value} />
			</li>
		);
	}
}

export default Item