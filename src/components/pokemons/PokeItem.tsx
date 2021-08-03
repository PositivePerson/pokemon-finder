import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';

type Props = {
	character: {
		name: string,
		url: string
	}
}

const PokeItem = ({ character }: Props) => {
	console.log(character);

	const [imageLink, setImageLink] = useState('');

	useEffect(() => {
		async function fetchData() {
			const poke = await axios.get(character.url);
			console.log("poke, ", poke);
			setImageLink(poke.data.sprites.front_default);
			return poke;
		}
		fetchData();
		// eslint-disable-next-line
	}, [])

	return (
		<Link to={`/pokemons/${character.name}`} className="flex justify-center">
			<div className='group w-28 overflow-hidden hover:bg-medium hover:shadow-inner text-white text-center rounded-tf pb-4 mx-2'>
				<img src={imageLink} alt={`${character.name} look`} className='-mb-2 mx-auto max-w-96 max-h-96' />
				<h3 className="capitalize font-smythe group-hover:bg-mediumDark whitespace-nowrap">{character.name}</h3>
			</div>
		</Link>
	);
};

PokeItem.propTypes = {
	character: PropTypes.object.isRequired
};

export default PokeItem;
