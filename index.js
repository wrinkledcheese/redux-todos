import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App From './components/App';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();

const store = createStore( 
	todoApp,
	persistedState
);

store.subscribe( thro() => {
	saveState( {
		todos: store.getState().todos
	});
})

ReactDOM.render( 
	<Provider store={ store }>
		<TodoApp />
	</Provider>,
	document.getElementById( 'root' )
);