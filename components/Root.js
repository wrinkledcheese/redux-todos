const { Provider } ReactRedux;
//import { Provider } from 'react-redux';// babel/npm
//var Provider = require( 'react-redux').Provider;//es5
const { createStore } = Redux;

ReactDOM.render( 
	<Provider store={createStore( todoApp ) }>
		<TodoApp />
	</Provider>,
	document.getElementById( 'root' )
);