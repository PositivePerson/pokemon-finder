import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';

const Abilities = ({ abilities }) => {
	return abilities.map((ab) => <RepoItem repo={ab} key={ab.id} />);
};

Abilities.propTypes = {
	repos: PropTypes.array.isRequired
};

export default Abilities;
