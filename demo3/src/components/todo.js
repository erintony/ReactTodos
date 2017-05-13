import React from 'react'
import PropTypes  from 'prop-types';

const Todo = ({ done, text, index }) => (

    <li className={done} >
		<div className="view" >
		<input className="toggle" checked={done?"checked":""}

			type="checkbox" />
			<label>{text} </label>
		<a className="destroy"  ></a>
		</div>
		<input className="edit" autoFocus type="text" defaultValue={text} />
	</li>

)

Todo.propTypes = {
    //onClick: PropTypes.func.isRequired,
    done: PropTypes.bool.isRequired,
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
