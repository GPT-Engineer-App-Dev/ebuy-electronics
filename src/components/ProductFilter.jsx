import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { categories, brands } from '@/data/sampleProducts';

const ProductFilter = ({ filters, onFilterChange }) => {
  const handleCategoryChange = (value) => {
    onFilterChange({ category: value });
  };

  const handlePriceChange = (value) => {
    onFilterChange({ priceRange: value });
  };

  const handleBrandChange = (value) => {
    onFilterChange({ brand: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="category">Category</Label>
        <Select onValueChange={handleCategoryChange} value={filters.category}>
          <SelectTrigger id="category">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Categories</SelectItem>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label>Price Range</Label>
        <Slider
          min={0}
          max={2000}
          step={10}
          value={filters.priceRange}
          onValueChange={handlePriceChange}
          className="mt-2"
        />
        <div className="flex justify-between mt-2">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>

      <div>
        <Label htmlFor="brand">Brand</Label>
        <Select onValueChange={handleBrandChange} value={filters.brand}>
          <SelectTrigger id="brand">
            <SelectValue placeholder="Select brand" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Brands</SelectItem>
            {brands.map((brand) => (
              <SelectItem key={brand} value={brand}>{brand}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default ProductFilter;