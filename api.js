import { v4 }from 'node-uuid';

//this is a fake in memory implemention of something
//that would be implemented by calling a rest server

const fakeDatabas = {
	todos: [{
		id: v4(),
		text: 'hey',
		completed: true
	},
	{
		id: v4(),
		text: 'ho',
		completed: true
	},
	{
		id: v4(),
		text: 'let\'s go',
		completed: false
	}]
};

const delay = ( ms ) =>
	new Promise(  resolve => setTimeout( resolve, ms ) );

export const fetchTodos = ( filter ) =>
	delay( 500 ).then( () => {
		switch( filter ){
			case 'all':
				return fakeDatabase.todos;
			case 'active':
				return fakeDatabase.todos.filter( t => !t.completed );
			case 'completed':
				return fakeDatabase.todos.filter( t => t.completed );
			default:
				throw new Error( `Unknown filter: ${ filter }.`);
		}
	});