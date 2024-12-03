
import restructureTransactions from "@Backend/hooks/useRestructureTransactions";
import Month from "./Month";

const Trading: React.FC<{ Customer: CustomerType }> = ({ Customer }) => {


  

    const restructuredTransactions = restructureTransactions(Customer.transactions);



    return (
        <ul className="md:mx-8">
            {restructuredTransactions.map((month) => (
                <Month key={`${month.year}-${month.month}`} year={month.year} month={month.month} transactions={month.transactions} />
            ))}
        </ul>
    );
}

export default Trading