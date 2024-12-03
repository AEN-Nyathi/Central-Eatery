type handleDebitSubmitType = (amount: number| undefined, dispatch: (value: DynamicActionTypes) => void, CustomerId: string, CloseComponent: (value: React.SetStateAction<false | "pay" | "credit">) => void) => void

const handleDebitSubmit: handleDebitSubmitType = (amount, dispatch, CustomerId, CloseComponent) => {
    if (!amount || amount <= 0 ) {
        dispatch({ type: "isError", data: { message: "Please enter a valid debit amount.", state: true } })
        return;
    }

    dispatch({
        type: "ADD_TRANSACTION",
        data: {
            customerId: CustomerId,
            transaction: {
                ID: `${Date.now()}`, // Generate unique ID
                Date: Date.now(),
                type: "Debit",
                price: amount,
            },
        },
    });

    CloseComponent(false); // Close debit component
};
export default handleDebitSubmit