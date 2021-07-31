import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Logo from '../../img/Logo.svg';
import styled from 'styled-components'

const Img = styled.img`
	width: 125px;
	margin-left: 8vw;
`;

const Nav = styled.nav`
	/* background: var(--Dark); */

	ul {
		display: flex;
		margin-right: 2rem;
		margin-bottom: 0;

		li {
			margin: 0 2rem;
		}

		a {
			font-size: 13px;
			color: #FFF;
			text-decoration: none;
		}
	}
`;

type Props = {
	title: string
}

const Navbar = ({ title }: Props) => {
	return (
		<Nav className='navbar'>
			<Link to='/'>
				<Img src={Logo} alt={title} />
			</Link>
			<ul>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/About'>About</Link>
				</li>
			</ul>
		</Nav>
	);
};

// const imgStyle = {
// 	verticalAlign: 'middle',
// 	maxWidth: '2em'
// };

Navbar.defaultProps = {
	title: 'Pokemon Finder'
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired
};

export default Navbar;
