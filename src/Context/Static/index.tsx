import React, { createContext, useReducer, useEffect } from 'react';

import StaticState from '@Context/Static/Hooks/StaticState';
import { fetchState } from '@Context/Static/Hooks/fetchState';
import Reducer from './Hooks/Reducers';


const StaitcContext = createContext<StaticStateType | undefined>(undefined);

const Provider: React.FC<ContextProps> = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, new StaticState);
	useEffect(() => {
		fetchState(dispatch)
	}, []); // Empty dependency array to run only once on mount

	return (
		<StaitcContext.Provider value={{ ...state, dispatch }}>
			{children}
		</StaitcContext.Provider>
	);
};

export { StaitcContext, Provider };
