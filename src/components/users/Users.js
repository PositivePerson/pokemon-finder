import React, { useContext } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinnner';
import PokemonContext from '../../context/pokemon/pokemonContext';

const Users = () => {
	const pokemonContext = useContext(PokemonContext);

	const { loading, users } = pokemonContext;

	if (loading) {
		return <Spinner />;
	} else {
		console.log(users);
		console.log(pokemonContext);
		return <div style={userStyle}>{users.map((user) => <UserItem key={user.id} user={user} />)}</div>;
	}
};

const userStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gridGap: '1rem'
};

export default Users;
