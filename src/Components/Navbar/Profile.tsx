import { Link } from 'react-router-dom';
// import profile from '../../assets/Profile.png';
import { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import { useStore } from '@Backend/hooks/useStore';
import { MdOutlineLightMode, MdOutlineModeNight } from 'react-icons/md';
export default function Profile() {
	const links = ['Your Profile', 'Settings', 'Sign out'];
	const [isOpen, setIsOpen] = useState(false);
	const { isMenuOpen } = useStore();

	return (
		<div className=" flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

			<div className="relative mx-3">
				<button className='border-none'
					type="button"
					onClick={() => setIsOpen(!isOpen)}>
					<FiSettings />
				</button>

				{isOpen && (
					<div className="absolute right-0   z-10 mt-5  w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
						{links.map((link) => (
							<Link
								key={link}
								className="block px-4 py-2 text-sm text-gray-700"
								onClick={() => setIsOpen(false)}
								to={`/${link}`}>
								{link}
							</Link>
						))}
						<span onClick={() => {
							// HTMLHtmlElement.prototype.classList
							// console.log(HTMLHtmlElement.prototype.className)
						}} className="px-4 text-sm   grid grid-cols-2 ">
							<p >
								<b>Mode : </b>
								dark
							</p>
							{isMenuOpen ? (
								<MdOutlineLightMode />
							) : (
								<MdOutlineModeNight />
							)}
						</span>
					</div>
				)}
			</div>

		</div>
	);
}
