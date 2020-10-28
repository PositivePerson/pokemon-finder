import React, { useState, useContext, useEffect } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
import AlertContext from '../../context/alert/alertContext';
// import { Link } from 'react-router-dom';

const Search = () => {
	const pokemonContext = useContext(PokemonContext);
	const alertContext = useContext(AlertContext);

	const [ text, setText ] = useState('');
	const [ firstLoad, setFirstLoad ] = useState(true);

	// useEffect(
	// 	() => {
	// 		if (text.length === 1) PokemonContext.searchPokemons('');
	// 	},
	// 	[ text ]
	// );

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			alertContext.setAlert('Please enter something', 'light');
		} else {
			// pokemonContext.searchPokemons(text);
			pokemonContext.filterPokemons(text);
			setText('');
		}
	};

	const onChange = (e) => {
		setText(e.target.value);
		if (firstLoad) {
			pokemonContext.searchPokemons(text);
			setFirstLoad(false);
		} else {
			pokemonContext.filterPokemons(e.target.value);
		}
	};

	return (
		<div>
			<form className='form' onSubmit={onSubmit}>
				<input type='text' name='text' placeholder='Search Pokemon...' value={text} onChange={onChange} />
				<input type='submit' value='Search' className='btn btn-dark btn-block' />
				{/* <div>
					<Link to={`/pokemons/${text}`}>
						<input type='submit' value='Search' className='btn btn-dark btn-block' />
					</Link>
				</div> */}
			</form>
			{pokemonContext.filtered.length < 1049 && (
				<button className='btn btn-light btn-block' onClick={pokemonContext.clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};

export default Search;
