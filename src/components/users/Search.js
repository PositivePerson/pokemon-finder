import React, { useState, useContext } from 'react';
import PokemonContext from '../../context/pokemon/pokemonContext';
import AlertContext from '../../context/alert/alertContext';
import { Link } from 'react-router-dom';

const Search = () => {
	const pokemonContext = useContext(PokemonContext);
	const alertContext = useContext(AlertContext);

	const [ text, setText ] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			alertContext.setAlert('Please enter something', 'light');
		} else {
			pokemonContext.getPokemon(text);
			setText('');
		}
	};

	const onChange = (e) => setText(e.target.value);

	return (
		<div>
			<form className='form' onSubmit={onSubmit}>
				<input type='text' name='text' placeholder='Search Pokemon...' value={text} onChange={onChange} />
				{/* <input type='submit' value='Search' className='btn btn-dark btn-block' /> */}
				<div>
					<Link to={`/pokemons/${text}`}>
						<input type='submit' value='Search' className='btn btn-dark btn-block' />
					</Link>
				</div>
			</form>
			{/* {pokemonContext.users.length > 0 && (
				<button className='btn btn-light btn-block' onClick={pokemonContext.clearUsers}>
					Clear
				</button>
			)} */}
		</div>
	);
};

export default Search;
