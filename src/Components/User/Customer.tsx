import { useNavigate } from "react-router-dom"
import Images from "@Images/rofile.jpg";
import CurrencyFormatter from 'react-currency-formatter';
import { BiDownArrow, BiUpArrow } from "react-icons/bi";

function Customer({ customer }: { customer: CustomerType }) {
    const Navigate = useNavigate()
    const Debit = customer.transactions.filter(transaction => transaction.type == "Debit").reduce((total, product) => total + product.price, 0)
    const Credit = customer.transactions.filter(transaction => transaction.type == "Credit").reduce((total, product) => total + product.price, 0)
    const Balance = Debit - Credit
    return (
        <article onClick={() => Navigate('Customer', { state: { ID: customer.ID } })} className={`border grid grid-cols-3 gap-4 items-start p-0 cursor-pointer  ${Balance < 0 ? 'bg-red-300/50 dark:bg-red-950/50 border-red-500' : "bg-blue-300/50 dark:bg-blue-950/50 border-blue-500"}`}>
            <img src={Images} className="size-28 rounded-l-2xl bg-green-500" />
            <ul className=" col-span-2  pt-1">
                <li  ><h4>{customer.Name}</h4></li>
                <li className="text-red-500 "><b>Credit:</b> <CurrencyFormatter quantity={Credit} currency="ZAR" /></li>
                <li className="text-blue-500  "><b>Debit:</b> <CurrencyFormatter quantity={Debit} currency="ZAR" /></li>
                <li className={`flex justify-center gap-2 ${Balance < 0 ? 'text-red-500' : "text-blue-500"}`}><b className="text-xl" >Balance:</b><CurrencyFormatter quantity={Balance} currency="ZAR" /> {Balance < 0 ? <BiDownArrow color="red" /> : <BiUpArrow color="blue" />}</li>
            </ul>
        </article>
    )
}

export default Customer