import todoApp from './reducers';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

const thunk = ( store ) => ( next ) => ( action ) =>
	typeof action === 'function' ?
		action( store.dispatch, store.getState ) :
		next( action );

const configureStore = () => {
	
	const middlewares = [ thunk ];

	DEBUG = true;//instead of process.env.NODE_ENV !== 'production' because I don't have node
	if( DEBUG ){
		middlewares.push( createLogger() );
	}

	middlewares.push( promise );

	return createStore( 
		todoApp,
		//persisted state is optional
		applyMiddleware( ...middlewares )
	);
};

export default configureStore;
