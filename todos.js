const todo = ( state, action ) => {
	switch( action.type ) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false
			};
		case 'TOGGLE_TODO':
			if( state.id !== action.id ) {
				return state;
			}
			return {
				...state,
				completed: !state.completed
				};
		default:
			return state;
	}
};

const todos = ( state = [], action ) => {
	switch( action.type ){
		case 'ADD_TODO':
			return [
				...state,
				todo( undefined, action )
			];
		case 'TOGGLE_TODO':
			returd state.map( t => todo( t, action ) );
		default:
			return state;
	}
};

const visibilityFilter = (
	state = 'SHOW_ALL',
	action
) => {
	switch( action.type ){
		case 'SET_VISIBILITY_FILTER':
			return action.filter;
		default:
			return state;
	}
};

const {combineReducers} = Redux

const todoApp = combineReducers( {
	//ES6 object literal shorthand notation
	todos,
	visibilityFilter
});

let nextTodoId = 0;
const addTodo = ( text ) => {
	return  {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	};
};

const setVisibilityFilter = ( filter ) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	};
};

const toggleTodo = ( id ) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

const { Component } = React;

const Link = ({
	active,
	children,
	onClick
}) => {
	if ( active ){
		return <span>{ children }</span>;
	}
	return (
		<a href='#'
			onClick={ e => {
				e.preventDefault();
				onClick();
			}}
		>
			{ children }
		</a>
	);
};

const mapStateToFilterLinkProps = ( state, ownProps ) => {
	active: { ownProps.filter === state.visibleTodos }l
};

const mapDispatchToFilterLinkProps = ( dispatch, ownProps ) => {
	return {
		onClick: () => { 
			dispatch(setVisibilityFilter( ownProps.filter))
		}
	};
};

const FilterLink = connect (
	mapStateToFilterLinkProps,
	mapDispatchToFilterLinkProps
)( Link );

const Todo = ( {
	onClick,
	completed,
	text
}) => (
	<li 
		key={todo.id}
		onClick={ onClick }
		style={ {
			textDecoration:
				completed ?
				'line-through' :
				'none'
		}}>
		{text}
	</li>
);

const TodoList = ({
	todos,
	onTodoClick
}) => {
	<ul>
		{ todos.map( todo=> 
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => onTodoClick( todo.id )}
			/>
		)}
	</ul>
}



let AddTodo = ( { dispatch } ) => {
	let input;

	return (
		<div>
			<input ref={ node => {
				input = node;
			}} />
			<button  onClick={ () => {
				dispatch( addTodo( input.value ) );
				input.value = '';
			}}>
				Add Todo
			</button>
		</div>
	);

};
/*AddTodo = connect( 
	null,//don't subscribe to the store
	null//pass dispatch by context
)( AddTodo );*/
AddTodo = connect()( AddTodo );//same as double null

const Footer = () => {
	<p>
		Show:
		{ ' ' }
		<FilterLink filter='SHOW_ALL'>
			All
		</FilterLink>
		{ ', ' }
		<FilterLink filter='SHOW_ACTIVE'>
			Active
		</FilterLink>
		{ ', ' }
		<FilterLink filter='SHOW_COMPLETED'>
			Completed
		</FilterLink>
	</p>
}

const getVisibleTodos = (
	todos,
	filter
) => {
	switch ( filter ) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_COMPLETED':
			return todos.filter( 
				t => t.completed 
			);
		case 'SHOW_ACTIVE':
			return todos.filter( 
				t => !t.completed 
			);
	}
};

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

const { Provider } ReactRedux;
//import { Provider } from 'react-redux';// babel/npm
//var Provider = require( 'react-redux').Provider;//es5
const { createStore } = Redux;

ReactDOM.render( 
	<Provider store={createStore( todoApp ) }>
		<TodoApp />
	</Provider>,
	document.getElementById( 'root' )
);
