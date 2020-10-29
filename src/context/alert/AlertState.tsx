import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import AlertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

type Props = {
	children: any
}

const AlertState = (props: Props) => {
	const initialState = null;

	const [ state, dispatch ] = useReducer(AlertReducer, initialState);

	// Set Alert
	const setAlert = (msg: string, type: string) => {
		dispatch({
			type: SET_ALERT,
			payload: { msg, type }
		});

		setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
	};

	return (
		<AlertContext.Provider
			value={{
				alert: state,
				setAlert
			}}
		>
			{props.children}
		</AlertContext.Provider>
	);
};

export default AlertState;
