import { BiDownArrow, BiUpArrow } from "react-icons/bi"

function Transaction({ transaction }: { transaction: TransactionType }) {


    return (
        <article key={transaction.ID} className={`border ${transaction.type == "Credit" ? "bg-red-300/50 dark:bg-red-950/50 border-red-500 p-0 flex gap-2 " : " bg-blue-300/50 dark:bg-blue-950/50 border-blue-500 "}`}>
            {transaction.type == "Credit" ? <img alt={transaction.Product} src={transaction.image} className="size-28 rounded-l-2xl" /> : null}
            <ul className="basis-full" >
                <li className={`text-right  flex gap-2 justify-end ${transaction.type == "Credit" ? "text-red-500 mt-2 mr-2 " : " text-blue-500  "}`}> {transaction.type} {transaction.type == "Credit" ? <BiDownArrow color="red" /> : <BiUpArrow color="blue" />}</li>
                {transaction.type == "Credit" ? <li ><b>Product:</b> {transaction.Product}</li> : null}
                <li><b>Price:</b> R{transaction.price}</li>
                <li><b>Date:</b> {transaction.Date.toDateString()}</li>
            </ul>
        </article>
    )
}

export default Transaction