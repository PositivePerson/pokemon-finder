import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/pokemons/Users';
import Pokemon from './components/pokemons/Pokemon';
import Search from './components/pokemons/Search';
import Alert from './components/layout/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

import PokemonState from './context/pokemon/PokemonState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {
	// async componentDidMount() {
	// 	this.setState({ loading: true });
	// 	const res = await axios.get(
	// 		`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process
	// 			.env.REACT_APP_GITHUB_CLIENT_SECRET}`
	// 	);
	// 	this.setState({ users: res.data, loading: false });
	// }

	return (
		<PokemonState>
			<AlertState>
				<Router>
					<div className='App'>
						<Navbar />
						<div className='container'>
							<Alert />
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/pokemons/:pokemonName' component={Pokemon} />
								<Route path='*' component={NotFound} status={404} />
							</Switch>
						</div>
					</div>
				</Router>
			</AlertState>
		</PokemonState>
	);
};

export default App;
