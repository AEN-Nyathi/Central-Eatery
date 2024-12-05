import React, { createContext, useReducer } from 'react';

import StaticState from '@Context/Static/Hooks/StaticState';
import Reducer from './Hooks/Reducers';


const StaitcContext = createContext<StaticStateType | undefined>(undefined);

const Provider: React.FC<ContextProps> = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, new StaticState);

	return (
		<StaitcContext.Provider value={{ ...state, dispatch }}>
			{children}
		</StaitcContext.Provider>
	);
};

export { StaitcContext, Provider };
