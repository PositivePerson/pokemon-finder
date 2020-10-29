import React, { Fragment } from 'react';
import Search from '../pokemons/Search';
import Users from '../pokemons/Users';

const Home = () => (
	<Fragment>
		<Search />
		<Users />
	</Fragment>
);

export default Home;
