import React, { useContext } from 'react';
import Search from '../pokemons/Search'
import Pokemons from '../pokemons/Pokemons';

const PokemonsList = () => {

    return (
        <div>
            <Search />
            <Pokemons />
        </div>
    )
}

export default PokemonsList
