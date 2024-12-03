import { useNavigate } from "react-router-dom"
import CurrencyFormatter from 'react-currency-formatter';
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import image from "@Images/rofile.jpg"
function Customer({ customer }: { customer: CustomerType }) {
    const Navigate = useNavigate()
    const Debit = customer.transactions.filter(transaction => transaction.type == "Debit").reduce((total, product) => total + product.price, 0)
    const Credit = customer.transactions.filter(transaction => transaction.type == "Credit").reduce((total, product) => total + product.price, 0)
    const Balance = Debit - Credit
    return (
        <article onClick={() => Navigate('Customer', { state: { ID: customer.ID } })} className={`border-4 flex gap-4 items-start p-0 cursor-pointer  ${Balance < 0 ? 'bg-credit/20 border-credit' : "bg-debit/20  border-debit"}`}>
            <img src={image} className="size-28 md:size-32 rounded-l-xl bg-gray-500/20" />
            <ul className="w-full col-span-2  pt-1">
                <li  ><h4>{customer.Name}</h4></li>
                <li className="text-credit "><b>Credit:</b> <CurrencyFormatter quantity={Credit} currency="ZAR" /></li>
                <li className="text-debit  "><b>Debit:</b> <CurrencyFormatter quantity={Debit} currency="ZAR" /></li>
                <li className={`flex justify-center md:justify-start gap-2 ${Balance < 0 ? 'text-credit' : "text-debit"}`}><b className="text-xl" >Balance:</b><CurrencyFormatter quantity={Balance} currency="ZAR" /> {Balance < 0 ? <BiDownArrow color="red" /> : <BiUpArrow color="blue" />}</li>
            </ul>
        </article>
    )
}

export default Customer