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