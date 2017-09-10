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

const { createStore } = Redux; /* ES6 */
// var createStore = Redux.createStore; /*JS*/
// import { createStore } from 'redux'; /*react + bable*/

const store = createStore( counter ); 

store.subscribe( () => { document.body.innerText = store.getState(); } );

document.addEventListener( 'click', () => { store.dispatch( { type : 'INCREMENT' } ); } );
