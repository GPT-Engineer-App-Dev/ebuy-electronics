import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCard = ({ product }) => {
  const { image, name, price } = product;

  const handleAddToCart = () => {
    console.log(`${name} added to cart`);
    // Implement actual add to cart functionality here
  };

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600">${price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleAddToCart} className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;