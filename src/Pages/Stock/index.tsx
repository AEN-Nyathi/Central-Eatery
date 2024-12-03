import { useStaticData } from '@Backend/hooks/useStore';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

const ItemsPage = () => {
	const Navigate = useNavigate();
	const { ItemCategories } = useStaticData();
	const [filters, setFilters] = useState({ category: '', group: '', searchQuery: '' });

	const filteredItems = useMemo(() => {
		const filteredCategories = ItemCategories.filter(
			(group) => !filters.group || group.name === filters.group
		).map((category) => {
			return {
				...category,
				items: category.items.filter((Item) => {
					return (
						(!filters.category || Item.category === filters.category) &&
						// (!filters.brand || Item.brand === filters.brand) &&
						(!filters.searchQuery ||
							Item.name.toLocaleLowerCase().includes(filters.searchQuery.toLocaleLowerCase()))
					);
				}),
			};
		});
		return filteredCategories;
	}, [ItemCategories, filters]);

	return (
		<main className='relative pt-0'>
			<Navigation
				filters={filters}
				setFilters={setFilters}
			/>
			<h1>Stock</h1>
			<section>
				{filteredItems.map((ItemCategory) => {
					if (!ItemCategory.items.length) return;
					return (
						<article key={ItemCategory.name}>
							<h3 className='my-2 border-b-2 sticky top-9  border-primary text-center text-2xl'>
								{ItemCategory.name}
							</h3>
							<ul className='md:grid  place-items-center md:gap-3 md:grid-cols-4 '>
								{ItemCategory.items
									.sort((a, b) => {
										if (a.name < b.name) return -1;
										if (a.name > b.name) return 1;
										return 0;
									})
									.map((Item, index) => {
										return (
											<li
												className='p-2 size-full'
												key={Item.id}>
												<h4 className='truncate'>
													{index + 1}. {Item.name}
												</h4>
												<div className='flex flex-wrap gap-4 justify-between items-end m-0'>
													<ul className='ml-2 mt-2'>
														<li className='truncate text-sm'>
															{Item.name} {Item.category}
														</li>
														{/* <li>brand: {Item.brand}</li> */}
														<li>Size: {Item.Size ? Item.Size : 'Unknown'}</li>
														<li>category: {Item.category}</li>
													</ul>
													<button
														className='w-full'
														type='button'
														onClick={() => Navigate('/Product', { state: { ID: Item.id } })}>
														More
													</button>
												</div>
											</li>
										);
									})}
							</ul>
						</article>
					);
				})}
			</section>
		</main>
	);
};

export default ItemsPage;
