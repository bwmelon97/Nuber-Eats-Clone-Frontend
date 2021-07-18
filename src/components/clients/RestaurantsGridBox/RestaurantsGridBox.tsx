import React from "react";
import { useHistory } from "react-router-dom";
import PaddingXRule from "@components/PaddingXDiv";
import { OverWriteClassNameProps } from "@components/OverWriteProps";
import { RestaurantFragment } from "@gql-types/RestaurantFragment";
import { _404_IMG } from "@constants";
import RestaurantItem from "./RestaurantItem";

type RestaurantGridBoxProps = OverWriteClassNameProps & {
    restaurants: RestaurantFragment[] | null;
}

const RestaurantsGridBox: React.FC<RestaurantGridBoxProps> = ({ className, restaurants }) => {

    const history = useHistory();
    const goHome = () => history.push('/')

    return (
        <PaddingXRule className='mt-3 pb-32' >
            { restaurants && restaurants.length > 0 ?
            <div
                className={`${className && className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 `}
            >
                { restaurants.map( (restaurant) => <RestaurantItem restaurant={restaurant} />) }
            </div> :

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
            </div> }
        </PaddingXRule>
    )
}

export default RestaurantsGridBox;