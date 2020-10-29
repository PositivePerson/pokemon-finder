import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

type Props = {
	user: {
		name: string
	}
}

const UserItem = ({ user: { name } }: Props) => {
	return (
		<div className='card text-center'>
			{/* <img src={sprites} alt='' className='round-img' style={{ width: '60px' }} /> */}
			<h3>{name}</h3>

			<div>
				<Link to={`/pokemons/${name}`} className='btn btn-dark btn-sm my-1'>
					More
				</Link>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};

export default UserItem;
