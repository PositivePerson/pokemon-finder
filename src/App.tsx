import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Pokemon from './components/pokemons/Pokemon';
import PokemonsList from './components/pages/PokemonsList';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import PrivateRoute from './components/routing/PrivateRoute';

import PokemonState from './context/pokemon/PokemonState';

import './App.css';


const App = () => {

	return (
		<PokemonState>
			<Router>
				<div className='md:h-screen'>
					<Navbar />
					{/* <Alert /> */}
					<Switch>
						<PrivateRoute exact path='/' component={Home} />
						<Route exact path='/searching/:pokemonName' component={PokemonsList} />
						<Route exact path='/pokemons/:pokemonName' component={Pokemon} />
						<Route exact path='/about' component={About} />
						<Route component={NotFound} status={404} />
					</Switch>
				</div>
			</Router>
		</PokemonState>
	);
};

export default App;
