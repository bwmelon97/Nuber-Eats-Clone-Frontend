import React from "react";
import { MAIN_PAGE_IMG_1, MAIN_PAGE_IMG_2 } from "@constants";
import SearchBar from "./SearchBar";


const TitleBox = () => (
    <div>
        <h1 className='text-4xl text-white sm:text-5xl font-medium mb-4'>
            Crave it? Get it.
        </h1>
        <h4 className='text-base text-white sm:text-lg '>
            All the food in the world is here 😉
        </h4>
    </div>
)

const MainBroadHeader = () => {
    return (
        <div className='bg-gray-800 h-80 w-full px-5 xl:px-10 flex flex-col items-center justify-evenly lg:flex-row lg:justify-between py-10'  >
            <TitleBox />
            <SearchBar />
            <div className='flex'>
                <div 
                    className='relative hidden h-60 w-80 bg-cover bg-center mr-4 xl:block cursor-pointer group' 
                    style={{backgroundImage: `url(${MAIN_PAGE_IMG_1})`}}
                >
                    <div className='h-full w-full bg-black group-hover:opacity-5 opacity-20 transition-opacity duration-300' />
                    <span className='absolute right-4 bottom-4 text-white font-bold text-xl'>
                        Go to Sushi (❁´◡`❁)
                    </span>
                </div>
                <div 
                    className='relative hidden h-60 w-80 bg-cover bg-center 2xl:block cursor-pointer group' 
                    style={{backgroundImage: `url(${MAIN_PAGE_IMG_2})`}}
                >
                    <div className='h-full w-full bg-black group-hover:opacity-5 opacity-20 transition-opacity duration-300' />
                    <span className='absolute right-4 bottom-4 text-white font-bold text-xl'>
                        Go to Desserts (*/ω＼*)
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MainBroadHeader;