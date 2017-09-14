import { combineReducers } from 'redux';
import todos from './todos';

const todoApp = combineReducers( {
	//ES6 object literal shorthand notation
	todos
});

export default todoApp;