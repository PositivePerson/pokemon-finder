import React, { Fragment } from 'react';
import Search from '../pokemons/Search'
import Pokemons from '../pokemons/Pokemons';
import BottomPokes from '../../img/BottomPokes.svg';

const PokemonsList = ({ match }: any) => {

    return (
        <Fragment>
            <div className="flex justify-center mt-20">
                <Search value={match.params.pokemonName} />
            </div>
            <div className="bg-gradient-to-br from-mediumDark to-medium opacity-75 shadow-xmd mx-auto h-5/6 w-4/5 rounded-ft mt-5">
                <Pokemons />
            </div>
            <img
                className="absolute bottom-3 right-14 md:w-80"
                src={BottomPokes}
                alt="Squirtle and Bulbasaur"
            />
        </Fragment>
    )
}

export default PokemonsList
