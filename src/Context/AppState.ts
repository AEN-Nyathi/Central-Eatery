import Bread from "@Images/Bread.png";
import Milk from "@Images/Milk.png";

class AppState {
	ID: string;
	Name: string;
	Picture: string;
	Theme: ThemeTypes;
	YourEmail: string;
	PicturePath?: string;
	isError: ErrorType;
	isLoading: LoadingType;
	isMenuOpen: boolean;
	Products: productType[]

	Customers: CustomerType[]
	constructor(

	) {
		this.Name = "Rise and shine";
		this.ID = "Admin";
		this.Picture = "string";
		this.Theme = {
			Color: 'string',
			Transparency: 1,
			Mode: 'light',
			HexColor: "string",
		};
		this.YourEmail = "string";
		this.PicturePath = "string";

		this.isError = { state: false, message: '' };
		this.isLoading = {
			message: '', progress: "", state: false
		};
		this.isMenuOpen = false;
		this.Products = [
			{ ID: "bread", Name: "bake boss", price: 12, image: Bread },
			{ ID: "Milk", Name: "Milk", price: 12, image: Milk }
		]
		this.Customers = [{
			Name: 'Abram',
			phone: "070 113 8480",
			ID: '1',
			transactions: [
				{ type: "Credit", Date: new Date('1-4-2023'), ID: "1", price: 12, Product: "bake boss", image: Bread  },
				{ type: "Credit", Date: new Date('1-1-2024'), ID: "2", price: 12, Product: "Milk", image: Milk },
				{ type: "Credit", Date: new Date('2-3-2024'), ID: "3", price: 12.5, Product: "bake boss",image: Bread },
				{ type: "Credit", Date: new Date('2-4-2024'), ID: "4", price: 12.5, Product: "bake boss",image: Bread },
				{ type: "Credit", Date: new Date('12-12-2023'), ID: "6", price: 12.5, Product: "bake boss",image: Bread },
				{ type: "Credit", Date: new Date('1-2-2024'), ID: "5", price: 12, Product: "bake boss",image: Bread }
			]

		}, {
			Name: 'Elton',
			phone: "079 999 9999",
			ID: '2',
			transactions: []
		}]
	}
}

export default AppState;
