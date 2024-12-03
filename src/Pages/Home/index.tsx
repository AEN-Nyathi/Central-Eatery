import Logo from '@Images/Logo.jpg';
import Kota from '@Images/Menus/Kota.png';
export default function Homepage() {
	return (
		<main>
			<section>
				<h1>Central Eatery</h1>
				<img
					title='Logo'
					className='w-96 m-4 rounded-full h-96 mx-auto'
					src={Logo}
				/>
				<h2>Every Bite Is a Delight</h2>
				<button className='my-4'>View Menu</button>
			</section>
			<section className=''>
				<h1>Kota Menu</h1>
				<div className='flex flex-wrap gap-10'>
					<img
						title='Logo'
						className='h-60 object-contain'
						src={Kota}
					/>
					<div>
						<h4>SMASH</h4>
						<p>Bread, Chips, Polony, Archaar, Rasaian, Egg and Lettuce</p>
						<h4>SMASH</h4>
						<p>Bread, Chips, Polony, Archaar, Rasaian, Egg and Lettuce</p>
						<h4>SMASH</h4>
						<p>Bread, Chips, Polony, Archaar, Rasaian, Egg and Lettuce</p>
					</div>
				</div>

				{/* Display featured dishes with images and descriptions */}
			</section>
			<section className='testimonials'>{/* Display customer testimonials or reviews */}</section>
			<section className='contact-info'>{/* Display contact information */}</section>
		</main>
	);
}
