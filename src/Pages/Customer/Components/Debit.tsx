import { useStore } from "@Backend/hooks/useStore";
import { useCallback, useEffect, useRef, useState } from "react";
import { BiMoney } from "react-icons/bi";
import { MdCancel, MdDone } from "react-icons/md";
import CurrencyFormatter from 'react-currency-formatter';


interface DebitProps {
    Customer: CustomerType;
    CloseComponent: React.Dispatch<React.SetStateAction<false | "pay" | "credit">>;
}

export default function Debit({ Customer, CloseComponent }: DebitProps) {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const { dispatch } = useStore();
    const [amount, setAmount] = useState<number>(0);
    const [debitError, setDebitError] = useState<string | null>(null);

    const handleScrollIntoView = useCallback(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }, []);

    useEffect(() => {
        handleScrollIntoView();
    }, [handleScrollIntoView]);

    const handleInputChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setDebitError(null)
            const parsedValue = parseFloat(event.target.value);
            setAmount(isNaN(parsedValue) ? 0 : parsedValue); // Set valid number or 0
        },
        []
    );

    const handleDebitSubmit = useCallback(() => {
        if (amount <= 0) {
            setDebitError("Please enter a valid debit amount.");
            return;
        }

        dispatch({
            type: "ADD_TRANSACTION",
            data: {
                customerId: Customer.ID,
                transaction: {
                    ID: `${Date.now()}`, // Generate unique ID
                    Date: new Date(),
                    type: "Debit",
                    price: amount,
                },
            },
        });

        CloseComponent(false); // Close debit component
    }, [amount, Customer.ID, dispatch, CloseComponent]);

    return (
        <div ref={scrollRef} className="content-evenly grid">
            <h4 className="basis-full">Debit: {Customer.Name}</h4>

            <div className="flex gap-2">
                <input
                    className="w-full"
                    type="number"
                    placeholder="R0.00"
                    onChange={handleInputChange}
                    id="price"
                />
                <label htmlFor="price"><BiMoney /></label>
            </div>
            {amount ? <article className="my-4 flex gap-2 p-0">
                <div className="size-28 bg-green-500 rounded-l-2xl" />
                <ul className="w-full pr-2">
                    <li><b>Name:</b> {Customer.Name}</li>
                    <li><b>Price:</b> <CurrencyFormatter quantity={amount} currency="ZAR" /> </li>

                </ul>
            </article> : null}
            <div className="flex flex-wrap justify-between">
                <button
                    onClick={() => CloseComponent(false)}
                    className="bg-red-500/50"
                >
                    <MdCancel /> Cancel
                </button>
                <button
                    className={`bg-blue-500/50 ${debitError ? "cursor-not-allowed" : ""}`}
                    onClick={handleDebitSubmit}
                    disabled={debitError ? true : false}
                >
                    <MdDone /> Done
                </button>
            </div>
            {debitError && <p className="text-red-500 text-sm mt-2">{debitError}</p>}
        </div>
    );
}
