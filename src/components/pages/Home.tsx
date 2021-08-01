import React, { Fragment } from 'react';
import Search from '../pokemons/Search';
import Users from '../pokemons/Pokemons';
import styled from 'styled-components';

const SearchComponent = styled(Search)`
	margin-left: 2rem;
`;

const Home = () => (
	<Fragment>
		<SearchComponent className='' />
		<Users />
	</Fragment>
);

export default Home;
