import React from 'react';
import { useHistory } from 'react-router';
import Search from '../pokemons/Search'
import MainPikachu from '../../img/Pikachu.svg';
import BottomPokes from '../../img/BottomPokes.svg';

const Home = () => {
	const history = useHistory();

	const handleSubmit = (typedPokemon: string) => {
		console.log(typedPokemon);
		history.push(`/list/${typedPokemon}`);
	};

	return (
		<div className="grid grid-cols-2 gap-3 mt-12 h-5/6">
			<div className="flex items-self-center justify-self-center ml-10 mb-14">
				<img
					className="md:w-96 m-auto"
					src={MainPikachu}
					alt="Pikachu running"
				/>
			</div>
			<div className="grid items-end mt-10">
				<div>
					<Search handleSubmit={handleSubmit} />
				</div>
				<div className="ml-7">
					<img
						className="md:w-88"
						src={BottomPokes}
						alt="Squirtle and Bulbasaur"
					/>
				</div>
			</div>
		</div>
	)
};

export default Home;
