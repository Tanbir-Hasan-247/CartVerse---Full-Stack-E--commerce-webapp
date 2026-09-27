import { useEffect, useRef, useState } from "react"
import apiClient from "../../services/api-client";

const useFetchProduct = (currentPage) => {
      const [products, setProducts] = useState([]);
      const [loading, setLoading] = useState(false);
      const [totalPages, setTotalPages] = useState(0);
      
      const maxItemInPage = useRef(0);

    useEffect(()=>{
        const fetchProducts = async () => {
        setLoading(true);

        try {
        const response = await apiClient.get(`/products/?page=${currentPage}`);
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
    }, [currentPage]);

    return {products, loading, totalPages};
};

export default useFetchProduct;