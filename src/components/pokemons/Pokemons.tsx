import React, { useContext } from 'react';
import UserItem from './PokeItem';
import Spinner from '../layout/Spinnner';
import PokemonContext from '../../context/pokemon/pokemonContext';

type Pkmn = {
	name: string
}

const Users = () => {
	const pokemonContext = useContext(PokemonContext);

	const { loading, filtered } = pokemonContext;

	if (loading) {
		return <Spinner />;
	} else {
		if (filtered.length < 1050)
			return <div style={pokemonStyle}>{filtered.map((pkmn: Pkmn) => <UserItem key={pkmn.name} user={pkmn} />)}</div>;
		else return null;
	}
};

const pokemonStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default Users;
