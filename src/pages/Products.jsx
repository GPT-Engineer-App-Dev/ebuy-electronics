import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import ProductFilter from '@/components/ProductFilter';
import { sampleProducts } from '@/data/sampleProducts';

const Products = () => {
  const [products, setProducts] = useState(sampleProducts);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 2000],
    brand: '',
  });

  useEffect(() => {
    const filteredProducts = sampleProducts.filter((product) => {
      const categoryMatch = !filters.category || product.category === filters.category;
      const priceMatch = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
      const brandMatch = !filters.brand || product.brand === filters.brand;
      return categoryMatch && priceMatch && brandMatch;
    });
    setProducts(filteredProducts);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <ProductFilter filters={filters} onFilterChange={handleFilterChange} />
        </div>
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;