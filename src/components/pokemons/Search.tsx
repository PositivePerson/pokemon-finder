import React, { useState, useContext, useEffect } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
// import { Link } from 'react-router-dom';

// type Props = {
// 	className: string
// }

const Search = () => {
	const pokemonContext = useContext(PokemonContext);

	const [text, setText] = useState('');
	const [firstLoad, setFirstLoad] = useState(true);

	// "Home" page
	const onSubmit = (e: string) => {
		// e.preventDefault();
		if (inputValue === '') {
			alert('Input cannot be empty! wrr');
		} else {
			console.log(e);
			// pokemonContext.searchPokemons();
			pokemonContext.filterPokemons(inputValue);
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
		// pokemonContext.filterPokemons(e.target.value);
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
		// eslint-disable-next-line
	}, [])

	return (
		<form
			onSubmit={() => onSubmit(inputValue)}
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
			<button
				className="mt-2 bg-dark text-white outline-none rounded-full h-10 w-full"
				type="submit"
				id="login-button"
				// onSubmit={() => onSubmit(usernameValue, passwordValue)}
				disabled={disabledSubmit}
			>
				Search
			</button>
		</form>
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

// Search.propTypes = {
// 	className: PropTypes.string,
// }

export default Search;
