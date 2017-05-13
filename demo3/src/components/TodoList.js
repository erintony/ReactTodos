import React from 'react';
import Todo from './todo';
 
/**
* this component use to display items 
*/

const TodoList = ({ todos,allDone, onTodoClick, removeTodo,toggleAll }) => {

    if(todos.length > 0){
        return (
			<section id="main">
				<input id="toggle-all"
					   onClick = {() => toggleAll(!allDone)}
					   type="checkbox" />
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul id="todo-list">
                    {
                        todos.map((todo,index) => {
							return <Todo
								index={index} key={index} {...todo}
								onTodoClick={() =>  onTodoClick(index) }
								removeTodo = {() => removeTodo(index) }
							/>
                        })
                    }
				</ul>
			</section>
        );
    }else{
        return(
			<b>There are nothing left. </b>
        );
    }
}

export default TodoList;


	/*(
	<ul>
        {todos.map(todo =>
			<Todo
				key={todo.id}
                {...todo}
				onClick={() => onTodoClick(todo.id)}
			/>
        )}
	</ul>
)*/



