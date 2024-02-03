import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

const Navbar:React.FunctionComponent = ()=> {
	
	return (
		<header className="bg-light dark:bg-dark w-screen">
			<Desktop />
			<Mobile />
		</header>
	);
}
export default Navbar