import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/data/sampleProducts';
import { Select, SelectItem } from 'shadcn';

const Products = () => {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const filteredProducts = sampleProducts.filter((product) => {
    let categoryMatch = categoryFilter === 'All' || product.category === categoryFilter;
    let priceMatch = priceFilter === 'All' || 
                     (priceFilter === 'Under $50' && product.price < 50) ||
                     (priceFilter === '$50 - $100' && product.price >= 50 && product.price <= 100) ||
                     (priceFilter === 'Above $100' && product.price > 100);
    return categoryMatch && priceMatch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="mb-6 flex space-x-4">
        <Select value={categoryFilter} onChange={handleCategoryChange}>
          <SelectItem value="All">All Categories</SelectItem>
          <SelectItem value="Electronics">Electronics</SelectItem>
          <SelectItem value="Clothing">Clothing</SelectItem>
          <SelectItem value="Home">Home</SelectItem>
        </Select>
        <Select value={priceFilter} onChange={handlePriceChange}>
          <SelectItem value="All">All Prices</SelectItem>
          <SelectItem value="Under $50">Under $50</SelectItem>
          <SelectItem value="$50 - $100">$50 - $100</SelectItem>
          <SelectItem value="Above $100">Above $100</SelectItem>
        </Select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;