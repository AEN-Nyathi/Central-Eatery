// import productCategories from "./Products";
import ItemCategories from "./Items";
import Products from "./Products";

class StaticState {
	ID: string;
	Name: string;
	Picture: string;
	YourEmail: string;
	profilePicturePath?: string;
	isError: { state: boolean; message: string };
	isLoading: { message: string; state: boolean };
	isMenuOpen: boolean;
	ItemCategories: typeof ItemCategories;
	Customers: CustomerType[];
	ProductsGroups: typeof Products
	Order: ProductType[]
	constructor(

	) {
		this.ID = "Admin";
		this.Name = "Central Eatery";
		this.Picture = "";
		this.YourEmail = "";
		this.profilePicturePath = undefined;
		this.isError = { state: false, message: "" };
		this.isLoading = { message: "", state: false };
		this.isMenuOpen = false;
		this.ItemCategories = ItemCategories;
		this.ProductsGroups = Products
		this.Customers = []
		this.Order = []
	}
}



export default StaticState;
