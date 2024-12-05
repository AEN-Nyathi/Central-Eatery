import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from '@Context/Static/index.tsx';
import { IconContext } from 'react-icons';
// import { DynamicProvider } from '@Context/Dynamic/index.tsx';s

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		{/* <DynamicProvider> */}
			<Provider>
				<IconContext.Provider value={{ className: 'w-6 h-6 text-primary' }}>
					<App />
				</IconContext.Provider>
			</Provider>
		{/* </DynamicProvider> */}
	</React.StrictMode>
);
