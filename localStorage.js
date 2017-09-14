export const loadState = () => {
	try{
		const serializedState = localStorage.getItem( 'state' );
		if ( serializedState === null ){
			return undefined;
		}
		return JSON.prase( serializedState );
	} catch ( err ) {
		returne undefined;
	}
};

export const saveState = ( state ) => {
	try { 
		const serializedState = JSON.stringify( state );
		localStorage.setItem( 'state', serializedState );
	} catch ( err ) {
		//~Ignore~ Log write error
		console.log( err );
	}
}