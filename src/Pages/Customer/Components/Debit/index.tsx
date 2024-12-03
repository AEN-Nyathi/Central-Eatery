
import { useRef, useState } from "react";
import { BiMoney } from "react-icons/bi";
import useScrollIntoView from "@Backend/hooks/useScrollIntoView";
import Footer from "../Confirm";
import Item from "../Item";


interface DebitProps {
    Customer: CustomerType;
    CloseComponent: React.Dispatch<React.SetStateAction<false | "pay" | "credit">>;
}

export default function Debit({ Customer, CloseComponent }: DebitProps) {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [SelectedAmount, setSelectedAmount] = useState<number>(0);
    const [debitError, setDebitError] = useState<string | null>(null);

    useScrollIntoView(scrollRef);

    return (
        <div ref={scrollRef} className="content-evenly grid">
            <h4 className="basis-full">Debit: {Customer.Name}</h4>
            <div className="flex gap-2">
                <input
                    className="w-full"
                    type="number"
                    placeholder="R0.00"
                    onChange={(event) => {
                        setDebitError(null)
                        const parsedValue = parseFloat(event.target.value);
                        setSelectedAmount(isNaN(parsedValue) ? 0 : parsedValue); // Set valid number or 0
                    }}
                    id="price"
                />
                <label htmlFor="price"><BiMoney /></label>
            </div>
            {SelectedAmount ? <Item Customer={Customer} SelectedAmount={SelectedAmount} />
                : null}
            <Footer
                type='Debit'
                CloseComponent={CloseComponent}
                Customer={Customer}
                SelectedAmount={SelectedAmount}
            />
            {debitError && <p className="text-credit text-sm mt-2">{debitError}</p>}
        </div>
    );
}
