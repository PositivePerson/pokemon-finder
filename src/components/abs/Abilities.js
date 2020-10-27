import React from 'react';
import PropTypes from 'prop-types';
import OneAbility from './OneAbility';

const Abilities = ({ moves }) => {
	return moves.map((ab) => <OneAbility repo={ab} key={ab.id} />);
};

Abilities.propTypes = {
	repos: PropTypes.array.isRequired
};

export default Abilities;
