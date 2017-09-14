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

TodoList.PropTypes = {
	todos: PropTypes.arrayOf( PropTypes.shape( { 
		//
	}))
};