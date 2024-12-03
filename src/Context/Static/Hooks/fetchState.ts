import usefetchCollection from "../../../Backend/Firebase/FireStore/Hooks/usefetchCollection";

const fetchState = async (dispatch: React.Dispatch<ActionTypes>) => {
    try {
        // const Products = await usefetchCollection<productType>(dispatch, "products");
        const Customers = await usefetchCollection<CustomerType>("customers");
        dispatch({ type: "FETCH_STATE_SUCCESS", data: { Customers } });
    } catch (error) {
        console.error("Error fetching state:", error);
        dispatch({
            type: "FETCH_STATE_FAILURE",
            data: { error: "An error occurred while fetching state. Please try again later." },
        });
    }
}
export { fetchState }