import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';
import { getVisibleTodos } from '../reducers';
import TodoList from './TodoList';

class VisibleTodoList extends Component {
	componentDidMount() {
		this.fetchData;
	}

	componentDidUpdate( prevProps ) {
		if( this.props.filter !== prevProps.filter ){
			this.fetchData()
		}
	}

	fetchData() {
		const { filter, fetchTodos } = this.props;
		fetchTodos( this.props.filter ).then( todos => 
			this.props.receiveTodos( todos )
		);
	}

	render() {
		const { toggleTodo, ...rest } = this.props;
		return (
			<TodoList 
				{ ...rest } 
				onTodoClick={ toggleTodo } 
			/>
		);
	}
}




const mapStateToProps = ( state, { params } ) => {
	const filter = params.filter || 'all';
	return {
		todos: getVisibleTodos(
			state,
			filter
		),
		filter
	};
};

const { connect } = ReactRedux;
//import { connect } from 'react-redux';//bable/npm

VisibleTodoList = withRouter( 
	connect(
		mapStateToTodoListProps,
		actions
	)( VisibleTodoList )
);

export default VisibleTodoList;