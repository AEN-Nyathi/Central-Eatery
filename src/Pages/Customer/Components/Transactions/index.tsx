
import Month from "./Month";

const Trading: React.FC<{ Customer: CustomerType }> = ({ Customer }) => {


    function restructureTransactions(transactions: TransactionType[]): { year: number; month: number; transactions: TransactionType[] }[] {
        // Group transactions by year and month
        const yearGroups = transactions.reduce((acc, transaction) => {
            const year = transaction.Date.getFullYear();
            const month = transaction.Date.getMonth();
            const key = `${year}-${month}`;

            if (!acc[key]) {
                acc[key] = { year, month, transactions: [] };
            }

            acc[key].transactions.push(transaction);
            return acc;
        }, {} as Record<string, { year: number; month: number; transactions: TransactionType[] }>);

        // Return restructured data as an array
        return Object.values(yearGroups).sort((a, b) => b.month - a.month).sort((a, b) => b.year - a.year);
    }
  
    const restructuredTransactions = restructureTransactions(Customer.transactions);

    return (
        <ul>
            {restructuredTransactions.map((month) => (
                <Month key={`${month.year}-${month.month}`} year={month.year} month={month.month} transactions={month.transactions} />
            ))}
        </ul>
    );
}

export default Trading