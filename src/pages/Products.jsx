import React from 'react';
import './Products.css'; // Assuming you will create a CSS file for styling

const sampleProducts = [
  { id: 1, name: 'Product 1', price: '$10.00', image: 'path/to/image1.jpg' },
  { id: 2, name: 'Product 2', price: '$20.00', image: 'path/to/image2.jpg' },
  { id: 3, name: 'Product 3', price: '$30.00', image: 'path/to/image3.jpg' },
  { id: 4, name: 'Product 4', price: '$40.00', image: 'path/to/image4.jpg' },
  // Add more products as needed
];

const Products = () => {
  const handleAddToCart = (product) => {
    console.log(`${product.name} added to cart`);
    // Implement add to cart functionality here
  };

  return (
    <div className="products-grid">
      {sampleProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">{product.price}</p>
          <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
```

```css
/* src/pages/Products.css */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: #fff;
}

.product-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-name {
  font-size: 1.2em;
  margin: 10px 0;
}

.product-price {
  font-size: 1em;
  color: #888;
}

.add-to-cart-button {
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
}

.add-to-cart-button:hover {
  background-color: #218838;
}