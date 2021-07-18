import { _404_IMG } from "@constants";
import React from "react";
import { useHistory } from "react-router-dom";

const OfSearchPage = () => {

    const history = useHistory();
    const goHome = () => history.push('/')

    return (
        <div className='flex justify-center w-full' >
            <div className='max-w-md w-full pt-24 px-4 flex flex-col items-center' >
                {/* 언젠가 이미지 키우고 만다 ㅡ.ㅡ */}
                <img 
                    onClick={goHome}
                    src={_404_IMG} alt='404_img'
                    className='mb-6 cursor-pointer' 
                />
                <h1 className='text-3xl font-semibold'> 찾으시는 결과물이 없어요 😭 </h1>
                <h3 className='mt-3' > 다른 먹거리를 찾아보는 건 어떨까요? </h3>
                <button 
                    onClick={goHome}
                    className='mt-6 bg-black text-white w-full py-3 font-semibold text-lg hover:opacity-80' 
                > 
                    Find Food
                </button>
            </div>
        </div>
    )
}

export default OfSearchPage;