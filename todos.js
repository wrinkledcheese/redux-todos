const toggleTodo = ( todo ) => {
	return {
		...todo, 
		completed : !todo.completed
	};
};

const testToggleTodo = () => {
	const todoBefore = {
		id = 0,
		text = 'Leard Redux',
		completed = false
	};
	const todoAfter = {
		id = 0,
		text = 'Leard Redux',
		completed = true
	};

	expect(
		toggleTodo( todoBefore )
	).toEqual( todoAfter );
};

testToggleTodo();
console.log( 'All tests passed.' );