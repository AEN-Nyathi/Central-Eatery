import { useStaticData } from '@Backend/hooks/useStore';
import { useLocation, useNavigate } from 'react-router-dom';

function ProductPage() {
	const { state } = useLocation();
	const { ItemCategories } = useStaticData();
	const Navigate = useNavigate();
	const selectedProduct = ItemCategories.flatMap((category) => category.items).find(
		(Item) => Item.id === state.ID
	);

	if (!selectedProduct) {
		return (
			<main>
				<p className='text-credit'>Product not found</p>
				<button
					aria-label='back to Products page'
					onClick={() => Navigate('/Stock')}>
					back
				</button>
			</main>
		);
	}
	return (
		<main>
			<h1>
				{selectedProduct.name} {selectedProduct.category}
			</h1>

			<div className=' flex flex-wrap items-center gap-4 p-2 '>
				<ul className='ml-2 mt-2'>
					<li>Name: {selectedProduct.name}</li>
					<li>Type: {selectedProduct.category}</li>
					<li>Size: {selectedProduct.Size}</li>
				</ul>
			</div>
		</main>
	);
}

export default ProductPage;
