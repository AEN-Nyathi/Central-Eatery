class AppState {
	ID: string;
	Name: string;
	Picture: string;
	Theme: ThemeTypes;
	YourEmail: string;
	PicturePath?: string;
	createdAt: {
		seconds: number;
		nanoseconds: number;
	};
	isError: ErrorType;
	isLoading: LoadingType;
	isMenuOpen: boolean;
	constructor(

	) {

		// this.user = user;
		this.Name = "E";
		this.ID = "string";
		this.Picture = "string";
		this.Theme = {
			Color: 'string',
			Transparency: 1,
			Mode: 'light',
			HexColor: "string",
		};
		this.YourEmail = "string";
		this.PicturePath = "string";
		this.createdAt = {
			seconds: 1,
			nanoseconds: 2,
		};
		this.isError = { state: false, message: '' };
		this.isLoading = {
			message: '', progress: "", state: false
		};
		this.isMenuOpen = false;
	}
}

export default AppState;
