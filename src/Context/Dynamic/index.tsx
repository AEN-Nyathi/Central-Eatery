// import React, { createContext, useReducer, useEffect } from 'react';

// import DynamicState from './Hooks/DynamicState';
// import Reducer from './Hooks/Reducers';
// import { fetchState } from './Hooks/fetchState';
// // import Reducer from './Hooks/Reducers';

// const DynamicContext = createContext<DynamicActionTypes | undefined>(undefined);
// const DynamicProvider: React.FC<ContextProps> = ({ children }) => {
// 	const [state, dispatch] = useReducer(Reducer, new DynamicState);
// 	useEffect(() => {
// 		fetchState(dispatch)
// 		// dispatch({ type: "FETCH_STATE_SUCCESS" });
// 	}, []); // Empty dependency array to run only once on mount

// 	return (
// 		<DynamicContext.Provider value={{ ...state, dispatch }}>
// 			{children}
// 		</DynamicContext.Provider>
// 	);
// };

// export { DynamicContext, DynamicProvider };
