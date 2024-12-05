import React from 'react';
export {};
declare global {
	type ThemeTypes = {
		Color: string;
		Transparency: number;
		Mode: 'light' | 'dark';
		HexColor: string;
	};

	type BankType = {
		AccountNumber: string;
		BankName: string;
		PhoneNumber: string;
		PayME: string;
	};

	type UserTypes = {
		ID: string;
		JoinedUnder: string;
		PicturePath?: string;
		Picture: string;
		Name: string;
		YourEmail: string;
		Payment: boolean;
		createdAt: {
			seconds: number;
			nanoseconds: number;
		};
		isOnline: boolean;
		Bank: BankType;
		Theme: ThemeTypes;
		Confirm: string[];
	};

	type LoadingType = {
		state: boolean;
		message: string;
		progress: string;
	};

	type ErrorType = {
		state: boolean;
		message: string;
	};

	type AppStateType = {
		ID: string | undefined;
		user: UserTypes;
		Theme: ThemeTypes;
		isMenuOpen: boolean;
		isLoading: LoadingType;
		isError: ErrorType;
		Children: UserTypes[];
		UnderMe: UserTypes[];
		Friends: UserTypes[];
		Leaders: UserTypes[];
		worldClubUsers: UserTypes[];
		JoinedUnder: UserTypes;
	};

	type StoreProps = {
		users: UserTypes[];
		user: UserTypes;
		Children: UserTypes[];
		UnderMe: UserTypes[];
		Friends: UserTypes[];
		Leaders: UserTypes[];
		JoinedUnder: UserTypes;
	};

	type StoreType = AppStateType & {
		dispatch: React.Dispatch<ActionTypes>;
	};

	type ActionTypes =
		| { type: 'INITIALIZE'; data: AppStateType }
		| { type: keyof Bank; data: Bank[keyof Bank] }
		| { type: keyof UserTypes; data: UserTypes[keyof UserTypes] }
		| { type: keyof ThemeTypes; data: ThemeTypes[keyof ThemeTypes] }
		| { type: keyof AppStateType; data: AppStateType[keyof AppStateType] }
		| { type: keyof LoadingType; data: LoadingType[keyof LoadingType] };
}
