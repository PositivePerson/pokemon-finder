import React from 'react';
import PropTypes from 'prop-types';
import OneAbility from './OneAbility';

type Props = {
	abilities: Array<any>,
}

const Abilities = ({ abilities }: Props): JSX.Element => {
	return <>{
	abilities.map((ab) => <OneAbility ab={ab} key={ab.slot} />)
}</>
};

Abilities.propTypes = {
	abilities: PropTypes.array.isRequired
};

export default Abilities;
