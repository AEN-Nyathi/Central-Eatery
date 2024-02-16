import AppState from "@Context/AppState";

const reducer = (state: AppState = new AppState(), action: ActionTypes): AppState => {
	switch (action.type) {
		case 'INITIALIZE':
			return new AppState();
		case 'ADD_TRANSACTION': {
			const { customerId, transaction } = action.data;
			const customerIndex = state.Customers.findIndex(
				(customer) => customer.ID === customerId
			);
			if (customerIndex !== -1) {
				// Clone the customer object to avoid direct mutation
				const updatedCustomer = { ...state.Customers[customerIndex] };
				updatedCustomer.transactions.push(transaction);
				// Create a new state object with the updated customer
				return {
					...state,
					Customers: [...state.Customers.slice(0, customerIndex), updatedCustomer, ...state.Customers.slice(customerIndex + 1)],
				};
			} else {
				// Handle error gracefully, e.g., log a warning
				console.warn(`Customer with ID ${customerId} not found`);
				return state;
			}
		}
		case 'isLoading':
		case 'isMenuOpen':
		case 'isError':
			if (action.type in state) {
				return {
					...state,
					[action.type]: action.data,
				};
			}
			return state;

		default:
			return state;
	}
};

export default reducer;
