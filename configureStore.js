import todoApp from './reducers';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

const configureStore = () => {
	
	const middlewares = [ promise ];

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
