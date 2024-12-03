import { useRef, useState } from 'react';
import CustomSelect from './CustomSelect';
import { useStaticData } from '@Backend/hooks/useStore';
import useScrollIntoView from '@Backend/hooks/useScrollIntoView';
import Footer from '../Confirm';
import Item from '../Item';

interface CreditProps {
    Customer: CustomerType;
    CloseComponent: React.Dispatch<
        React.SetStateAction<false | 'pay' | 'credit'>
    >;
}

export default function Credit({ Customer, CloseComponent }: CreditProps) {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const { Products, isError } = useStaticData();
    const [selectedProduct, setSelectedProduct] = useState<
        productType | undefined
    >(undefined);
    useScrollIntoView(scrollRef);
    return (
        <div ref={scrollRef}>
            <h4 className="basis-full">Credit: {Customer.Name}</h4>
            {selectedProduct ? (
                <Item Customer={Customer} selectedProduct={selectedProduct} />
            ) : (
                <CustomSelect
                    productOptions={Products}
                    setSelectedProduct={setSelectedProduct}
                />
            )}
            <Footer
                type='credit'
                CloseComponent={CloseComponent}
                Customer={Customer}
                selectedProduct={selectedProduct}
            />
            {isError.state ? (
                <p className="text-credit text-sm mt-2">{isError.message}</p>
            ) : null}
        </div>
    );
}
