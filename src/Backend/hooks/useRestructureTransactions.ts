
function useRestructureTransactions(transactions: TransactionType[]): { year: number; month: number; transactions: TransactionType[] }[] {
    // Group transactions by year and month
    console.log("transactions", transactions)
    const yearGroups = transactions.reduce((acc, transaction) => {
        const year = new Date(transaction.Date).getFullYear();
        const month = new Date(transaction.Date).getMonth();
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
export default useRestructureTransactions