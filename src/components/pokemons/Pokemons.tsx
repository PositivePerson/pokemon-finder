import React, { useContext, useEffect } from 'react';
import PokeItem from './PokeItem';
import Spinner from '../layout/Spinnner';
import Loading from '../../img/Loading.gif';
import PokemonContext from '../../context/pokemon/pokemonContext';

type Pkmn = {
	name: string,
	url: string
}

type Props = {
	showBottomPokes: boolean,
	setShowBottomPokes: Function
}

const Pokemons = ({ showBottomPokes, setShowBottomPokes }: Props) => {
	const pokemonContext = useContext(PokemonContext);

	const { loading, filtered } = pokemonContext;

	useEffect(() => {
		if (filtered.length > 13 && showBottomPokes) setShowBottomPokes(false);
		else if (filtered.length <= 13 && !showBottomPokes) setShowBottomPokes(true);
	}, [filtered, showBottomPokes, setShowBottomPokes]);

	if (loading) {
		return <Spinner />;
	} else {
		if (filtered.length < 1050)
			return (
				<div style={pokemonStyle}>
					{filtered.map((pkmn: Pkmn) =>
						<PokeItem key={pkmn.name} character={pkmn} />
					)}
				</div>
			);
		else return null;
	}
};

const pokemonStyle = {
	display: 'grid',
	gridTemplateColumns: 'repeat(5, 1fr)',
	gridGap: '1rem 0rem'
};

export default Pokemons;
