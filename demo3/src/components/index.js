import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Header from './header';
import header from '../reducers/header'
import Main from './main';
import Footer from './footer';

const store = createStore(header);


const render = () => ReactDOM.render(
	<div>
		<Header />
		<Main  />
		<Footer />
	</div>,
    document.getElementById('todoapp')
)

render();

store.subscribe(render);
