import { BiLogIn } from "react-icons/bi"
import { CgNametag } from "react-icons/cg"
import { FaAddressBook } from "react-icons/fa"
import { MdEmail, MdPassword, MdPhone } from "react-icons/md"
import { Link } from "react-router-dom"

const SignUp = () => {
    return (
        <main>
            <h1>Rise and Shine</h1>
            <section>
                <p>Welcome to Rise and shine</p>
            </section>
            <section>
                <h4><BiLogIn className="w-12 h-12" /> Sign Up</h4>

                <div className="flex my-2 gap-x-2">
                    <input className="w-full" id="Email" onChange={(event) => event.target.value} type="email" placeholder="Email " />
                    <label htmlFor="Email"><MdEmail /></label>
                </div>
                <div className="flex my-2 gap-x-2">
                    <input className="w-full" id="Password" onChange={(event) => event.target.value} type="password" placeholder="password" />
                    <label htmlFor="Password"><MdPassword /></label>
                </div>
                <div className="flex my-2 gap-x-2">
                    <input className="w-full" id="Name" onChange={(event) => event.target.value} type="text" placeholder="Name" />
                    <label htmlFor="Name"><CgNametag /></label>
                </div>
                <div className="flex my-2 gap-x-2">
                    <input className="w-full" id="Phone" onChange={(event) => event.target.value} type="tel" placeholder="Phone Number" />
                    <label htmlFor="Phone"><MdPhone /></label>
                </div>
                <div className="flex my-2 gap-x-2">
                    <input className="w-full" id="Address" onChange={(event) => event.target.value} type="text" placeholder="Adress" />
                    <label htmlFor="Address"><FaAddressBook /></label>
                </div>
                <button><BiLogIn /> Sign Up</button>
                <Link to="/Auth">Already have an account, Sign In</Link>
            </section>
        </main>
    )
}

export default SignUp