import { useStore } from "@Backend/hooks/useStore";
import Customer from "@Components/User/Customer";
import { BiSearch } from "react-icons/bi";
import CurrencyFormatter from 'react-currency-formatter';

export default function Home() {
  const { Customers } = useStore();
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
  const Balance = totalCredit - totalDebit;
  return (
    <>
      <section className="sticky w-screen p-2 m-0 top-0 bg-blue-50 dark:bg-blue-950 " >
        <ul className="grid grid-cols-2">
          <li className="text-red-500"><b>Credit:</b> <CurrencyFormatter quantity={totalCredit} currency="ZAR" /></li>
          <li className="text-blue-500"><b>Debit:</b> <CurrencyFormatter quantity={totalDebit} currency="ZAR" /></li>
          <li><b>Customers:</b> {Customers.length}</li>
          <li className={`${Balance > 0 ? 'text-blue-500' : "text-red-500"}`}><b>Balance:</b> <CurrencyFormatter quantity={Balance} currency="ZAR" /></li>
      
        </ul>
        <div className="flex gap-2">
          <input className="w-full" type="search" placeholder="Customer Name..." />
          <label htmlFor="Customers"><BiSearch /></label>
        </div>

      </section>
      <main>
       
        <section>
          <ul>
            {Customers.map((customer) => <li className="my-8">
              <Customer customer={customer} />
            </li>)}
          </ul>
        </section>
      </main>
    </ >
  )
}
