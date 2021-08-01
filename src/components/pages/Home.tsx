import React, { Fragment } from 'react';
import Search from '../pokemons/Search';
import Users from '../pokemons/Pokemons';
import styled from 'styled-components';

const SearchComponent = styled(Search)`
	font-weight: 600;
`;

const Home = () => (
	<Fragment>
		<div>
			<SearchComponent />
		</div>
		<Users />
	</Fragment>
);

export default Home;
