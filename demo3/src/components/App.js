/**
 * the smart component
 */
import React from 'react';
import Header from './header';
import { add } from '../actions/todos';
import VisableTodoList from '../container/VisableTodoList';
import Footer from './footer';
import { connect } from 'react-redux';

import styles from '../css/todos.css';


class App extends React.Component {

	componentWillMount() {
		this.props.dispatch(add("2333eee"));
		console.dir(this.props);
	}

	render() {
		return (
			<div>
				<Header addTodo={text => this.props.dispatch(add(text))} />
				<VisableTodoList />
			</div>
		)
	}
}

const  MyApp = connect((store) => {
    return  store;
})(App);

export default MyApp;