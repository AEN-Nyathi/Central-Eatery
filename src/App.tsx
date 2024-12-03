import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@Pages/Home';
import { Navbar } from '@Components/index';
import CustomerPage from '@Pages/Customer';
import SignIn from '@Pages/Auth/SignIn';
import SignUp from '@Pages/Auth/SignUp';
import Stock from '@Pages/Stock';
import ProductPage from '@Pages/Stock/ProductPage';
import MenuPage from '@Pages/Menu';
import Order from '@Pages/Menu/Order';

/**
 * Main application component
 */
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Navbar />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='Customer'
						element={<CustomerPage />}
					/>
					<Route
						path='Menu'
						element={<MenuPage />}></Route>
					<Route
						path='Order'
						element={<Order />}></Route>
					<Route
						path='Stock'
						element={<Stock />}></Route>
					<Route
						path='Product'
						element={<ProductPage />}
					/>
				</Route>
				<Route path='Auth'>
					<Route
						index
						element={<SignIn />}
					/>
					<Route
						path='SignUp'
						element={<SignUp />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
