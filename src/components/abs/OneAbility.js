import React from 'react';
import PropTypes from 'prop-types';

const OneAbility = ({ ab }) => {
	return (
		<div className='card my-1'>
			<h5>
				<span>{ab.ability.name}</span>
			</h5>
		</div>
	);
};

OneAbility.propTypes = {
	ab: PropTypes.object.isRequired
};

export default OneAbility;
