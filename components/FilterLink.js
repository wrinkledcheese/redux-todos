import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from './Link';

const mapStateToFilterLinkProps = ( state, ownProps ) => ({
	active: { ownProps.filter === state.visibleTodos }l
});

const mapDispatchToFilterLinkProps = ( dispatch, ownProps ) => ({
	onClick() { 
		dispatch(setVisibilityFilter( ownProps.filter))
	}
});

const FilterLink = connect (
	mapStateToFilterLinkProps,
	mapDispatchToFilterLinkProps
)( Link );