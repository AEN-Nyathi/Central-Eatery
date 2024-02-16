import { useStore } from "@Backend/hooks/useStore"; // Assuming store is used for credit actions
import { useCallback, useEffect, useRef, useState } from "react";
import { MdCancel, MdDone } from "react-icons/md";
import CurrencyFormatter from 'react-currency-formatter';
import CustomSelect from "./CustomSelect";

interface CreditProps {
    Customer: CustomerType;
    CloseComponent: React.Dispatch<React.SetStateAction<false | "pay" | "credit">>;
}

export default function Credit({ Customer, CloseComponent }: CreditProps) {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const { dispatch, Products } = useStore(); // Assuming dispatch is used for credit actions

    const [selectedProduct, setSelectedProduct] = useState<productType | undefined>(undefined);
    const [creditError, setCreditError] = useState<string | null>(null);

    const handleScrollIntoView = useCallback(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    useEffect(() => {
        handleScrollIntoView();
    }, [handleScrollIntoView]);





    const handleCreditSubmit = useCallback(() => {
        if (!selectedProduct) {
            setCreditError("Please select a product.");
            return;
        }

        dispatch({
            type: "ADD_TRANSACTION", // Assuming correct action for credit
            data: {
                customerId: Customer.ID,
                transaction: {
                    ID: `${Date.now()}`, // Generate unique ID
                    Date: new Date(),
                    type: "Credit",
                    price: selectedProduct.price,
                    Product: selectedProduct.Name,
                    image: selectedProduct.image,
                },
            },
        });

        CloseComponent(false); // CloseComponent
    }, [
        Customer.ID,
        dispatch,
        selectedProduct,
        CloseComponent,
    ]);

    return (
        <div ref={scrollRef}  >
            <h4 className="basis-full">Credit: {Customer.Name}</h4>
            {selectedProduct ? <article className="my-2 "><p>Please Confirm that {Customer.Name} is Crediting {selectedProduct.Name} for R{selectedProduct.price.toFixed(2)} on { new Date().toUTCString()}</p></article> : null}
            {selectedProduct ? <article className="my-8 grid place-content-center bg-transparent">
                <img alt={selectedProduct.Name} src={selectedProduct.image} className="size-40 m-2 rounded-l-2xl" />
                <ul className="w-full pr-2">
                    <li><b>Product:</b> {selectedProduct.Name}</li>
                    <li><b>Price:</b> <CurrencyFormatter quantity={selectedProduct.price} currency="ZAR" /> </li>

                </ul>
            </article> : <CustomSelect productOptions={Products} setSelectedProduct={setSelectedProduct} />}

            <div className="flex w-full absolute bottom-0 justify-between">
                <button
                    onClick={() => CloseComponent(false)}
                    className="bg-red-500/50"
                >
                    <MdCancel /> Cancel
                </button>
                {selectedProduct ? <button
                    className={`bg-blue-500/50  ${creditError ? "cursor-not-allowed" : ""}`}
                    onClick={handleCreditSubmit}
                    disabled={creditError ? true : false}
                >
                    <MdDone /> Confirm
                </button> : null}
            </div>
            {creditError && <p className="text-red-500 text-sm mt-2">{creditError}</p>}
        </div>
    );
}
