import bgImg from "../../../assets/images/banner-image-bg-1.jpg";
import bgimg from "../../../assets/images/banner-image3.png";
import DiscountTimer from "./DiscountTimer";

const DiscountSection = () => {
    return (
        <section 
            className="relative w-full py-16 md:py-0 md:h-[650px] bg-cover bg-center flex items-center justify-center overflow-hidden" 
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 gap-10">
                
                {/* Left - Image (Removed order classes so it naturally stays on top in mobile) */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img 
                        className="max-w-[80%] md:max-w-full drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:-translate-y-3 transition-transform duration-700 ease-in-out" 
                        src={bgimg} 
                        alt="Discount Product" 
                    />
                </div>

                {/* Right - Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500">
                            30% Discount
                        </span>
                        <br /> On All Items. Hurry Up!!!
                    </h1>
                    
                    {/* Countdown Timer */}
                    <DiscountTimer/>

                    <button className="btn border-none bg-gradient-to-r from-red-500 to-pink-500 text-white px-10 py-3 md:py-4 rounded-full font-bold text-lg shadow-[0_10px_20px_rgba(239,68,68,0.3)] hover:scale-105 hover:shadow-[0_15px_25px_rgba(239,68,68,0.4)] transition-all duration-300">
                        Shop Now &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DiscountSection;