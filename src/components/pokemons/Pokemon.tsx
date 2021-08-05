import React, { Fragment, useEffect, useContext } from 'react';
import ArrowBack from '../../img/arrowBack.svg';

// import ProgressBar from 'react-bootstrap/ProgressBar';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Spinner from '../layout/Spinnner';
import Abilities from '../abs/Abilities';
import { Link } from 'react-router-dom';
import PokemonContext from '../../context/pokemon/pokemonContext';

const Pokemon = ({ match }: any) => {
	const pokemonContext = useContext(PokemonContext);

	const { clearPokemons, getPokemon, loading, pokemon, getPokemonAbilities } = pokemonContext;

	useEffect(() => {
		getPokemon(match.params.pokemonName);
		console.log('match.params.pokemonName: ', match.params.pokemonName);
		getPokemonAbilities(match.params.pokemonName);
		clearPokemons();
		// eslint-disable-next-line
	}, []);

	console.log('pokemon: ', pokemon);
	const { sprites, abilities, moves, stats, name, weight, forms, bio } = pokemon;
	console.log('abilities: ', abilities);

	if (loading || sprites === undefined) return <Spinner />;

	return (
		<div className="relative bg-gradient-to-br from-mediumDark to-medium opacity-75 shadow-xmd mx-auto h-4/5 w-4/5 rounded-ft pt-28 pl-40 pr-32 my-8">
			<div className="absolute flex align-center bg-dark w-5 h-4 left-0 w-24 h-11 rounded-r-2xl">
				<img
					className="w-8 mx-auto bg-transparent"
					src={ArrowBack}
					alt="Go back"
				/>
			</div>
			<div className="grid grid-cols-7">
				<div className="row-span-6 col-span-2 pl-8 relative">
					<div className="absolute text-white text-tiny font-medium top-full left-1/2 transform -translate-x-1/4">
						{weight && (
							<Fragment>
								Weight: {weight} kg
							</Fragment>
						)}
					</div>
					<div className='w-full h-full overflow-hidden bg-medium shadow-inner text-white text-center rounded-tf bg-opacity-50 pb-4 ml-auto'>
						<img src={sprites.front_default} alt={`${name} look`} className=' my-4 mx-auto transform scale-125' />
						<h3 className="capitalize font-smythe text-2xl bg-mediumDark whitespace-nowrap">{name}</h3>
					</div>
				</div>
				<div className="row-span-6"></div>
				{stats.map((stat: any) => (
					<div className="col-span-4 text-white capitalize font-medium text-tiny">
						{stat.stat.name}: <strong>{stat.base_stat}</strong>
						<div className="overflow-hidden h-2 mb-1 flex rounded bg-white">
							<div style={{ width: `${stat.base_stat}%` }} className="bg-contrast"></div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Pokemon;
