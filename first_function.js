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

expect( counter( 0, { type: 'INCREMENT'} ) ).toEqual( 1 );
expect( counter( 1, { type: 'INCREMENT'} ) ).toEqual( 2 );
expect( counter( 0, { type: 'DECREMENT'} ) ).toEqual( 1 );
expect( counter( 0, { type: 'DECREMENT'} ) ).toEqual( 0 );
expect( counter( 1, { type: 'UNHANDLED_ACTION'} ) ).toEqual( 1 );
expect( counter( undefined, {} ) ).toEqual( 0 );

console.log( 'test passed' );


