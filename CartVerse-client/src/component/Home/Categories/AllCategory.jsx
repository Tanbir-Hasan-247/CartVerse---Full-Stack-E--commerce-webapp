import { useEffect, useState } from "react";
import apiClient from "../../../services/api-client";
import Category from "./Category";

const AllCategory = () => {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        apiClient
            .get("/categories/")
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                console.error("Failed to fetch categories", err);
                setCategories([]); // Reset to empty array on error
            })
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <div className="w-full mx-auto px-16 py-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center md:text-left">
                Shop by Category
            </h2>
            
            {isLoading ? (
                <div className="flex justify-center py-10">
                    <span className="loading loading-spinner text-primary loading-lg"></span>
                </div>
            ) : categories?.length === 0 ? (
                <div className="text-center text-gray-500 py-10">
                    No categories found.
                </div>
            ) : (
                <div className="grid grid-cols-1 md-grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Fix: Added optional chaining (?.) to prevent undefined map errors */}
                    {categories?.map((cat) => (
                        <Category key={cat.id || Math.random()} category={cat} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllCategory;