import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import { Outlet } from 'react-router-dom';
import { useDynamicData, useStaticData } from '@Backend/hooks/useStore';
import Loading from '@Components/Elements/Loading';
import Feching from '@Components/Elements/Feching';

const Navbar: React.FunctionComponent = () => {
	const { isLoading } = useStaticData();
	const { isFetching } = useDynamicData();

	if (isLoading.state) {
		return <Loading />;
	} else if (isFetching.state) {
		return <Feching />;
	}

	return (
		<>
			<header className="bg-light z-50 dark:bg-dark w-screen">
				<Desktop />
				<Mobile />
			</header>
			<Outlet />
		</>
	);
}
export default Navbar