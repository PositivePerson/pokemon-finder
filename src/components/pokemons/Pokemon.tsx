import React, { Fragment, useEffect, useContext } from 'react';

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
		// console.log('match: ', match);
		getPokemonAbilities(match.params.pokemonName);
		clearPokemons();
		// console.log('abilities: ', abilities);
		// console.log('pokemon: ', pokemon);
		// eslint-disable-next-line
	}, []);

	console.log('pokemon: ', pokemon);
	const { sprites, abilities, moves, stats, name, weight } = pokemon;
	console.log('abilities: ', abilities);

	if (loading || sprites === undefined) return <Spinner />;

	return (
		<Fragment>
			<Link to='/' className='btn btn-light'>
				Back to Search
			</Link>
			<div className='card grid-2'>
				<div className='all-center'>
					<img src={sprites.front_default} className='round-img' alt='' style={{ width: '150px' }} />
					<h1>{name}</h1>
					<p>
						{weight && (
							<Fragment>
								<strong>Weight: </strong> {weight}
							</Fragment>
						)}
					</p>
					{/* <p>
						<strong>Forms:</strong>{' '}
						{forms.map((form, index) => (
							<span>
								{index ? ', ' : ''}
								{form.name}
							</span>
						))}
					</p> */}
				</div>
				<div>
					{/* {bio && (
						<Fragment>
							<h3>Bio</h3>
							<p>{bio}</p>
						</Fragment>
					)} */}
					{/* <span className='btn btn-dark my-1'>Visit Pokemon Profile</span> */}
					<ul>
						{stats.map((stat: any) => (
							<li>
								<Fragment>
									<strong>{stat.stat.name}: </strong> {stat.base_stat}
									<div>
										{/* <ProgressBar variant='danger' now={stat.base_stat} /> */}
										There should be a progressbar
									</div>
								</Fragment>
							</li>
						))}
					</ul>
				</div>
			</div>
			{/* <div className='card text-center'> */}
			{/* <div className='badge badge-primary'>Followers: {followers}</div>
				<div className='badge badge-success'>Following: {following}</div> */}
			{/* <div className='badge badge-light'>Public Abilities: {abilities}</div> */}
			{/* <div className='badge badge-dark'>Public Gists: {public_gists}</div> */}
			{/* </div> */}
			<div className=' pt-3'>
				<h4>
					<strong>Abilities:</strong>
				</h4>
				{abilities && <Abilities abilities={abilities} />}
			</div>

			{/* {abilities && <Abilities moves={moves} />} */}
		</Fragment>
	);
};

export default Pokemon;
