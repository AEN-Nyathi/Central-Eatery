import Bread from "@Images/Bread.png";
import { v4 as uuidv4 } from 'uuid';
export type ProductType = {
  ID: string;
  Name: string;
  Units: number;
  size: string;
  image: string;
  type: 'Box' | 'Sauce' | 'Drink';
  Qty: number;
  Price: number;
  brand: string
}
export type ProductCategory = {
  name: string;
  products: ProductType[];
};

const productCategories: ProductCategory[] = [
  {
    name: 'Boxes & Packeging Meterails', products: [
      { ID: uuidv4(), Name: "Pizza Large", Units: 10, Qty: 10, size: "12x12×1,5", image: Bread, type: "Box", Price: 0, brand: "No Name" },
      { ID: uuidv4(), Name: "Pizza Medium", Units: 10, Qty: 10, size: "10×10×1,5", image: Bread, type: "Box", Price: 0, brand: "No Name" },
      { ID: uuidv4(), Name: "Chips Small", Units: 10, Qty: 10, size: "5×5×2.5", image: Bread, type: "Box", Price: 0, brand: "No Name" },
      { ID: uuidv4(), Name: "Chips Medium", Units: 10, Qty: 10, size: "5×7×2.5", image: Bread, type: "Box", Price: 0, brand: "No Name" },
      { ID: uuidv4(), Name: "Chips Large", Units: 10, Qty: 10, size: "8×5×3", image: Bread, type: "Box", Price: 0, brand: "No Name" },

    ]
  },
  {
    name: 'Drinks',
    products: [
      { ID: uuidv4(), Name: "Coke", Qty: 1, Units: 1, size: "400ml", image: Bread, type: "Drink", Price: 0, brand: "Coka-Cola" },
      { ID: uuidv4(), Name: "Sprite", Qty: 1, Units: 1, size: "400ml", image: Bread, type: "Drink", Price: 0, brand: "Coka-Cola" },
      { ID: uuidv4(), Name: "Fanta Orange", Qty: 1, Units: 1, size: "400ml", image: Bread, type: "Drink", Price: 0, brand: "Coka-Cola" },

      //1.25 Liters
      { ID: uuidv4(), Name: "Coke", Qty: 1, Units: 1, size: "1.25 Liter", image: Bread, type: "Drink", Price: 0, brand: "Coka-Cola" },
      { ID: uuidv4(), Name: "Sprite", Qty: 1, Units: 1, size: "1.25 Liter", image: Bread, type: "Drink", Price: 0, brand: "Coka-Cola" },
      { ID: uuidv4(), Name: "Fanta Orange", Qty: 1, Units: 1, size: "1.25 Liter", image: Bread, type: "Drink", Price: 0, brand: "Coka-Cola" },
      { ID: uuidv4(), Name: "Ginger beer", Qty: 1, Units: 1, size: "1.25 Liter", image: Bread, type: "Drink", Price: 0, brand: "Coka-Cola" },
      { ID: uuidv4(), Name: "Fanta Grape", Qty: 1, Units: 1, size: "1.25 Liter", image: Bread, type: "Drink", Price: 0, brand: "Coka-Cola" },
      { ID: uuidv4(), Name: "Fanta Lemon twist", Qty: 1, Units: 1, size: "1.25 Liter", image: Bread, type: "Drink", Price: 0, brand: "Coka-Cola" },
      { ID: uuidv4(), Name: "Stone", Qty: 1, Units: 1, size: "1.25 Liter", image: Bread, type: "Drink", Price: 0, brand: "Coka-Cola" },
      //440L
      { ID: uuidv4(), Name: "Cappy", Qty: 1, Units: 6, size: "400ml", image: Bread, type: "Drink", Price: 0, brand: "Cappy" },
      // ... other drink products
    ],
  },
  {
    name: 'Sauces',
    products: [
      { ID: uuidv4(), Name: "Chill", Qty: 1, Units: 1, size: "5 liter", image: Bread, type: "Sauce", Price: 0, brand: "Top" },
      { ID: uuidv4(), Name: "Peri-peri", Qty: 1, Units: 1, size: "5 Liter", image: Bread, type: "Sauce", Price: 0, brand: "Top" },
      { ID: uuidv4(), Name: "BBQ", Qty: 1, Units: 1, size: "5 Liter", image: Bread, type: "Sauce", Price: 0, brand: "Top" },
      { ID: uuidv4(), Name: "Tomata ", Qty: 1, Units: 1, size: "5 Liter", image: Bread, type: "Sauce", Price: 0, brand: "Top" },
      { ID: uuidv4(), Name: "Sweet & Sticky Marinade", Qty: 1, Units: 1, size: "5 Liter", image: Bread, type: "Sauce", Price: 0, brand: "No Name" },
      { ID: uuidv4(), Name: "Burger Relish", Qty: 1, Units: 1, size: "375ml", image: Bread, type: "Sauce", Price: 0, brand: "No Name" },
      // ... other sauce products
    ],
  },

]


export default productCategories