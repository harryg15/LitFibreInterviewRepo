import React from "react";
import "./ProductTile.css";

const ProductTile = ({ productName, productPrice, productImageSrc }) => {
  return (
    <div className="productTile" >
      <h2 className="productHeader">{productName}</h2>
      <img src={productImageSrc} alt="product" className="productImage" />
      <p>{productPrice}</p>
    </div>
  );
};

{/* if you want to include animation, npm install & replace
with the below (include commented out App.jsx code too)

import { motion } from "framer-motion"; 

const ProductTile = ({ productName, productPrice, productImageSrc, stagger }) => {
  return (
    <motion.div className="productTile" 
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: 0.5, delay: stagger * 0.5}}
    >
      <h2 className="productHeader">{productName}</h2>
      <img src={productImageSrc} alt="product" className="productImage" />
      <p>{productPrice}</p>
    </motion.div>
  );
};

*/}

export default ProductTile;
