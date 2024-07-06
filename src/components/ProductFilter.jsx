import React, { useState } from 'react';
import { Select, Slider, Checkbox } from 'shadcn';

const ProductFilter = ({ categories, brands, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    onFilterChange({ category: event.target.value, priceRange, brands: selectedBrands });
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
    onFilterChange({ category: selectedCategory, priceRange: value, brands: selectedBrands });
  };

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    const newSelectedBrands = event.target.checked
      ? [...selectedBrands, brand]
      : selectedBrands.filter((b) => b !== brand);
    setSelectedBrands(newSelectedBrands);
    onFilterChange({ category: selectedCategory, priceRange, brands: newSelectedBrands });
  };

  return (
    <div className="product-filter">
      <div className="filter-category">
        <label htmlFor="category">Category</label>
        <Select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Select>
      </div>

      <div className="filter-price-range">
        <label htmlFor="price-range">Price Range</label>
        <Slider
          id="price-range"
          value={priceRange}
          onChange={handlePriceRangeChange}
          min={0}
          max={100}
          step={1}
        />
        <div>
          ${priceRange[0]} - ${priceRange[1]}
        </div>
      </div>

      <div className="filter-brands">
        <label>Brands</label>
        {brands.map((brand) => (
          <div key={brand}>
            <Checkbox
              value={brand}
              checked={selectedBrands.includes(brand)}
              onChange={handleBrandChange}
            />
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilter;