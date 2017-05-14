import React from 'react'
import PropTypes  from 'prop-types';

const Todo = ({ done, editing, text, index ,onTodoClick, removeTodo, edit, close}) => {
	let itemStatus = done? "done": "";
	itemStatus += editing? "editing": "";
	return (
		<li className={ itemStatus } >
			<div className="view" onDoubleClick={ edit }>
				<input className="toggle" checked={done?"checked":""}
					   onClick={onTodoClick}
					   type="checkbox" />
				<label>{text} </label>
				<a className="destroy" onClick={removeTodo }  ></a>
			</div>
			<input className="edit" autoFocus type="text"
				   onBlur={ close }
				   defaultValue={text} />
		</li>

    )
}

Todo.propTypes = {
    //onClick: PropTypes.func.isRequired,
    done: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo;