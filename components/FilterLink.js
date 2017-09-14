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