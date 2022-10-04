import ProductTile from "./components/ProductTile";
import "./App.css";

const products = [
  {
    name: "Brownie",
    price: "£3.50",
    image: "./images/brownies.jpg",
  },
  {
    name: "Carrot cake",
    price: "£3.00",
    image: "./images/carrot cake.jpg",
  },
  {
    name: "Sponge",
    price: "£2.50",
    image: "./images/sponge.jpg",
  },
  {
    name: "Blueberry muffin",
    price: "£2.50",
    image: "./images/blueberry muffin.jpg",
  },
  {
    name: "Toast",
    price: "£1.00",
    image: "./images/toast.jpg",
  },
  {
    name: "Savoury muffin",
    price: "£1.50",
    image: "./images/savoury muffin.jpg",
  },
  {
    name: "Sandwich",
    price: "£1.90",
    image: "./images/sandwich.jpg",
  },
  {
    name: "Tea",
    price: "£1.00",
    image: "./images/tea.jpg",
  },
  {
    name: "Coffee",
    price: "£1.50",
    image: "./images/coffee.jpg",
  },
  {
    name: "Iced coffee",
    price: "£2.30",
    image: "./images/iced coffee.jpg",
  },
  {
    name: "Hot chocolate",
    price: "£2.00",
    image: "./images/hot chocolate.jpg",
  },
];


function App() {
  return (
    <div className="container">
      {products.map((product, i) => (
        <ProductTile
          key={i}
          productName={product.name}
          productPrice={product.price}
          productImageSrc={product.image}/>
      ))}
    </div>
  );
}

{/* if you want to include animation, npm install & replace
with the below (include commented out Product.jsx code too)

import { motion } from "framer-motion";

function App() {
  return (
    <div className="container">
      {products.map((product, i) => (
        <ProductTile
          key={i}
          stagger={i} 
          productName={product.name}
          productPrice={product.price}
          productImageSrc={product.image}/>
      ))}
    </div>
  );
} 

*/}

export default App;
