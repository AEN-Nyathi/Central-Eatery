import { BiDownArrow, BiUpArrow } from "react-icons/bi"

function Transaction({ transaction }: { transaction: TransactionType }) {


    return (
        <article key={transaction.ID} className={` ${transaction.type == "Credit" ? "bg-credit/30 border-credit flex gap-4 md:gap-8 " : "bg-debit/30 border-debit "}`}>
            {transaction.type == "Credit" ? <img alt={transaction.Product} src={transaction.image} className="size-28 rounded-l-2xl" /> : null}
            <ul className="basis-full" >
                <li className={`text-right  flex gap-2 justify-end font-black ${transaction.type == "Credit" ? "mt-2 mr-2" : " "}`}> {transaction.type} {transaction.type == "Credit" ? <BiDownArrow color="red" /> : <BiUpArrow color="blue" />}</li>
                {transaction.type == "Credit" ? <li ><b>Product:</b> {transaction.Product}</li> : null}
                <li><b>Price:</b> R{transaction.price}</li>
                <li><b>Date:</b> {new Date(transaction.Date).toDateString()}</li>
            </ul>
        </article>
    )
}

export default Transaction