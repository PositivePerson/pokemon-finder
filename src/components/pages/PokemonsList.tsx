import React, { useContext } from 'react';
import Search from '../pokemons/Search'
import Pokemons from '../pokemons/Pokemons';

const PokemonsList = ({ match }: any) => {

    return (
        <div>
            <Search value={match.params.pokemonName} />
            <Pokemons />
        </div>
    )
}

export default PokemonsList
