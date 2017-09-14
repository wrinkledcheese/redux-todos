

const mapStateToTodoListProps = ( state ) => ({
	todos: getVisibleTodos(
		state.todos,
		state.visibilityFilter
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