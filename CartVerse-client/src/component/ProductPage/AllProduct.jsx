import ProductItem from "../Products/ProductItem";

const AllProduct = ({ products, loading }) => {
  if (loading)
    return (
      <div className="flex justify-center items-center py-20 min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );

  return (
    <div className="m-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default AllProduct;
