import { useStaticData } from "@Backend/hooks/useStore";
import Links from './Links';
import Profile from './Profile';
import { FiMenu } from 'react-icons/fi';
export default function Mobile() {
	const { isMenuOpen, dispatch } = useStaticData();

	return (
		<nav className="grid grid-cols-4  place-items-center md:hidden ">

			<FiMenu onClick={() => dispatch({
				data: !isMenuOpen,
				type: "isMenuOpen"
			})} />
			<h1 className="col-span-2 my-0 py-1 text-2xl">Central Eatery</h1>
			<Profile />
			{isMenuOpen ? <Links /> : null}
		</nav>
	);
}
