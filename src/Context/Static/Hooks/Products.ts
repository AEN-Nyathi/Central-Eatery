import KotaMeal from '@Images/Menus/KotaMeal.png';
import FishMeal from '@Images/Menus/FishMeal.png';
import Kota from '@Images/Menus/Kota.png';
import KotaSingleMeal from '@Images/Menus/Kota.jpg';
import Chips from '@Images/Menus/Chips.png';
import Cappy from '@Images/Menus/Cappy.png';
import Drinks from '@Images/Menus/Drinks.png';
import BurgerMeal from '@Images/Menus/BurgerMeal.png';
import ChickenMeal from '@Images/Menus/ChickenMeal.png';
import Coca_Cola from '@Images/Menus/Coca-Cola.png';

export type ProductsType = {
  Name: string,
  Products: ProductType[],
  Image?: string
}[]

const Products: ProductsType = [{
  Name: "Meals", Products: [
    { Name: 'Burger Meals', Discription: ['Burger', 'Chips', "Coca-Cola 440ml"], Price: 100, Image: BurgerMeal },
    { Name: 'Chicken Meals', Discription: ['1/4 Chicken', 'Bun', 'Chips', "Coca-Cola 440ml"], Price: 80, Image: ChickenMeal },
    { Name: 'Fish Meals', Discription: ['Fish', 'Chips', "Coca-Cola 440ml"], Price: 80, Image: FishMeal },
  ]
}, {
  Name: "Kota Meals", Image: KotaMeal, Products: [
    { Name: 'Smash Kota Meals', Image: KotaMeal, Discription: ['Smash Kota', 'Chips', "Coca-Cola 440ml"], Price: 70 },
    { Name: 'Smash Kota Single Meals', Image: KotaSingleMeal, Discription: ['Smash Kota', 'Chips'], Price: 70 },
    { Name: 'Double Smash Kota Meals', Image: KotaMeal, Discription: ['Double Smash Kota', 'Chips', "Coca-Cola 440ml"], Price: 70 },
    { Name: 'Double Smash Kota Single Meals', Image: KotaSingleMeal, Discription: ['Double Smash Kota', 'Chips',], Price: 70 },
    { Name: 'Thrown Kota Meals', Image: KotaMeal, Discription: ['Thrown Kota', 'Chips', "Coca-Cola 440ml"], Price: 70 },
    { Name: 'Thrown Kota Single Meals', Image: KotaSingleMeal, Discription: ['Thrown Kota', 'Chips',], Price: 70 }
  ]
},
{
  Name: "Kota", Image: Kota, Products: [
    { Name: 'Smash Kota', Image: Kota, Discription: ["Bread", "Chips", "Polony", "Archaar", "Rasaian", "Egg", "Lettuce"], Price: 30 },
    { Name: 'Double Smash Kota', Image: Kota, Discription: ["Bread", "Chips", "Polony", "Archaar", "Rasaian", "Egg", "Lettuce", 'Cheese'], Price: 35 },
    { Name: 'Thrown Kota', Image: Kota, Discription: ["Bread", "Chips", "Polony", "Archaar", "Rasaian", "Egg", "Lettuce", 'Cheese', "Patty"], Price: 75 }]
},
{
  Name: "Chips", Image: Chips, Products: [
    { Name: 'Small Chips', Image: Chips, Discription: ["5cm × 5cm × 2.5cm Box"], Price: 25 },
    { Name: 'Medium Chips', Image: Chips, Discription: ["5cm × 7cm × 2.5cm Box"], Price: 35 },
    { Name: 'Large Chips', Image: Chips, Discription: ["8cm × 5cm × 3cm Box"], Price: 50 }]
}, {
  Name: "Beverages", Image: Drinks, Products: [
    { Name: 'Coca-Cola', Image: Coca_Cola, Discription: ["Coca-cola 1.25L", "Coca-cola 400ml"], Price: 15 },
    { Name: 'Mocktails', Discription: ["flavour Mocktails", "flavour Mocktails", "flavour Mocktails"], Price: 40 },
    { Name: 'Still Water', Discription: ["still Water 500ml"], Price: 7 },
    { Name: 'Still Water', Discription: ["still Water 1L"], Price: 12 },
    { Name: 'Cappy', Image: Cappy, Discription: ["pineapple flavour"], Price: 14 }]
}]

export default Products