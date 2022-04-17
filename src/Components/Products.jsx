import React, { useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

export default function Products() {
  const [products, setProducts] = useState([
    {id: 1, title: "Maiou", gender: "bărbați", price: 99, photo: "t-shirt.png"},
    {id: 2, title: "Cămașă", gender: "bărbați", price: 299, photo: "shirt.png"},
    {id: 3, title: "Jachetă Jeans", gender: "bărbați", price: 499, photo: "jeans-jacket.png"},
    {id: 4, title: "Jeans", gender: "bărbați", price: 299, photo: "jeans.png"},
    {id: 5, title: "Maiou 2", gender: "bărbați", price: 99, photo: "t-shirt.png"},
    {id: 6, title: "Cămașă 2", gender: "bărbați", price: 299, photo: "shirt.png"},
    {id: 7, title: "Jachetă Jeans 2", gender: "bărbați", price: 499, photo: "jeans-jacket.png"},
    {id: 8, title: "Jeans 2", gender: "bărbați", price: 299, photo: "jeans.png"},
  ])

  return (
    <section className="section colection" id="colection">
      <h3 className="section__title">Colecție</h3>

      <div className="colection__container container grid">
        {products.map(prod => <Product prod={prod} key={prod.id}/>)}
      </div>
      
      <Link
        to="/store"
        className="info-btn"
        style={{
          textAlign: "center",
          width: "220px",
          paddingTop: "15px",
          paddingBottom: "15px",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        Mai multe...
      </Link>
    </section>
  );
}
