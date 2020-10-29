import React from 'react';
import PropTypes from 'prop-types';

type Props = {
	ab: {
		ability: {
			name: string
		}
	}
}

const OneAbility = ({ ab }: Props) => {
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
