import { useEffect, useRef, useState } from "react"
import apiClient from "../../services/api-client";

const useFetchProduct = (currentPage, priceRange, selectedCategories, searchQuary, sortOrder) => {
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [totalPages, setTotalPages] = useState(0);
      
      const maxItemInPage = useRef(0);

    useEffect(()=>{
        const fetchProducts = async () => {
        setLoading(true);
        
        const url = `/products/?price__lt=${priceRange[1]}&price__gt=${priceRange[0]}&page=${currentPage}&category_id=${selectedCategories}&search=${searchQuary}&ordering=${sortOrder}`;
        try {
        const response = await apiClient.get(url);
        const data = response.data;
        setProducts(data.results);
        if (maxItemInPage.current === 0) {
            maxItemInPage.current = data.results.length;

            setTotalPages(Math.ceil(data.count / maxItemInPage.current));
        }
        } catch (error) {
        console.log(error);
        } finally {
        setLoading(false);
        }
    };
    fetchProducts();
    }, [currentPage, priceRange, selectedCategories, searchQuary, sortOrder]);

    return {products, loading, totalPages};
};

export default useFetchProduct;