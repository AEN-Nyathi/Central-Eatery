import logo from '@Images/Logo.jpg';
import Links from './Links';
import Profile from './Profile';

function Desktop() {
	return (
		<nav className='hidden md:flex py-1 justify-around w-screen h-auto'>
			<img
				title='Logo'
				src={logo}
				className='h-28 w-28 left-0 top-0 rounded-full  absolute m-2'
			/>
			<Links />
			<Profile />
		</nav>
	);
}

export default Desktop;
