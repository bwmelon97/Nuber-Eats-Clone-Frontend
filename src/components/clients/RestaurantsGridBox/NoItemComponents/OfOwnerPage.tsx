import React from "react";
import { useHistory } from "react-router-dom";
import NoRestaurantImage from "@styles/undraw_Chef_cu0r.svg";

const OfOwnerPage = () => {

    const history = useHistory();
    const goCreateRestaurantPage = () => history.push('/create-restaurant')
    
    return (
        <div className='flex justify-center w-full' >
            <div className='max-w-md w-full pt-20 px-4 flex flex-col items-center' >
                {/* 언젠가 이미지 키우고 만다 ㅡ.ㅡ */}
                <img 
                    onClick={goCreateRestaurantPage}
                    src={NoRestaurantImage} alt='no_restaurant_img'
                    className='mb-6 cursor-pointer w-72' 
                />
                <h1 className='text-3xl font-semibold'> 소유한 식당이 없습니다 </h1>
                <h3 className='mt-3 text-lg' > 새로운 식당을 만들어주세요 😃 </h3>
                <button 
                    onClick={goCreateRestaurantPage}
                    className='mt-6 bg-black text-white w-full py-3 font-medium text-lg hover:opacity-80' 
                > 
                    Create Restaurant
                </button>
            </div>
        </div>
    )
}

export default OfOwnerPage;