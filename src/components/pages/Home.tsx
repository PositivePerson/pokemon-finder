import React from 'react';
import Search from '../pokemons/Search'
import MainPikachu from '../../img/Pikachu.svg';
import BottomPokes from '../../img/BottomPokes.svg';

const Home = () => (
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
				<Search />
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
	// { 
	// 	<Pokemons /> 
	// }
);

export default Home;
