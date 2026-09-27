import { useEffect, useState } from "react";
import axios from "axios";
import ProductItem from "./ProductItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import apiClient from "../../services/api-client";


const Product = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        apiClient
            .get("/products/")
            .then((res) => {
                setProducts(res.data.results);
            })
            .catch((err) => console.error("Failed to fetch products", err))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <section className="sm:px-1 md:px-16 lg:px-16 bg-gray-50 mx-auto py-6">
            <div className="w-full mx-auto">
                {/* Section Header */}
                <div className="mb-10 flex flex-row items-end justify-between border-b pb-4 border-gray-200">
                    <div>
                        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">Featured Products</h2>
                        <div className="w-16 md:w-24 h-1.5 bg-primary mt-2 rounded-full"></div>
                    </div>
                    
                    <button className="btn btn-outline btn-primary rounded-full px-6 hover:scale-105 transition-transform duration-200">
                        View All <span className="hidden sm:inline">Products</span> &rarr;
                    </button>
                </div>

                {/* Conditional Rendering Logic */}
                {isLoading ? (
                    <div className="flex justify-center items-center py-20 min-h-[300px]">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                    </div>
                ) : products.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 min-h-[300px] text-center">
                        <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
                        </svg>
                        <h3 className="text-2xl font-bold text-gray-500">No Products Available</h3>
                        <p className="text-gray-400 mt-2">We couldn't find any items at the moment.</p>
                    </div>
                ) : (
                    <Swiper
                        spaceBetween={20}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        navigation={true}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 }
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper !pb-14 px-2"
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id} className="py-4 h-auto">
                                <ProductItem product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </section>
    );
};

export default Product;