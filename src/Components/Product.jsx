import React from 'react'

const Product = (props) => {
  return (
    <div className="colection__content">
      <img
        src={require("../Images/Items/" + props.prod.photo)}
        alt=""
        className="colection__img"
      />
      <div>
      <h3 className="colection__title">{props.prod.title}</h3>
      <span className="colection__subtitle">{props.prod.gender}</span>
      <span className="colection__price">{props.prod.price} MDL</span>
      </div>
      <button className="button colection__button">
        <i className="fas fa-shopping-cart colection__icon"></i>
      </button>
    </div>
  )
}

export default Product;
