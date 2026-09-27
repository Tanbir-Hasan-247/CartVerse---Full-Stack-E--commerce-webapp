import bgImg from "../../../assets/images/banner-image-bg.jpg"

const CarouselSlide = ({title, subtitle, image}) => {
    return (
        <section className="w-full h-[650px] bg-cover bg-center flex justify-center" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="max-w-6xl flex flex-col md:flex-row items-center justify-around px-8">
                {/* left */}
                <div className="w-1/2 text-center md:text-left">
                    <h1 className="text-2xl md:text-5xl font-bold text-gray-900">{title}</h1>
                    <p className="text-gray-600 my-4">{subtitle}</p>
                    <button className="btn btn-secondary px-6 py-3 rounded-xl">Shop Product</button>
                </div>

                {/* right */}
                <div className="max-w-full md:w-1/2 flex justify-center">
                    <img className="max-w-full drop-shadow-2xl" src={image} alt="" />
                </div>
            </div>
        </section>
    );
};

export default CarouselSlide;