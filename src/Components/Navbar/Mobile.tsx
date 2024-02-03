import { useStore } from '@Backend/hooks/useStore';
import Links from './Links';
import Profile from './Profile';
import { FiMenu } from 'react-icons/fi';
export default function Mobile() {
	const { isMenuOpen, dispatch } = useStore();

	return (
		<nav className="grid grid-cols-4 justify-items-center content-center place-items-center md:hidden ">
			{/* <button className="" onClick={() => setIsOpen(!isOpen)}>c</button> */}
			<FiMenu onClick={() => dispatch({
				data: !isMenuOpen,
				type: "isMenuOpen"
			})} />
			<h1 className="col-span-2 my-0 py-1">template</h1>
			{/* <FiMenu onClick={() => OpenMenu(dispatch, !isMenuOpen)} /> */}
			<Profile />
			{isMenuOpen ? <Links  /> : null}
		</nav>
	);
}
