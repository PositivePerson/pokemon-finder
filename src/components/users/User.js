import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinnner';
import Abilities from '../repos/Repos';
import { Link } from 'react-router-dom';
import PokemonContext from '../../context/pokemon/pokemonContext';

const Pokemon = ({ match }) => {
	const pokemonContext = useContext(PokemonContext);

	const { getPokemon, loading, pokemon, getPokemonAbilities } = pokemonContext;

	useEffect(() => {
		getPokemon(match.params.pokemonName);
		console.log('match.params.pokemonName: ', match.params.pokemonName);
		console.log('match: ', match);
		getPokemonAbilities(match.params.pokemonName);
		// console.log('abilities: ', abilities);
		// eslint-disable-next-line
	}, []);

	// console.log('abilities: ', ...abilities);
	console.log('pokemon: ', pokemon);
	const { abilities, weight, ...forms } = pokemon;
	console.log('abilities: ', abilities);

	if (loading) return <Spinner />;

	return (
		<Fragment>
			<Link to='/' className='btn btn-light'>
				Back to Search
			</Link>
			<div className='card grid-2'>
				{/* <div className='all-center'>
					<img src={avatar_url} className='round-img' alt='' style={{ width: '150px' }} />
					<h1>{name}</h1>
					<p>Location: {location}</p>
				</div> */}
				<div>
					{/* {bio && (
						<Fragment>
							<h3>Bio</h3>
							<p>{bio}</p>
						</Fragment>
					)} */}
					<span className='btn btn-dark my-1'>Visit Pokemon Profile</span>
					<ul>
						<li>
							{forms.name && (
								<Fragment>
									<strong>Pokemon name: </strong> {forms.name}
								</Fragment>
							)}
						</li>
						<li>
							{weight && (
								<Fragment>
									<strong>Weight: </strong> {weight}
								</Fragment>
							)}
						</li>
						{/* <li>
							{blog && (
								<Fragment>
									<strong>Website: </strong> {blog}
								</Fragment>
							)}
						</li> */}
					</ul>
				</div>
			</div>
			<div className='card text-center'>
				{/* <div className='badge badge-primary'>Followers: {followers}</div>
				<div className='badge badge-success'>Following: {following}</div> */}
				{/* <div className='badge badge-light'>Public Abilities: {abilities}</div> */}
				{/* <div className='badge badge-dark'>Public Gists: {public_gists}</div> */}
			</div>
			{abilities && <Abilities abilities={abilities} />}
		</Fragment>
	);
};

export default Pokemon;
