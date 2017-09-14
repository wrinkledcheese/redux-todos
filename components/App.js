const TodoApp = () => (
		
	const visibleTodos = getVisibleTodos(
		todos,
		visibilityFilter
	);
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);

const todoApp = combineReducers( {
	//ES6 object literal shorthand notation
	todos,
	visibilityFilter
});