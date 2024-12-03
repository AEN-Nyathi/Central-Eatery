export default function Select({
	value,
	onChange,
	Values,
	name,
}: {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	Values: string[];
	name: 'category' | 'brand' | "group";
}) {
	return (
		<div>
			<select
				value={value}
				onChange={onChange}
				name={name}
				title='Filter By Type'>
				<option
					className='text-primary'
					value=''>
					{value ? 'Remove filter' : `Filter by ${name}`}
				</option>
				{Values.map((type) => (
					<option key={type}>{type}</option>
				))}
			</select>
		</div>
	);
}
