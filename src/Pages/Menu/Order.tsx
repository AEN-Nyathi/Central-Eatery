import { useStaticData } from '@Backend/hooks/useStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Order() {
	const { Order, dispatch } = useStaticData();

	const Navigate = useNavigate();
	useEffect(() => {
		if (Order.length < 1) Navigate('/Menu');
	}, [Navigate, Order.length]);

	// console.log(products);
	return (
		<main>
			<h1>Order</h1>
			<section className='grid md:grid-cols-3 mt-2 place-items-start gap-4'>
				{Order?.map((product) => (
					<article
						className='w-full'
						key={product.Name}>
						<h4 className='mb-2'>{product?.Name}</h4>
						<div className='w-full flex justify-between gap-2'>
							{product?.Image ? (
								<img
									title='Logo'
									className='h-20 w-fit object-contain'
									src={product?.Image}
								/>
							) : null}
							<ul className='w-full'>
								<li className='md:max-w-96 mb-2  mx-0'>
									<p className='max-w-52'>
										{product?.Description?.map((text, index) =>
											index + 2 == product.Description.length
												? `${text} and `
												: index + 1 == product.Description.length
												? `${text}.`
												: `${text}, `
										)}
									</p>
								</li>
								<li>
									<p className='text-lg font-bold'>R{product?.Price}</p>
								</li>
								<li>
									<button
										title='remove order'
										onClick={() => dispatch({ type: 'Add_Order', data: { Products: product } })}>
										remove
									</button>{' '}
								</li>
							</ul>
						</div>
					</article>
				))}
			</section>
			<section className='sticky w-screen bg-black  bottom-0'>
				<ul className=''>
					<li>
						<div>
							<b>Product:</b>
							{Order.map((product) => (
								<div className='flex gap-2 items-center'>
									<p>{product.Name}:</p>
									<p>R{product.Price}</p>
								</div>
							))}
						</div>
					</li>
					<li>
						<p>
							<b>Qunitity: </b>
							{Order.length}
						</p>
					</li>
					<li>
						<p>
							<b>Total: </b>R{Order.reduce((total, product) => total + product.Price, 0)}
						</p>
					</li>
				</ul>
				<nav className='flex gap-2 justify-evenly'>
					<button
						type='button'
						onClick={() => Navigate('/Menu')}
						className='mt-2 w-full'>
						Add Product
					</button>
					<button
						type='button'
						disabled
						// onClick={() => Navigate('/Menu')}
						className='mt-2 w-full'>
						place Order
					</button>
				</nav>
			</section>
			<p>Thanks for visiting our site </p>
			<p>Please contact: 079 113 8480</p>
		</main>
	);
}
