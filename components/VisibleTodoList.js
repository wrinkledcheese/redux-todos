

const mapStateToTodoListProps = ( state ) => {
	return {
		todos: getVisibleTodos(
			state.todos,
			state.visibilityFilter
		)
	};
};

const mapDispatchToTodoListProps =  ( dispatch ) => {
	return {
		onTodoClick: ( id ) => {
			dispatch(toggleTodo( id ))
		}
	};
};

const { connect } = ReactRedux;
//import { connect } from 'react-redux';//bable/npm

const VisibleTodoList = connect(
	mapStateToTodoListProps,
	mapDispatchToTodoListProps
)(TodoList);