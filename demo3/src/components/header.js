import React from 'react';

/**
* head component, accept user input 
*/
function handleKeyUp(event){
    if(event.keyCode == 13){
        let item = {value: this.refs.input.value, done: false};
        TodosAction.addItem(item);
        this.refs.input.value = '';
    }
}

export default Header = (onKeyUP)=>{
    return(
		<header>
			<h1>Todos</h1>
			<input id="new-todo" ref='input' type="text" placeholder="What needs to be done?" onKeyUp={onKeyUp} />
		</header>
    );
};