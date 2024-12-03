import { BiLogIn } from 'react-icons/bi';
import { MdEmail, MdPassword } from 'react-icons/md';
import { Link } from 'react-router-dom';

const SignIn = () => {
	return (
		<>
			<section className="p-4">
				<h1>Rise and Shine</h1>
				<p>Welcome to Rise and shine</p>
			</section>
			<main>
				<h4>
					<BiLogIn className="w-12 h-12" /> Sign In
				</h4>
				<section>
					<div className="flex my-2 gap-x-2">
						<input
							className="w-full"
							id="Email"
							onChange={(event) => console.log(event.target.value)}
							type="email"
							placeholder="Email "
						/>
						<label htmlFor="Email">
							<MdEmail />
						</label>
					</div>
					<div className="flex my-2 gap-x-2">
						<input
							className="w-full"
							id="Password"
							onChange={(event) => console.log(event.target.value)}
							type="password"
							placeholder="password"
						/>
						<label htmlFor="Password">
							<MdPassword />
						</label>
					</div>
				</section>
				<section>
					<button>
						<BiLogIn /> Sign In
					</button>
					<Link to="/Auth/SignUp">Don't have an account, Create Account</Link>
                </section>
                <footer>
                    <p>copyright reseved 2024 </p>
                </footer>
			</main>
		</>
	);
};

export default SignIn;
