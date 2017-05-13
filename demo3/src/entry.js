import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import MyApp from './components/App';
import appReducer from './reducers/app';

const store = createStore(appReducer);

render(
    <Provider store={store}>
        <MyApp />
    </Provider>,
    document.getElementById('todoapp')
)


store.subscribe(() => {
    console.log("store changed.", store.getState());
});
/*
store.dispatch({type: "NEW_ITEM", text:"eee"});*/
