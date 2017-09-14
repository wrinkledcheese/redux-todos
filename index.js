const { Provider } ReactRedux;
//import { Provider } from 'react-redux';// babel/npm
//var Provider = require( 'react-redux').Provider;//es5
const { createStore } = Redux;

const persistedState = {
	todos: [{
		id : '0',
		text: 'Welcome back!',
		completed: false
	}],
};


const store = createStore( 
	todoApp,
	persistedState
);
console.log( store.getState() );

ReactDOM.render( 
	<Provider store={ store }>
		<TodoApp />
	</Provider>,
	document.getElementById( 'root' )
);