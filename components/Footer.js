const Footer = () => {
	<p>
		Show:
		{ ' ' }
		<FilterLink filter='all'>
			All
		</FilterLink>
		{ ', ' }
		<FilterLink filter='active'>
			Active
		</FilterLink>
		{ ', ' }
		<FilterLink filter='completed'>
			Completed
		</FilterLink>
	</p>
}