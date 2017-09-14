const getVisibleTodos = (
	todos,
	filter
) => {
	switch ( filter ) {
		case 'all':
			return todos;
		case 'completed':
			return todos.filter( 
				t => t.completed 
			);
		case 'active':
			return todos.filter( 
				t => !t.completed 
			);
		default:
			throw new Error( `Unknown filter: ${ filter }.` )
	}
};

const mapStateToTodoListProps = ( state, ownProps ) => ({
	todos: getVisibleTodos(
		state.todos,
		ownProps.filter
	)
});

const mapDispatchToTodoListProps =  ( dispatch ) => ({
	onTodoClick( id ) {
		dispatch(toggleTodo( id ))
	}
});

const { connect } = ReactRedux;
//import { connect } from 'react-redux';//bable/npm

const VisibleTodoList = connect(
	mapStateToTodoListProps,
	mapDispatchToTodoListProps
)(TodoList);