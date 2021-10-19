import React from "react";
import "./productList.css";
import Product from "../product/Product";
import productsData from ".././data";

import {} from "../data";

const ProductList = () => {
  return (
    <div className="productList">
      <div className="product_List_texts">
        <h1 className="product_List_Title">
          Create & Inspire. it's Sofi Ullah
        </h1>
        <p className="product_List_desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
          corporis eius voluptatibus necessitatibus hic saepe maiores nobis
          soluta tempore vero cupiditate ratione reiciendis cum, dolorum
          distinctio beatae tenetur temporibus autem.
        </p>
      </div>

      <p className="product_List2">
        {productsData.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </p>
    </div>
  );
};

export default ProductList;
