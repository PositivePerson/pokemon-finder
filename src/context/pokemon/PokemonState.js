import React, { useReducer } from 'react';
import axios from 'axios';
import PokemonContext from './pokemonContext';
import PokemonReducer from './pokemonReducer';
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS, GET_POKEMON, GET_ABILITIES } from '../types';

const PokemonState = (props) => {
	const initialState = {
		// users: [],
		pokemon: {},
		abilities: [],
		loading: false
	};

	const [ state, dispatch ] = useReducer(PokemonReducer, initialState);

	// Search Users
	// const searchUsers = async (text) => {
	// 	setLoading();

	// 	const res = await axios.get(
	// 		`https://api.github.com/search/users?q=${text}&client_id=${process.env
	// 			.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	// 	);

	// 	dispatch({
	// 		type: SEARCH_USERS,
	// 		payload: res.data.items
	// 	});
	// };

	// Get Pokemon
	const getPokemon = async (name) => {
		setLoading();

		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

		dispatch({
			type: GET_POKEMON,
			payload: res.data
		});
	};

	// Get Abilities
	const getPokemonAbilities = async (name) => {
		setLoading();

		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

		dispatch({
			type: GET_ABILITIES,
			payload: res.data.abilities
		});
	};

	// Clear Users
	const clearUsers = () => dispatch({ type: CLEAR_USERS });

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<PokemonContext.Provider
			value={{
				// users: state.users,
				pokemon: state.pokemon,
				abilities: state.abilities,
				loading: state.loading,
				// searchUsers,
				clearUsers,
				getPokemon,
				getPokemonAbilities
			}}
		>
			{props.children}
		</PokemonContext.Provider>
	);
};

export default PokemonState;
