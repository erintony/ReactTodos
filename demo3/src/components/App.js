/**
 * the smart component
 */
import React from 'react';
import Header from './header';
import { add, getComplete, clearCompleted } from '../actions/todos';
import VisableTodoList from '../container/VisableTodoList';
import Footer from './Footer';
import { connect } from 'react-redux';

import styles from '../css/todos.css';


class App extends React.Component {

	componentWillMount() {
		this.props.dispatch(add("2333~~~"));
		console.dir(this.props);
	}
    getComplete() {
		let todos = this.props.todos.filter( todo => todo.done);
		return todos.length;
	}

	render() {
		return (
			<div>
				<Header addTodo={text => this.props.dispatch(add(text))} />
				<VisableTodoList />
				<Footer
					size={this.props.todos.length }
					clearCompleted={ () => this.props.dispatch(clearCompleted()) }
					getComplete={ () => this.getComplete() }
				/>
			</div>
		)
	}
}

const  MyApp = connect((store) => {
    return  store;
})(App);

export default MyApp;