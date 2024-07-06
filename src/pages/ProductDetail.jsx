import React from 'react';

const ProductDetail = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }

  const { image, name, price, description } = product;

  const handleAddToCart = () => {
    // Logic to add the product to the cart
    console.log(`${name} added to cart`);
  };

  return (
    <div className="product-detail">
      <img src={image} alt={name} className="product-image" />
      <h1 className="product-name">{name}</h1>
      <p className="product-price">${price.toFixed(2)}</p>
      <p className="product-description">{description}</p>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
```

```css
/* Assuming you have a CSS file to style the component */
.product-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.product-image {
  width: 100%;
  max-width: 500px;
  height: auto;
}

.product-name {
  font-size: 2em;
  margin: 20px 0;
}

.product-price {
  font-size: 1.5em;
  color: #b12704;
}

.product-description {
  font-size: 1em;
  margin: 20px 0;
}

.add-to-cart-button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #ff9900;
  border: none;
  cursor: pointer;
}

.add-to-cart-button:hover {
  background-color: #e68a00;
}