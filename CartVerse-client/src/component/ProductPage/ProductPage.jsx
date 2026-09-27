import AllProduct from "./AllProduct";
import Pagination from "./Pagination";
import useFetchProduct from "../Hooks/useFetchProducts";
import { useState } from "react";

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {products, loading, totalPages} = useFetchProduct(currentPage);

  //   const fetchProducts = () => {
  //     setLoading(true);

  //     apiClient
  //       .get(`/products/?page=${currentPage}`)
  //       .then((res) => {
  //         setProducts(res.data.results);

  //         // শুধু প্রথমবার page size ধরবে
  //         if (maxItemInPage.current === 0) {
  //           maxItemInPage.current = res.data.results.length;

  //           setTotalPages(
  //             Math.ceil(
  //               res.data.count / maxItemInPage.current
  //             )
  //           );
  //         }
  //       })
  //       .catch((error) => console.log(error))
  //       .finally(() => setLoading(false));
  //   };
  

  return (
    <div>
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
