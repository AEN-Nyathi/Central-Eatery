import { firestore } from "@Backend/Firebase/firebase.config";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import DynamicState from "./DynamicState";
// import usefetchCollection from "@Backend/Firebase/FireStore/Hooks/usefetchCollection";

const Reducer = (state: DynamicState, action: DynamicActionTypes): DynamicState => {
	switch (action.type) {
		case "FETCH_STATE_SUCCESS": {
			const Customers = action.data.Customers
			return {
				...state, Customers,
				isFetching: { message: "", state: false },
				isError: { state: false, message: '' },
			};
		}
		case "FETCH_STATE_START": {
			return {
				...state,
			};
		}
		case "FETCH_STATE_FAILURE": {
			return {
				...state,
			}
		}

		case 'ADD_TRANSACTION': {
			const { customerId, transaction } = action.data;
			const customerIndex = state.Customers.findIndex(
				(customer) => customer.ID === customerId
			);
			if (customerIndex !== -1) {
				const updatedCustomer = { ...state.Customers[customerIndex] };
				updatedCustomer.transactions.push(transaction);
				updateDoc(doc(firestore, "customers", customerId), { transactions: arrayUnion(transaction) })
				return {
					...state,
					Customers: [...state.Customers.slice(0, customerIndex), updatedCustomer, ...state.Customers.slice(customerIndex + 1)],
				};
			} else {
				return { ...state };
			}
		}


		default:
			return state;
	}
};

export default Reducer;
