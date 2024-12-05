import React from 'react';

import DynamicState from './Dynamic/Hooks/DynamicState';
import StaticState from './Static/Hooks/StaticState';
export { };

declare global {
	type ProductType = {
		Name: string,
		Description: string[]
		Price: number,
		Image?: string
	}
	type CreditType = {
		ID: string,
		Product: string,
		Date: number,
		price: number,
		type: "Credit",
		image: string
	}

	type DebitType = {
		ID: string,
		Date: number,
		price: number,
		type: "Debit",
	}
	type TransactionType = CreditType | DebitType;

	type CustomerType = {
		Name: string,
		ID: string,
		phone: string;
		image?: string,
		transactions: TransactionType[]
	}

	type ErrorType = {
		state: boolean;
		message: string;
	};

	type DynamicStateType = DynamicState & {
		dispatch: React.Dispatch<ActionTypes>;
	};
	type StaticStateType = StaticState & {
		dispatch: React.Dispatch<StaticActionTypes>;
	};

	type DynamicActionTypes =
		{ type: keyof DynamicState; data: DynamicState[keyof DynamicState] }
		| { type: "ADD_TRANSACTION"; data: { customerId: string; transaction: TransactionType } }
		| { type: "FETCH_STATE_START"; collection: string }
		| { type: "FETCH_STATE_SUCCESS"; data: { Customers: CustomerType[] } }
		| { type: "FETCH_STATE_FAILURE"; data: { error: string } }
		| { type: "Add_Order"; data: { Products: ProductType } }
		| { type: "Remove_Order"; data: { Products: ProductType } };

	type StaticActionTypes =
		{ type: keyof StaticState; data: StaticState[keyof StaticState] } | { type: "Add_Order"; data: { Products: ProductType } } | { type: "Remove_Order"; data: { Products: ProductType } } | {
			type: 'isLoading',
			data: {
				state: string | boolean,
				message: string,
				progress: progress,
			}
		}
}
