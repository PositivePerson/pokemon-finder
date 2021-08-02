import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import PokemonContext from '../../context/pokemon/pokemonContext';

type Props = {
	value: string,
	// 'handleSubmit' is NOT passed from Home Page
	handleSubmit?: Function
}

const Search = ({ value, handleSubmit }: Props) => {
	const pokemonContext = useContext(PokemonContext);

	// "Home" page
	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		pokemonContext.filterPokemons(inputValue);
		if (handleSubmit) handleSubmit(inputValue);
		setInputValue('');
	};

	const [inputValue, setInputValue] = useState(value);
	const [disabledSubmit, setDisabledSubmit] = useState(true);

	// "Pokemons list" page
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		if (!handleSubmit) pokemonContext.filterPokemons(e.target.value);
	}

	useEffect(() => {
		if ((inputValue) && disabledSubmit) setDisabledSubmit(false);
		else if ((!inputValue) && !disabledSubmit) setDisabledSubmit(true);
	}, [inputValue, disabledSubmit])

	useEffect(() => {
		pokemonContext.searchPokemons();
		// eslint-disable-next-line
	}, [])

	return (
		<form
			onSubmit={onSubmit}
			className="text-tiny w-96"
		>
			<input
				className="bg-transparent pl-3.5 border-white border placeholder-white text-white outline-none rounded-full h-10 w-full"
				type="text"
				placeholder="Search Pokemon..."
				value={inputValue}
				id="pokemon-input"
				onChange={onInputChange}
			/>
			{handleSubmit &&
				<button
					className="mt-2 bg-dark text-white outline-none rounded-full h-10 w-full"
					type="submit"
					id="login-button"
					disabled={disabledSubmit}
				>
					Search
				</button>
			}
		</form>
	);
};

Search.propTypes = {
	value: PropTypes.string.isRequired,
	handleSubmit: PropTypes.func,
}

export default Search;
