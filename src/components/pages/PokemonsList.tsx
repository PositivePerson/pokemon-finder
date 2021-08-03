import React, { Fragment, useState } from 'react';
import Search from '../pokemons/Search'
import Pokemons from '../pokemons/Pokemons';
import BottomPokes from '../../img/BottomPokes.svg';

const PokemonsList = ({ match }: any) => {

    const [showBottomPokes, setShowBottomPokes] = useState(true);

    return (
        <Fragment>
            <div className="flex justify-center mt-16">
                <Search value={match.params.pokemonName} />
            </div>
            <div className="bg-gradient-to-br from-mediumDark to-medium opacity-75 shadow-xmd mx-auto h-5/6 w-4/5 rounded-ft px-12 pt-16 mt-3">
                <Pokemons showBottomPokes={showBottomPokes} setShowBottomPokes={setShowBottomPokes} />
            </div>
            {showBottomPokes &&
                <img
                    className="absolute bottom-3 right-14 md:w-80"
                    src={BottomPokes}
                    alt="Squirtle and Bulbasaur"
                />
            }
        </Fragment>
    )
}

export default PokemonsList
