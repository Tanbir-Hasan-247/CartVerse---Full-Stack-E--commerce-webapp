import AllProduct from "./AllProduct";
import Pagination from "./Pagination";
import useFetchProduct from "../Hooks/useFetchProducts";
import { useState } from "react";
import FilterSection from "./FilterProduct";
import useFetchCategories from "../Hooks/useFetchCategories";

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState("");
  const [searchQuary, setSearchQuary] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const {products, loading, totalPages} = useFetchProduct(currentPage, priceRange, selectedCategories, searchQuary, sortOrder);
  const categories = useFetchCategories();

  const handlePriceChange=(index, value)=>{
    setPriceRange((prev)=>{
      const newRange = [...prev];
      newRange[index] = value;
      return newRange;
    });

    setCurrentPage(1);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold">Shop Our Products</h1>
      <FilterSection
        priceRange={priceRange}
        handlePriceChange={handlePriceChange}
        categories = {categories}
        selectedCategory={selectedCategories}
        handleCategoriesChange = {setSelectedCategories}
        searchQuary = {searchQuary}
        handleSearchQuary = {setSearchQuary}
        sortOrder = {sortOrder}
        handleOrderChange = {setSortOrder}
      />
      <AllProduct products={products} loading={loading} />

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductPage;
