import React from 'react';
import PropTypes from 'prop-types';

const OneAbility = ({ repo }) => {
	return (
		<div className='card text-center'>
			<h3>
				<span>{repo.move.name}</span>
			</h3>
		</div>
	);
};

OneAbility.propTypes = {
	repo: PropTypes.object.isRequired
};

export default OneAbility;
