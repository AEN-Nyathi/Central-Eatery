import React from "react";
import Transaction from "@Pages/Customer/Components/Transactions/Transaction";

interface MonthProps {
    year: number;
    month: number;
    transactions: TransactionType[];
}

const Month: React.FC<MonthProps> = ({ year, month, transactions }) => {
    const sortedTransactions = transactions.sort((a, b) => new Date(b.Date).getTime() - new Date(a.Date).getTime());

    const creditAmount = sortedTransactions
        .filter((t) => t.type === "Credit")
        .reduce((total, t) => total + t.price, 0);
    const debitAmount = sortedTransactions
        .filter((t) => t.type === "Debit")
        .reduce((total, t) => total + t.price, 0);
    const balance = debitAmount - creditAmount;

    return (
        <li key={`${year}-${month}`}>
            <div className="sticky -top-2 py-2 -mt-3 bg-light dark:bg-dark">
                <h4>{new Date(year, month, 1).toLocaleDateString()}</h4>
            </div>
            <ul>
                {sortedTransactions.map((transaction) => (
                    <li key={transaction.ID} className="my-4 py-2">
                        <Transaction transaction={transaction} />
                    </li>
                ))}
            </ul>
            <ul className="flex sticky -bottom-2 gap-2 justify-evenly py-2 bg-light dark:bg-dark">
                <li className="text-credit">Credit: R{creditAmount.toFixed(2)}</li>
                <li className="text-debit">Debit: R{debitAmount.toFixed(2)}</li>
                <li>Balance: R{balance.toFixed(2)}</li>
            </ul>
        </li>
    );
};

export default Month;