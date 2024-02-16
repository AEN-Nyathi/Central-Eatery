import { useStore } from "@Backend/hooks/useStore";

import { useLocation, useNavigate } from "react-router-dom"

import { useState } from "react";
import CustomerDetails from "./Components/CustomerDetails";
import Credit from "./Components/Credit";
import Debit from "./Components/Debit";
// import Month from "./Components/Month";
import Transactions from "./Components/Transactions";

function CustomerPage(): JSX.Element {
    const { state } = useLocation()
    const { Customers } = useStore();
    const Navigate = useNavigate()
    const [displayedComponent, setDisplayedComponent] = useState<'pay' | "credit" | false>(false)

    // const Transactions: { date: {Month:number, year: number}; hasTransactions: boolean; transactions: TransactionType[] }[] = Array.from(
    //     { length: 12 },
    //     (_, Month) => ({ date:{Month, year: 0}, hasTransactions: false, transactions:[] })
    // );
    const selectedCustomer = Customers.find((customer) => customer.ID === state.ID);
    if (!selectedCustomer) {
        return <div >
            <p className="text-red-500">Customer not found</p>
            <button aria-label="back to customers page" onClick={() => Navigate("/")}> back</button>
        </div>;
    }
    // for (const transaction of selectedCustomer.transactions) {
    //     const month = transaction.Date.getMonth();
    //     Transactions[month].hasTransactions = true;
    //     Transactions[month].date = { Month: month, year: transaction.Date.getFullYear() };
    //     Transactions[month].transactions.push(transaction);
    // }
    // console.log(Transactions)

    return (
        <>
            <CustomerDetails Customer={selectedCustomer} setDisplayedComponent={setDisplayedComponent} />
            <main className="h-svh relative pt-0">
                {displayedComponent !== false ? <section className="h-full relative cgrid place-content-center">
                    {displayedComponent == "credit" ? <Credit Customer={selectedCustomer} CloseComponent={setDisplayedComponent} /> : <Debit Customer={selectedCustomer} CloseComponent={setDisplayedComponent} />}
                </section> : null}
                <Transactions Customer={selectedCustomer} />
                {/* <ul>
                    {Transactions.sort((a, b) => b.date.year - a.date.year).map(Transactions => Transactions.hasTransactions ?
                        <Month Transactions={Transactions} />
                        : null)}
                </ul> */}
            </main>
        </>
    )
}

export default CustomerPage