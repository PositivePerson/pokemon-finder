import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinnner';
import PokemonContext from '../../context/pokemon/pokemonContext';

const Users = () => {
	const pokemonContext = useContext(PokemonContext);

	const { loading, filtered, pokemons } = pokemonContext;
	// console.log('Pokemons from Users.js: ', pokemons);
	// console.log('Filtered from Users.js: ', filtered);

	if (loading) {
		return <Spinner />;
	} else {
		if (filtered.length < 1050)
			return <div style={pokemonStyle}>{filtered.map((pkmn) => <UserItem key={pkmn.name} user={pkmn} />)}</div>;
		else return null;
	}
};

const pokemonStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default Users;
