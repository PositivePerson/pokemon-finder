import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../img/Logo.svg';
import styled from 'styled-components'

const Img = styled.img`
	width: 125px;
	margin-left: 8vw;
`;

type Props = {
	title: string
}

const Navbar = ({ title }: Props) => {
	return (
		<nav className="h-12 w-full inline-flex justify-between">
			<Link to='/'>
				<Img src={Logo} alt={title} />
			</Link>
			<ul className="flex h-12 leading-12 mr-8 font-medium">
				<li className="mx-8">
					<Link to='/' className="text-tiny text-white no-underline">Home</Link>
				</li>
				<li className="mx-8">
					<Link to='/About' className="text-tiny text-white no-underline">About</Link>
				</li>
			</ul>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Pokemon Finder'
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired
};

export default Navbar;
