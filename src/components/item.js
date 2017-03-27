import React from 'react'

class Item extends React.Component {

	render() {
		return(
			<li>
			   <div className="view">
			      <input className="toggle" type="checkbox" />
			      <label>{this.props.item.value} </label>
			      <a className="destroy"></a>
			    </div>
			    <input className="edit" type="text" defaultValue={this.props.item.value} />
			 </li>
		);
	}
}

export default Item