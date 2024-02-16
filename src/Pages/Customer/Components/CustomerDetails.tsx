import CurrencyFormatter from 'react-currency-formatter';
import Images from "@Images/rofile.jpg";
import { MdPaid } from 'react-icons/md';
function CustomerDetails ({ Customer, setDisplayedComponent }: { Customer: CustomerType, setDisplayedComponent: React.Dispatch<React.SetStateAction<false | "pay" | "credit">> }) {
    const Debit = Customer.transactions.filter(transaction => transaction.type == "Debit").reduce((total, product) => total + product.price, 0)
    const Credit = Customer.transactions.filter(transaction => transaction.type == "Credit").reduce((total, product) => total + product.price, 0)
    const Balance = Debit - Credit
  return (
      <section className="sticky w-screen p-2 top-0 bg-blue-50 dark:bg-blue-950" >
          <div className="grid grid-cols-4">
              <img src={Images} className="size-16  rounded-full bg-green-500" />
              <ul className="w-full grid grid-cols-2 justify-around gap-x-2  col-span-3">
                  <li><b>{Customer.Name}</b></li>
                  <li><b>{Customer.phone}</b></li>
                  <li className="text-red-500"><b>Credit:</b> <CurrencyFormatter quantity={Credit} currency="ZAR" /></li>
                  <li className="text-blue-500"><b>Debit:</b> <CurrencyFormatter quantity={Debit} currency="ZAR" /></li>
                  <li className={`${Balance > 0 ? 'text-blue-500' : "text-red-500"}`}><b>Balance:</b> <CurrencyFormatter quantity={Balance} currency="ZAR" /></li>
              </ul>
          </div>
          <div className="flex justify-between mt-2">
              <button onClick={() => setDisplayedComponent("pay")} className="bg-blue-500/50"><MdPaid /> Pay</button>
              <button onClick={() => setDisplayedComponent("credit")} className="bg-red-500/50"><MdPaid />Credit</button>
          </div>
      </section>
  )
}

export default CustomerDetails 