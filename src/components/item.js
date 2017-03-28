import React from 'react'
import $ from 'jquery'

class Item extends React.Component {
	
	removeItem(){
		//console.log("removeItem");
		this.props.removeItem(this.props.index);
	}

	edit() {
		$(this.refs.edit).addClass("editing");
		$(this.refs.input).focus();
	}

	close() {
		$(this.refs.edit).removeClass("editing");
	}

	render() {
		return(
			<li ref="edit" >
			   <div className="view" onDoubleClick={this.edit.bind(this)} >
			      <input className="toggle" type="checkbox" />
			      <label>{this.props.item.value} </label>
			      <a className="destroy" onClick={this.removeItem.bind(this
			      	)} ></a>
			    </div>
			    <input ref='input' className="edit" onBlur={this.close.bind(this)} type="text" defaultValue={this.props.item.value} />
			</li>
		);
	}
}

export default Item