import React, { useState, useContext, useEffect } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
import styled from 'styled-components'
// import { Link } from 'react-router-dom';

const Form = styled.form`
	width: 20rem;
	font-size: 13px;

	input, button {
		width: 100%;
		color: #FFF;
		border-radius: 20px;
		height: 2.3rem;
		outline: none;
	}

	input {
		background: transparent;
		border: 1px solid white;
		padding-left: .8rem;

		::placeholder {
			color: #FFF;
		};
	}

	button {
		margin-top: 5px;
		background: var(--Dark);
	}
`;

const Search = () => {
	const pokemonContext = useContext(PokemonContext);

	const [text, setText] = useState('');
	const [firstLoad, setFirstLoad] = useState(true);

	const onSubmit = (e: string) => {
		// e.preventDefault();
		if (inputValue === '') {
			alert('Input cannot be empty! wrr');
		} else {
			console.log(e);
			pokemonContext.searchPokemons(inputValue);
			// pokemonContext.filterPokemons(inputValue);
			setInputValue('');
		}
	};

	// const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	setText(e.target.value);
	// 	if (firstLoad) {
	// 		pokemonContext.searchPokemons(text);
	// 		setFirstLoad(false);
	// 	} else {
	// 		pokemonContext.filterPokemons(e.target.value);
	// 	}
	// };



	const [inputValue, setInputValue] = useState('');
	const [disabledSubmit, setDisabledSubmit] = useState(true);

	// "Pokemons list" page
	const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
		pokemonContext.filterPokemons(e.target.value);
	}

	// onSubmit is coming  from Props, here it is only for testing
	// const onSubmit = (a: string) => {
	// 	console.log(a);
	// }

	useEffect(() => {
		if ((inputValue) && disabledSubmit) setDisabledSubmit(false);
		else if ((!inputValue) && !disabledSubmit) setDisabledSubmit(true);
	}, [inputValue, disabledSubmit])

	useEffect(() => {
		pokemonContext.searchPokemons();
	}, [])

	return (
		<Form
			onSubmit={() => onSubmit(inputValue)}
		>
			<input
				type="text"
				placeholder="Search Pokemon..."
				value={inputValue}
				id="pokemon-input"
				onChange={onInputChange}
			/>
			<button
				type="submit"
				id="login-button"
				// onSubmit={() => onSubmit(usernameValue, passwordValue)}
				disabled={disabledSubmit}
			>
				Search
			</button>
		</Form>
	);

	// return (
	// 	<div>
	// 		<form className='form' onSubmit={onSubmit}>
	// 			<input type='text' name='text' placeholder='Search Pokemon...' value={text} onChange={onChange} />
	// 			<input type='submit' value='Search' className='btn btn-dark btn-block' />
	// 			{/* <div>
	// 				<Link to={`/pokemons/${text}`}>
	// 					<input type='submit' value='Search' className='btn btn-dark btn-block' />
	// 				</Link>
	// 			</div> */}
	// 		</form>
	// 		{pokemonContext.filtered.length < 1050 &&
	// 			pokemonContext.filtered.length !== 0 && (
	// 				<button className='btn btn-light btn-block' onClick={pokemonContext.clearPokemons}>
	// 					Clear
	// 				</button>
	// 			)}
	// 	</div>
	// );
};

export default Search;
