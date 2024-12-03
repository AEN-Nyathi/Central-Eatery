type handleCreditSubmitType = (selectedProduct: productType | undefined, dispatch: (value: ActionTypes) => void, CustomerId: string, CloseComponent: (value: React.SetStateAction<false | "pay" | "credit">) => void) => void

const handleCreditSubmit: handleCreditSubmitType = (selectedProduct, dispatch, CustomerId, CloseComponent) => {
    if (!selectedProduct) {
        dispatch({ type: "isError", data: { message: "Please select a product.", state: true } })

        return;
    }

    dispatch({
        type: "ADD_TRANSACTION", // Assuming correct action for credit
        data: {
            customerId: CustomerId,
            transaction: {
                ID: `${Date.now()}`, // Generate unique ID
                Date: Date.now(),
                type: "Credit",
                price: selectedProduct.price,
                Product: selectedProduct.Name,
                image: selectedProduct.image,
            },
        },
    });

    CloseComponent(false); // CloseComponent
};
export default handleCreditSubmit