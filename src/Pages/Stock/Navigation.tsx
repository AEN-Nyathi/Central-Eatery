import Select from './Select';
import { useStaticData } from '@Backend/hooks/useStore';
interface NavigationProps {
	filters: {
		category: string;
		group: string;
		searchQuery: string;
	};
	setFilters: React.Dispatch<
		React.SetStateAction<{
			category: string;
			group: string;
			searchQuery: string;
		}>
	>;
}

function Navigation({ filters, setFilters }: NavigationProps) {
	const { ItemCategories } = useStaticData();
	const handleFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		setFilters({ ...filters, [event.target.name]: event.target.value });
	};
	const categoryNames = ItemCategories.filter(
		(group) => !filters.group || group.name === filters.group
	)
		.flatMap((category) => category.items)
		.map((item) => item.category)
		.sort();

	return (
		<nav className='flex flex-wrap justify-center w-full pr-4 bg-dark  gap-4 sticky top-0'>
			<Select
				Values={Array.from(new Set(ItemCategories.map((group) => group.name)))}
				onChange={handleFilterChange}
				value={filters.group}
				name='group'
			/>
			{filters.group ? (
				<Select
					Values={Array.from(new Set(categoryNames))}
					onChange={handleFilterChange}
					value={filters.category}
					name='category'
				/>
			) : null}

			<input
				type='text'
				name='searchQuery'
				placeholder='Search products'
				value={filters.searchQuery}
				onChange={(event) =>
					setFilters({ category: '', group: '', searchQuery: event.target.value })
				}
			/>
			{(filters.category || filters.group) && (
				<button
					type='button'
					onClick={() => setFilters({ category: '', group: '', searchQuery: '' })}
					className='bg-primary text-light '>
					Remove filters
				</button>
			)}
		</nav>
	);
}

export default Navigation;
