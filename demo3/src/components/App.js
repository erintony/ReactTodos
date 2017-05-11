/**
 * the smart component
 */
import React from 'react';
//import Header from './header';
import add from '../actions/headerActions';
import Main from './main';
import Footer from './footer';
import { connect } from 'react-redux';

class App extends React.Component {

	componentWillMount() {
		//this.props.getStore.dispatch(add({value:"2333eee", done:false}));
		console.dir(this.props);
	}

	render() {

		return <h1>todos.length </h1>
	}
}

const  MyApp = connect((store) => {
    return  store;
})(App);

export default MyApp;