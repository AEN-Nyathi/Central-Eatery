import { useStaticData } from '@Backend/hooks/useStore';
import Product from './Product';
import { useMemo, useState } from 'react';

export default function MenuPage() {
	const { ProductsGroups } = useStaticData();
	const [searchItem, SetSearchItem] = useState('');
	const filteredProduct = useMemo(() => {
		const filteredProducts = ProductsGroups.map((product) => {
			return {
				...product,
				Products: product.Products.filter((product) => {
					return product.Name.toLocaleLowerCase().includes(searchItem.toLocaleLowerCase());
				}),
			};
		});
		return filteredProducts;
	}, [ProductsGroups, searchItem]);
	console.log(filteredProduct);
	return (
		<>
			<nav>
				<input
					className='w-full'
					type='text'
					placeholder='Search Product'
					onChange={(event) => SetSearchItem(event.target.value)}
				/>
			</nav>
			<main>
				{filteredProduct.map((ProductGroup) => {
					if (!ProductGroup.Products.length) return;
					return (
						<section
							key={ProductGroup.Name}
							className='grid md:grid-cols-3 mt-2 place-items-start gap-4'>
							<h4 className='sticky top-0 text-center w-full col-span-full'>{ProductGroup.Name}</h4>
							{ProductGroup.Image ? (
								<img
									title='Logo'
									className='h-52 mx-auto w-fit object-contain'
									src={ProductGroup.Image}
								/>
							) : null}
							{ProductGroup.Products.map((product) => (
								<Product
									key={product.Name}
									Product={product}
								/>
							))}
						</section>
					);
				})}
			</main>
		</>
	);
}
