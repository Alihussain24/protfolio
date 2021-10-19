import React from "react";
import "./product.css";

const Product = ({ img, link }) => {
  return (
    <div className="product">
      <div className="p-brower">
        <p className="circle"></p>
        <p className="circle"></p>
        <p className="circle"></p>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="productImg" />
      </a>
    </div>
  );
};
export default Product;
