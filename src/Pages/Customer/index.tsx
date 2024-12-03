import { useDynamicData } from "@Backend/hooks/useStore";

import { useLocation, useNavigate } from "react-router-dom"

import { useState } from "react";
import CustomerDetails from "./Components/CustomerDetails";
import Credit from "./Components/Credit";
import Debit from "./Components/Debit";

import Transactions from "./Components/Transactions";

function CustomerPage(): JSX.Element {
    const { state } = useLocation()
    const { Customers, } = useDynamicData();
    const Navigate = useNavigate()
    const [displayedComponent, setDisplayedComponent] = useState<'pay' | "credit" | false>(false)

    const selectedCustomer = Customers.find((customer) => customer.ID === state.ID);
    if (!selectedCustomer) {
        return <div >
            <p className="text-credit">Customer not found</p>
            <button aria-label="back to customers page" onClick={() => Navigate("/")}> back</button>
        </div>;
    }


    return (
        <>
            <CustomerDetails Customer={selectedCustomer} setDisplayedComponent={setDisplayedComponent} />
            <main className="h-svh relative pt-0">
                {displayedComponent !== false ? <section className="h-full relative md:mx-16">
                    {displayedComponent == "credit" ? <Credit Customer={selectedCustomer} CloseComponent={setDisplayedComponent} /> : <Debit Customer={selectedCustomer} CloseComponent={setDisplayedComponent} />}
                </section> : <Transactions Customer={selectedCustomer} />}
            </main>
        </>
    )
}

export default CustomerPage