import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../img/pokemon-logo.png';

const Navbar = ({ img, title }) => {
	return (
		<nav className='navbar bg-primary'>
			<h1>
				<img src={Logo} alt='' style={imgStyle} />
				<span style={titleStyle}>{title}</span>
			</h1>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/About'>About</Link>
				</li>
			</ul>
		</nav>
	);
};

const imgStyle = {
	verticalAlign: 'middle',
	maxWidth: '2em'
};

const titleStyle = {
	display: 'inline-block',
	height: '100%',
	verticalAlign: 'middle',
	fontWeight: '500',
	paddingLeft: '.25em'
};

Navbar.defaultProps = {
	title: 'Pokemon Finder'
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired
};

export default Navbar;
