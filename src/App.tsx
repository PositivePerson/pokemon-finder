import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/pokemons/Users';
import Pokemon from './components/pokemons/Pokemon';
import Search from './components/pokemons/Search';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import NotFound from './components/pages/NotFound';
import PrivateRoute from './components/routing/PrivateRoute';

import PokemonState from './context/pokemon/PokemonState';
import AlertState from './context/alert/AlertState';

import './App.css';
import AuthState from './context/auth/AuthState';


const App = () => {

	return (
		<AuthState>
			<PokemonState>
				<AlertState>
					<Router>
						<div className='App'>
							<Navbar />
							<div className='container'>
								{/* <Alert /> */}
								<Switch>
									<PrivateRoute exact path='/' component={Home} />
									<Route exact path='/about' component={About} />
									<Route exact path='/pokemons/:pokemonName' component={Pokemon} />
									<Route exact path='/register' component={Register} />
									<Route exact path='/login' component={Login} />
									<Route component={NotFound} status={404} />
								</Switch>
							</div>
						</div>
					</Router>
				</AlertState>
			</PokemonState>
		</AuthState>
	);
};

export default App;
