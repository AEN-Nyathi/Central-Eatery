import { useStaticData } from '@Backend/hooks/useStore';
import { useNavigate } from 'react-router-dom';

export default function Product({ Product }: { Product: ProductType }) {
	const { dispatch } = useStaticData();
	const Navigate = useNavigate();
	return (
		<article className='w-full'>
			<h4 className='mb-2'>{Product.Name}</h4>
			<div className='w-full flex justify-between  gap-2'>
				{Product.Image ? (
					<img
						title='Logo'
						className='h-20 w-fit object-contain'
						src={Product.Image}
					/>
				) : null}
				<ul className='w-full'>
					<li className='md:max-w-96 mb-2  mx-0'>
						<p>
							{Product.Description.map((text, index) =>
								index + 2 == Product.Description.length
									? `${text} and `
									: index + 1 == Product.Description.length
									? `${text}.`
									: `${text}, `
							)}
						</p>
					</li>
					<li>
						<p className='text-lg font-bold'>R{Product.Price}</p>
					</li>
					<li>
						<button
							onClick={() => {
								dispatch({ type: 'Add_Order', data: { Products: Product } });
								Navigate('/Order', { state: { ID: Product.Name } });
							}}
							className='mt-2 w-full'>
							Order
						</button>
					</li>
				</ul>
			</div>
		</article>
	);
}
