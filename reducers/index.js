import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers( {
	//ES6 object literal shorthand notation
	todos,
	visibilityFilter
});

export default todoApp;