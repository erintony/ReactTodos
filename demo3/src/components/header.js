import React from 'react';



class Header extends React.Component{

    /**
     * head component, accept user input
     */
    handleKeyUp(event){
        if(event.keyCode == 13){
            // let item = {value: this.refs.input.value, done: false};
            // TodosAction.addItem(item);
            let input =  this.refs.input.value.trim();
            this.props.addTodo(input);
            this.refs.input.value = '';
        }
    }

    render() {
        return(
            <header>
                <h1>Todos</h1>
                <input id="new-todo" ref='input' type="text" placeholder="What needs to be done?" onKeyUp={this.handleKeyUp.bind(this)} />
            </header>
        );
    }

};

export default Header;