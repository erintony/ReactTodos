import React, { PropTypes } from 'react'

const Todo = ({ onClick, done, text, index }) => (

    <li ref="edit" className={done} >
		<div className="view" >
		<input className="toggle" checked={done?"checked":""}
			onClick={onClick}
			type="checkbox" />
			<label>{text} </label>
		<a className="destroy" onClick={} ></a>
		</div>
		<input ref='input' className="edit" autoFocus onBlur={} type="text" defaultValue={this.props.item.value} />
	</li>

)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo

/*

<li ref="edit" className={done} >
    <div className="view" onDoubleClick={this.edit.bind(this)} >
<input className="toggle" checked={done?"checked":""}
onClick={TodosAction.toggleDone.bind(this, this.props.index)}
type="checkbox" />
    <label>{this.props.item.value} </label>
<a className="destroy" onClick={TodosAction.removeItem.bind(this, this.props.index)} ></a>
</div>
<input ref='input' className="edit" autoFocus onBlur={this.close.bind(this)} type="text" defaultValue={this.props.item.value} />
</li>*/
