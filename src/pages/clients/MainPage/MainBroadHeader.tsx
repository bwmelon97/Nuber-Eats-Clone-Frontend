import React from "react";
import { MAIN_PAGE_IMG_1, MAIN_PAGE_IMG_2 } from "@constants";

export const MainBroadHeader = () => {
    return (
        <div className='bg-gray-800 h-80 w-full px-5 xl:px-10 flex flex-col items-center justify-evenly lg:flex-row lg:justify-between py-10'  >
            <div className=''>
                <h1 className='text-white text-5xl font-medium mb-4'>
                    Crave it? Get it.
                </h1>
                <h4 className='text-white text-lg '>
                    All the food in the world is here 😉
                </h4>
            </div>

            <form>
                <input 
                    type='Search'
                    className='outline-none py-3 px-5 rounded-full w-96'
                    placeholder='Search for a favorite restaurant, cuisine, or dish.'
                />
            </form>

            <div className='flex'>
                <div 
                    className='relative hidden h-60 w-80 bg-cover bg-center mr-4 xl:block cursor-pointer' 
                    style={{backgroundImage: `url(${MAIN_PAGE_IMG_1})`}}
                >
                    <div className='h-full w-full bg-black opacity-10' />
                    <span className='absolute right-4 bottom-4 text-white font-bold text-xl'>
                        Go to Sushi (❁´◡`❁)
                    </span>
                </div>
                <div 
                    className='relative hidden h-60 w-80 bg-cover bg-center 2xl:block cursor-pointer' 
                    style={{backgroundImage: `url(${MAIN_PAGE_IMG_2})`}}
                >
                    <div className='h-full w-full bg-black opacity-30' />
                    <span className='absolute right-4 bottom-4 text-white font-bold text-xl'>
                        Go to Desserts (*/ω＼*)
                    </span>
                </div>
            </div>
        </div>
    )
}