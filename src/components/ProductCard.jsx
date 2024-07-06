```jsx
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  const { image, name, price } = product;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price.toFixed(2)}</p>
      <button className="add-to-cart-button" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
```

Note: This implementation assumes that the `product` prop is an object with `image`, `name`, and `price` properties, and that `onAddToCart` is a function passed as a prop to handle adding the product to the cart.