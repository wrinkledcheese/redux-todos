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