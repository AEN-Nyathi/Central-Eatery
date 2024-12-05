import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { Outlet } from 'react-router-dom';
import { useStaticData } from '@Backend/hooks/useStore';
import Loading from '@Components/Elements/Loading';

const Navbar: React.FunctionComponent = () => {
	const { isLoading } = useStaticData();
	// const { isFetching } = useDynamicData();

	if (isLoading.state) {
		return <Loading />;
	}

	return (
		<>
			<header className='bg-dark z-50  w-screen'>
				<Desktop />
				<Mobile />
			</header>
			<Outlet />
		</>
	);
};
export default Navbar;
