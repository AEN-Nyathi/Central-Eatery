import image from "@Images/rofile.jpg"
import { MdPaid } from 'react-icons/md';
function CustomerDetails({ Customer, setDisplayedComponent }: { Customer: CustomerType, setDisplayedComponent: React.Dispatch<React.SetStateAction<false | "pay" | "credit">> }) {
    const Debit = Customer.transactions.filter(transaction => transaction.type == "Debit").reduce((total, product) => total + product.price, 0)
    const Credit = Customer.transactions.filter(transaction => transaction.type == "Credit").reduce((total, product) => total + product.price, 0)
    const Balance = Debit - Credit
    return (
        <section className="sticky w-screen md:px-16 p-2 top-0 " >
            <div className="flex gap-2 md:gap-8">
                <img src={image} className="size-16  rounded-full bg-debit" />
                <ul className=" grid grid-cols-2 justify-around gap-x-2  col-span-3">
                    <li><b>{Customer.Name}</b></li>
                    <li><b>{Customer.phone}</b></li>
                    <li className="text-credit ">Credit: R{Credit.toFixed(2)}</li>
                    <li className="text-debit">Debit: R{Debit.toFixed(2)}</li>
                    <li className={`${Balance > 0 ? 'text-debit' : "text-credit"}`}>Balance: R{Balance.toFixed(2)}</li>
                </ul>
            </div>
            <div className="flex justify-between mt-2">
                <button onClick={() => setDisplayedComponent("pay")} className="bg-debit/50"><MdPaid /> Pay</button>
                <button onClick={() => setDisplayedComponent("credit")} className="bg-credit/50"><MdPaid />Credit</button>
            </div>
        </section>
    )
}

export default CustomerDetails 