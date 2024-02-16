import { useState, useRef } from 'react';
import { BiSolidDownArrow, BiSolidUpArrow } from 'react-icons/bi';


function CustomSelect({ productOptions, setSelectedProduct }: { productOptions: productType[], setSelectedProduct: React.Dispatch<React.SetStateAction<productType | undefined>> }) {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);





    return (
        <div ref={selectRef} className=" my-4 bg-gray-500/50 p-2 rounded-2xl">
            <div className="flex p-2 justify-between" onClick={() => setIsOpen(!isOpen)}>
                <input className='w-full mr-4' type='text' placeholder='Select Product' />
                {isOpen ? <BiSolidUpArrow /> : <BiSolidDownArrow />}
            </div>
            {isOpen && (
                <div >
                    {productOptions.map((product) => (
                        <article key={product.ID} className="w-full p-0 flex gap-x-4 my-2" onClick={() => {
                            setSelectedProduct(product);
                            setIsOpen(false);
                        }}>
                            <img alt={product.Name} src={product.image} className="size-20 rounded-l-2xl" />
                            <ul className="basis-full" >
                                <li ><b>Product:</b> {product.Name}</li>
                                <li><b>Price:</b> R{product.price.toFixed(2)}</li>
                            </ul>
                        </article>

                    ))}
                </div>
            )}
        </div>
    );
}

export default CustomSelect;
