import { SlArrowRight } from "react-icons/sl";

const Category = ({ category }) => {
    // Dynamically get the first letter of the category name for the icon
    const firstLetter = category?.name ? category.name.charAt(0).toUpperCase() : "C";

    return (
        <div className="group h-full flex flex-col justify-between cursor-pointer border border-transparent p-6 rounded-2xl bg-gradient-to-r from-pink-100 to-blue-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300">
            
            <div>
                {/* Top Section */}
                <div className="flex justify-between items-start mb-5">
                    <div className="bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-sm">
                        <p>{firstLetter}</p>
                    </div>
                    <span className="bg-white/60 backdrop-blur-md text-gray-700 rounded-full text-xs font-bold flex items-center px-3 py-1.5 shadow-sm">
                        {category?.product_count || 0} Items
                    </span>
                </div>
                
                {/* Middle Section */}
                <div className="mb-5">
                    <h3 className="font-bold text-xl text-gray-900 mb-1">{category?.name}</h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{category?.description}</p>
                </div>
            </div>
            
            {/* Bottom Section (Pushed to bottom using flex-col and justify-between on parent) */}
            <div className="flex items-center gap-2 text-sm font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 mt-auto">
                <p>Explore</p>
                <SlArrowRight className="transform group-hover:translate-x-1.5 transition-transform duration-300" size={12} />
            </div>
            
        </div>
    );
};

export default Category;