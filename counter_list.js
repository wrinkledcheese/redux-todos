const addCounter = ( list ) => {
	return list[ ...list, 0 ];
};

const removeCounter = ( ) => {
	return [
		...list.slice( 0, index,
		...list.slice( index + 1 )
	];
};

const incrementCounter = () => {
	return [
		...list.slice( 0, index ),
		list[ index ] + 1,
		...list.slice( index + 1 )
	];
};

const testAddCounter = () => {
	const listBefore = [];
	cost listAfter = [ 0 ];

	deepFreeze( listBefore );

	expect(
		addCounter( listBefore )
		).toEqual( listAfter );
};

const testRemoveCounter = () => {
	const listBefore = [ 0, 10, 20 ];
	const listAfter = [ 0, 20 ];

	deepFreeze( listBefore );

	expect( 
		removeCounter( listBefore, 1 )
	).toEqual( listAfter );
};

const testIncrementCounter = () => {
	const listBefore = [ 0, 10, 20 ];
	const listAfter = [ 0, 11, 20 ];

	deepFreeze( listBefore );

	expect(
		incrementCounter( listBefore, 1 )
	).toEqual( listAfter );
};

testAddCounter();
testRemoveCounter();
testIncrementCounter();
console.log( 'All tests passed.' );