import React, { useReducer } from 'react';
import axios from 'axios';
import PokemonContext from './pokemonContext';
import PokemonReducer from './pokemonReducer';
import { SEARCH_POKEMONS, SET_LOADING, CLEAR_POKEMONS, GET_POKEMON, FILTER_POKEMONS, GET_ABILITIES } from '../types';

type Props = {
	children: any
}

const PokemonState = (props: Props) => {
	const initialState = {
		pokemons: [],
		filtered: [],
		pokemon: {},
		abilities: [],
		loading: false
	};

	const [ state, dispatch ] = useReducer(PokemonReducer, initialState);

	// Search Pokemons
	const searchPokemons = async (text: string) => {
		setLoading();

		const res = await axios.get(
			// `https://api.github.com/search/users?q=${text}&client_id=${process.env
			// 	.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			`https://pokeapi.co/api/v2/pokemon/?limit=1500&offset=0`
		);

		dispatch({
			type: SEARCH_POKEMONS,
			payload: res.data.results
		});
	};

	// Get Pokemon
	const getPokemon = async (name: string) => {
		setLoading();

		let res;
		try {
			res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
		} catch (error) {
			console.log(error.response);
			return 0;
		}

		dispatch({
			type: GET_POKEMON,
			payload: res.data
		});
	};

	// Filter Pokemons
	const filterPokemons = (text: string) => {
		dispatch({
			type: FILTER_POKEMONS,
			payload: text
		});
	};

	// Get Abilities
	const getPokemonAbilities = async (name: string) => {
		setLoading();

		const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

		dispatch({
			type: GET_ABILITIES,
			payload: res.data.abilities
		});
	};

	// Clear Users
	const clearPokemons = () => dispatch({ type: CLEAR_POKEMONS });

	// Set Loading
	const setLoading = () => dispatch({ type: SET_LOADING });

	return (
		<PokemonContext.Provider
			value={{
				pokemons: state.pokemons,
				filtered: state.filtered,
				pokemon: state.pokemon,
				abilities: state.abilities,
				loading: state.loading,
				searchPokemons,
				clearPokemons,
				getPokemon,
				filterPokemons,
				getPokemonAbilities
			}}
		>
			{props.children}
		</PokemonContext.Provider>
	);
};

export default PokemonState;
