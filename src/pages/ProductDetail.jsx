import React from 'react';
import { useParams } from 'react-router-dom';
import { sampleProducts } from '@/data/sampleProducts';
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { id } = useParams();
  const product = sampleProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    console.log(`${product.name} added to cart`);
    // Implement actual add to cart functionality here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="mb-6">{product.description}</p>
          <Button onClick={handleAddToCart} size="lg">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;