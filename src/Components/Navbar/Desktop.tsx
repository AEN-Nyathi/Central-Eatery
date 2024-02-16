import logo from "@Images/react.svg"
import Links from "./Links"
import Profile from "./Profile"

function Desktop() {
	

	return (
		<nav className="hidden md:flex justify-around w-screen ">
			<img src={logo} className="h-10 w-10 m-2" />
			<Links />
			<Profile />
		</nav>
	);
}

export default Desktop