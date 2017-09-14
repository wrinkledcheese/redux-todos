import React from 'react';
import Footer from './Footer';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

const App = ( { params } ) => (
		
	const visibleTodos = getVisibleTodos(
		todos,
		visibilityFilter
	);
	<div>
		<AddTodo />
		<VisibleTodoList 
			filter={ params.filter || 'all' }
		/>
		<Footer />
	</div>
);

