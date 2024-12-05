import StaticState from "@Context/Static/Hooks/StaticState";

const Reducer = (state: StaticState, action: StaticActionTypes): StaticState => {
	switch (action.type) {
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
		case "Add_Order": return {
			...state,
			Order: [...state.Order, action.data.Products],
		}
		case "Remove_Order": return {
			...state,
			Order: state.Order.filter((orders) => orders.Name == action.data.Products.Name),
		}
		default:
			return state;
	}
};

export default Reducer;
