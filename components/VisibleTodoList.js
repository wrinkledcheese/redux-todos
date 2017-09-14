import { connect }  from 'react-redux';
import { withRouter } from 'react-router';
import { toggleTodo } from '../actions';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';



const mapStateToProps = ( state, { params } ) => ({
	todos: getVisibleTodos(
		state,
		params.filter || 'all'
	)
});

const { connect } = ReactRedux;
//import { connect } from 'react-redux';//bable/npm

const VisibleTodoList = withRouter( 
	connect(
		mapStateToTodoListProps,
		{ onTodoClick: toggleTodo }
	)( TodoList )
);

export default VisibleTodoList;