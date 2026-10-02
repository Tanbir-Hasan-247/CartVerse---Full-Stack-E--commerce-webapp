const FilterSection = ({priceRange, handlePriceChange, categories, selectedCategory, handleCategoriesChange, searchQuary, handleSearchQuary, sortOrder, handleOrderChange}) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-4 gap-4 mb-8 max-w-7xl mx-auto">
            
            {/* 1. Price Range */}
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col justify-between">
                <h3 className="text-gray-600 text-sm font-medium mb-4">Price Range</h3>
                
                {/* Max Price Slider */}
                <div className="flex items-center gap-3 mb-3">
                    <input type="number" min="0" max={priceRange[1]} value={priceRange[0]} onChange={(e) => handlePriceChange(0, Number(e.target.value))} defaultValue="0" className="w-16 h-8 border border-gray-300 rounded-md"/>
                    <input type="range" min="0" step="10" max={priceRange[1]} value={priceRange[0]} onChange={(e) => handlePriceChange(0, Number(e.target.value))} defaultValue="1000" className="range range-info range-xs flex-1" />
                </div>
                
                {/* Min Price Slider */}
                <div className="flex items-center gap-3 mb-2">
                    <input type="number" min={priceRange[0]} max="1000" value={priceRange[1]} onChange={(e) => handlePriceChange(1, e.target.value)} defaultValue="1000" className="w-16 h-8 border border-gray-300 rounded-md"/>
                    <input type="range" min={priceRange[0]} max="1000" step="10" value={priceRange[1]} onChange={(e) => handlePriceChange(1, e.target.value)} defaultValue="1000" className="range range-info range-xs flex-1" />
                </div>
                
                <div className="flex justify-between text-gray-500 text-xs mt-3">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                </div>
            </div>

            {/* 2. Category */}
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col justify-start">
                <h3 className="text-gray-600 text-sm font-medium mb-3">Category</h3>
                <select value={selectedCategory} onChange={(e) => handleCategoriesChange(e.target.value)} className="select select-bordered w-full h-10 min-h-0 focus:outline-none text-gray-700">
                    <option value="">All Categories</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                        {category.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* 3. Search */}
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col justify-start">
                <h3 className="text-gray-600 text-sm font-medium mb-3">Search</h3>
                <input 
                    type="text" 
                    value={searchQuary}
                    onChange={(e) => handleSearchQuary(e.target.value)}
                    placeholder="Search books..." 
                    className="input input-bordered w-full h-10 min-h-0 focus:outline-none placeholder:text-gray-400 text-gray-700" 
                />
            </div>

            {/* 4. Sort By Price */}
            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col justify-start">
                <h3 className="text-gray-600 text-sm font-medium mb-3">Sort By Price</h3>
                <select value={sortOrder} onChange={(e) => handleOrderChange(e.target.value)} className="select select-bordered w-full h-10 min-h-0 focus:outline-none text-gray-700">
                    <option value="price">Price: Low to High</option>
                    <option value="-price">Price: High to Low</option>
                    <option value="-created_at">Newest Arrivals</option>
                </select>
            </div>
            
        </div>
    );
};

export default FilterSection;