import { useStaticData } from '@Backend/hooks/useStore';
import { Link } from 'react-router-dom';

const Links: React.FC = () => {
	const links = [
		{ name: 'Home', path: '/' },
		{ name: 'Stock', path: '/Stock' },
		{ name: 'Menu', path: '/Menu' },
		{ name: 'Contact', path: '/Contact' },
	];
	const { dispatch } = useStaticData();

	return (
		<ul className='flex flex-col col-span-4 w-full md:flex-row gap-2 h-svh md:h-auto md:justify-center '>
			{links.map((link) => (
				<li key={link.name}>
					<Link
						className='text-xl flex justify-center w-20 bg-red-500 text-white text-start  md:text-base'
						to={link.path}
						onClick={() =>
							dispatch({
								data: false,
								type: 'isMenuOpen',
							})
						}>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Links;
