import React from 'react';
import AppState from './AppState';
export { };
declare global {
	type ThemeTypes = {
		Color: string;
		Transparency: number;
		Mode: 'light' | 'dark';
		HexColor: string;
	};

	type LoadingType = {
		state: boolean;
		message: string;
		progress: string;
	};
	type productType = {
		ID: string,
		Name: string,
		price: number,
		image: string
	};
	type TransactionType = {
		ID: string,
		Product?: string,
		Date: Date,
		price: number,
		type: "Credit" | "Debit",
		image?: string
	}
	type CustomerType = {
		Name: string,
		ID: string,
		phone: string;
		transactions: TransactionType[]
	}

	type ErrorType = {
		state: boolean;
		message: string;
	};





	type StoreType = AppState & {
		dispatch: React.Dispatch<ActionTypes>;
	};

	type ActionTypes =
		| { type: 'INITIALIZE'; data: AppState }
		| { type: keyof AppState; data: AppState[keyof AppState] }
		| {
			type: "ADD_TRANSACTION"; data: {
				customerId: string;
				transaction: TransactionType;
			}
		}

}
