import { SEARCH_POKEMONS, SET_LOADING, CLEAR_USERS, GET_POKEMON, FILTER_POKEMONS, GET_ABILITIES } from '../types';

export default (state, action) => {
	switch (action.type) {
		case SEARCH_POKEMONS:
			console.log(action.payload);
			return {
				...state,
				pokemons: action.payload,
				loading: false
			};
		case GET_POKEMON:
			console.log('GET_POKEMON: ', action.payload);
			return {
				...state,
				pokemon: action.payload,
				loading: false
			};
		case FILTER_POKEMONS:
			console.log('Regex action payload: ', action.payload);
			return {
				...state,
				filtered: state.pokemons.filter((pokemon) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return pokemon.name.match(regex);
				})
			};
		case CLEAR_USERS:
			return {
				...state,
				filtered: [],
				loading: false
			};
		case GET_ABILITIES:
			// console.log('action.payload: ', action.payload);
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
