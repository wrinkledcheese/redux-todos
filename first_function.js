//code not tested

const function counter( state = 0, action ){
	switch ( action.type ) {
	case 'INCREMENT':
		return state + 1;
	case 'DECREMENT':
		return state - 1;
	default: 	
		return state;
}

const { createStore } = Redux;

const Counter = ( {
	value,
	onIncrement,
	onDecrement

}) => {
	<div
		<h1>{ value }</h1>
		<button onClick={ onIncrement } >+</button>
		<button onClick={ onDecrement } >-</button>
};

const store = createStore( counter ); 

const render = () => {
	ReactDom.render(
		<Counter value={ store.getState() }
		onIncrement={ () => {
			store.dispatch( {
				type : 'INCREMENT', 
			})
		}
		onDecrement={ () => {
			store.dispatch( {
				type : 'DECREMENT', 
			})
		}
		 />,
		}
		document.getElementById( 'root' )
	);
}; 

store.subscribe( render );
render();

document.addEventListener( 'click', () => { store.dispatch( { type : 'INCREMENT' } ); } );
