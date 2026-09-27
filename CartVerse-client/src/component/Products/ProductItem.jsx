import temp from "../../assets/default_product.jpg"
const ProductItem = ({ product }) => {
    // Extracting the first image from the array, or using a fallback placeholder
    const imageUrl = product?.images?.length > 0 
        ? product.images[0].image 
        : temp;

    return (
        <div className="p-2 h-full">
            <div className="card bg-base-100 w-full h-full shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                
                {/* Product Image & Badge */}
                <figure className="px-4 pt-4 relative h-56 w-full">
                    <img
                        src={imageUrl}
                        alt={product?.name || "Product Image"}
                        className="rounded-xl object-cover w-full h-full" 
                    />
                    {product?.stock > 0 ? (
                        <div className="absolute top-6 right-6 badge badge-success text-white font-semibold border-none shadow-sm">
                            In Stock ({product.stock})
                        </div>
                    ) : (
                        <div className="absolute top-6 right-6 badge badge-error text-white font-semibold border-none shadow-sm">
                            Out of Stock
                        </div>
                    )}
                </figure>

                {/* Card Content */}
                <div className="card-body px-5 pb-6 pt-4 text-left flex flex-col justify-between">
                    <div>
                        <h2 className="card-title text-gray-800 text-xl font-bold truncate block">
                            {product?.name || "Unknown Product"}
                        </h2>
                        <p className="text-gray-500 text-sm line-clamp-2 mt-1 mb-4">
                            {product?.description || "No description available."}
                        </p>
                    </div>
                    
                    {/* Price & Action Button */}
                    <div className="flex items-center justify-between mt-auto pt-2">
                        <div className="flex flex-col">
                            <span className="text-2xl font-extrabold text-primary">
                                ${product?.price}
                            </span>
                            {product?.price_with_tax && (
                                <span className="text-xs text-gray-400">
                                    w/ tax: ${product?.price_with_tax}
                                </span>
                            )}
                        </div>
                        <button className="btn btn-primary rounded-full px-6 hover:scale-105 transition-transform duration-200">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;