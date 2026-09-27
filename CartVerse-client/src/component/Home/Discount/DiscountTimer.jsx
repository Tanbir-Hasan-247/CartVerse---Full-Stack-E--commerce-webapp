import { useEffect, useState } from "react";
import { data } from "react-router";

const DiscountTimer = () => {
    const targetDate = new Date().getTime() + 1000 * 60 * 60 * 24 * 25;

    const getTimeRemaining = ()=>{
        const now = new Date().getTime();
        const diff = targetDate - now;

        return{
            days: Math.floor(diff / (1000 * 60 * 60 * 24 )),
            hours: Math.floor((diff/(1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        }
    }
    const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

    useEffect(()=>{
        const timer = setInterval(()=>{
            setTimeLeft(getTimeRemaining());
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    
    return (
        <div>
            <div className="flex gap-4 md:gap-6 justify-center md:justify-start">
                <div className="flex flex-col items-center justify-center bg-white shadow-xl rounded-2xl w-20 h-20 md:w-24 md:h-24 border border-gray-100">
                    <span className="text-3xl md:text-4xl font-bold text-gray-800">{timeLeft.days}</span>
                    <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">Days</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-white shadow-xl rounded-2xl w-20 h-20 md:w-24 md:h-24 border border-gray-100">
                    <span className="text-3xl md:text-4xl font-bold text-gray-800">{timeLeft.hours}</span>
                    <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">Hours</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-white shadow-xl rounded-2xl w-20 h-20 md:w-24 md:h-24 border border-gray-100">
                    <span className="text-3xl md:text-4xl font-bold text-gray-800">{timeLeft.minutes}</span>
                    <p className="text-xs md:text-sm font-semibold text-gray-500 uppercase tracking-wider mt-1">Mins</p>
                </div>
                <div className="flex flex-col items-center justify-center bg-white shadow-xl rounded-2xl w-20 h-20 md:w-24 md:h-24 border border-gray-100">
                    <span className="text-3xl md:text-4xl font-bold text-red-500">{timeLeft.seconds}</span>
                    <p className="text-xs md:text-sm font-semibold text-red-400 uppercase tracking-wider mt-1">Secs</p>
                </div>
            </div>
        </div>
    );
};

export default DiscountTimer;