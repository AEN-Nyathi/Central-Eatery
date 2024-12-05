type productType = {Name:string,
    Id:string
}
class DynamicState {
    ID: string;
    Name: string;
    Picture?: string;
    YourEmail?: string;
    profilePicturePath?: string;
    Products: productType[];
    Customers: CustomerType[];
    isError: { state: boolean; message: string };
    isFetching: { message: string; state: boolean };
    constructor(
    ) {
        this.ID = "Admin";
        this.Name = "Rise and shine";
        this.Picture = undefined;
        this.YourEmail = undefined;
        this.profilePicturePath = undefined;
        this.Customers = []
        this.Products = [];
        this.isError = { state: false, message: "" };
        this.isFetching = { message: "Feching App State", state: true };
    }
}



export default DynamicState;
