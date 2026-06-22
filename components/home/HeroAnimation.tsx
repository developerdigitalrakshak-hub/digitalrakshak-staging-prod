
'use client';
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function HeroAnimation() {
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        fetch("/animation.json")
            .then((response) => response.json())
            .then(setAnimationData)
            .catch((error) => {
                console.error("Failed to load Lottie animation:", error);
            });
    }, []);

    if (!animationData) {
        return null;
    }

    return (
        <>
            <div className="w-full bg-[url('/bg-hero.svg')] bg-cover bg-center bg-no-repeat">
                <div className="relative w-full max-w-[70%] mx-auto overflow-hidden" style={{ aspectRatio: '1920/650' }}>
                    <div className="absolute w-full" style={{ top: '-25%' }}>
                        <button className="absolute w-[13%] top-[59.6%] left-[44.5%] bg-gradient-to-r from-blue-600/60 to-purple-600/60 hover:from-blue-600/80 hover:to-purple-600/80 border border-white/20 text-white px-4 py-2.5 rounded-lg hover:shadow-xl z-10 transition-all flex items-center justify-center gap-2 group whitespace-nowrap text-sm font-semibold tracking-wider">
                            <span>BOOK A DEMO</span>
                            <svg
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                        <Lottie animationData={animationData} loop={true} />
                    </div>
                </div>
            </div>
        </>
    );
} 