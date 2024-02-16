import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Home  from '@Pages/Home';
import { Navbar } from '@Components/index';
import CustomerPage from '@Pages/Customer';


function App() {
	

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path='Customer' element={<CustomerPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
