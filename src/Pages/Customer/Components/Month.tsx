import Transaction from "@Pages/Customer/Components/Transactions/Transaction";

interface MonthProps {
    Transactions: {
        date: {
            Month: number;
            year: number;
        };
        hasTransactions: boolean;
        transactions: TransactionType[];
    }
}

const Month: React.FC<MonthProps> = ({ Transactions }) => {

    const transactions = Transactions.transactions.sort((a, b) => a.Date.getDay() - b.Date.getDay())

    const creditAmount = transactions
        .filter((t) => t.type === "Credit")
        .reduce((total, t) => total + t.price, 0);
    const debitAmount = transactions
        .filter((t) => t.type === "Debit")
        .reduce((total, t) => total + t.price, 0);
    const balance = debitAmount - creditAmount;

    return (
        <li key={Transactions.date.Month}>
            <div className="sticky -top-2 py-2 -mt-3 bg-light dark:bg-dark">
                <h4>{new Date(Transactions.date.year, Transactions.date.Month, 1).toLocaleDateString()}</h4>
            </div>
            <ul>
                {transactions.map((transaction) => (
                    <li key={transaction.ID} className="my-4 py-2">
                        <Transaction transaction={transaction} />
                    </li>
                ))}
            </ul>
            <ul className="flex sticky -bottom-2 gap-2 justify-evenly py-2 bg-light dark:bg-dark">
                <li className="text-red-500">Credit: R{creditAmount.toFixed(2)}</li>
                <li className="text-blue-500">Debit: R{debitAmount.toFixed(2)}</li>
                <li>Balance: R{balance.toFixed(2)}</li>
            </ul>
        </li>
    );
}

export default Month