import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_POKEMON, GET_ABILITIES } from '../types';

export default (state, action) => {
	switch (action.type) {
		case SEARCH_USERS:
			return {
				...state,
				users: action.payload,
				loading: false
			};
		case GET_POKEMON:
			console.log(action.payload);
			return {
				...state,
				user: action.payload,
				loading: false
			};
		case CLEAR_USERS:
			return {
				...state,
				users: [],
				loading: false
			};
		case GET_ABILITIES:
			return {
				...state,
				abilities: action.payload,
				loading: false
			};
		case SET_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
};
