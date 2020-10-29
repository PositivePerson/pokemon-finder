import React from 'react';
import PropTypes from 'prop-types';
import OneAbility from './OneAbility';

const Abilities = ({ abilities }) => {
	return abilities.map((ab) => <OneAbility ab={ab} key={ab.id} />);
};

Abilities.propTypes = {
	repos: PropTypes.array.isRequired
};

export default Abilities;
