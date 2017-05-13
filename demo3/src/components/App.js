/**
 * the smart component
 */
import React from 'react';
import Header from './header';
import { add } from '../actions/headerActions';
import TodoList from './TodoList';
import Footer from './footer';
import { connect } from 'react-redux';

class App extends React.Component {

	componentWillMount() {
		this.props.dispatch(add("2333eee"));
		console.dir(this.props);
	}

	render() {
		return (
			<div>
				<Header addTodo={text => this.props.dispatch(add(text))} />
				<TodoList todos = {this.props.todos} />
			</div>
		)
	}
}

const  MyApp = connect((store) => {
    return  store;
})(App);

export default MyApp;