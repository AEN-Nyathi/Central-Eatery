import { useDynamicData } from "@Backend/hooks/useStore";
import Customer from "@Pages/Home/Components/Customer";
import { BiSearch } from "react-icons/bi";
import CurrencyFormatter from 'react-currency-formatter';
import { useState } from "react";

export default function Home() {
  const { Customers } = useDynamicData();
  const [Search, setSearch] = useState('');
  // console.log("at home", Customers)
  const { totalCredit, totalDebit } = Customers.reduce(
    (acc, customer) => {
      const creditTotal = customer.transactions
        .filter((transaction) => transaction.type === "Credit")
        .reduce((creditAcc, transaction) => creditAcc + transaction.price, 0);
      const debitTotal = customer.transactions
        .filter((transaction) => transaction.type === "Debit")
        .reduce((debitAcc, transaction) => debitAcc + transaction.price, 0);
      return {
        totalCredit: acc.totalCredit + creditTotal,
        totalDebit: acc.totalDebit + debitTotal,
      };
    },
    { totalCredit: 0, totalDebit: 0 }
  );

  // Calculate balance directly
  const Balance = totalDebit - totalCredit;
  return (
    <>
      <section className="sticky w-screen p-2 m-0 top-0 grid place-content-center" >
        <ul className="grid grid-cols-2  gap-x-4">
          <li className="text-credit"><b>Credit:</b> <CurrencyFormatter quantity={totalCredit} currency="ZAR" /></li>
          <li className="text-debit"><b>Debit:</b> <CurrencyFormatter quantity={totalDebit} currency="ZAR" /></li>
          <li><b>Customers:</b> {Customers.length}</li>
          <li className={`${Balance > 0 ? 'text-debit' : "text-credit"}`}><b>Balance:</b> <CurrencyFormatter quantity={Balance} currency="ZAR" /></li>

        </ul>
        <div className="flex my-2 gap-x-2">
          <input className="w-full" onChange={(event) => setSearch(event.target.value)} type="search" placeholder="Customer Name..." />
          <label htmlFor="Customers"><BiSearch /></label>
        </div>
      </section>
      <main>

        <section>
          <ul>
            {Customers.filter((val) => {
              const find = val.ID.toLowerCase().includes(Search.toLowerCase()) || val.Name.toLowerCase().includes(Search.toLowerCase());
              return find;
            }).map((customer) =>
              <li key={customer.ID} className="my-8">
                <Customer customer={customer} />
              </li>)}
          </ul>
        </section>
      </main>
    </ >
  )
}
