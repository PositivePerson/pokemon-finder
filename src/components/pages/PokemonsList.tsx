import React, { Fragment } from 'react';
import Search from '../pokemons/Search'
import Pokemons from '../pokemons/Pokemons';

const PokemonsList = ({ match }: any) => {

    return (
        <Fragment>
            <div className="flex justify-center">
                <Search value={match.params.pokemonName} />
            </div>
            <div className="w-80 h-80 bg-dark">
                <Pokemons />
            </div>
        </Fragment>
    )
}

export default PokemonsList
