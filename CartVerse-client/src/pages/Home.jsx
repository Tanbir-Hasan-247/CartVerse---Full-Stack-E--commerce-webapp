import HeroCarousel from "../component/Home/Carousel/HeroCarousel";
import DiscountSection from "../component/Home/Discount/DiscountSection";
import Features from "../component/Features";
import AllCategory from "../component/Home/Categories/AllCategory";
import Product from "../component/Products/Product";

const Home = () => {
    return (
        <div>
            <HeroCarousel/>
            <Features/>
            <AllCategory/>
            <Product/>
            <DiscountSection/>
        </div>
    );
};

export default Home;