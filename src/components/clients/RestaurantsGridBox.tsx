import React from "react";
import { Link, useHistory } from "react-router-dom";
import PaddingXRule from "@components/clients/PaddingXDiv";
import { OverWriteClassNameProps } from "@components/OverWriteProps";
import { RestaurantFragment } from "@gql-types/RestaurantFragment";
import { _404_IMG } from "@constants";

type RestaurantGridBoxProps = OverWriteClassNameProps & {
    restaurants: RestaurantFragment[] | null;
}

export const RestaurantsGridBox: React.FC<RestaurantGridBoxProps> = ({ className, restaurants }) => {

    const history = useHistory();
    const goHome = () => history.push('/')

    return (
        <PaddingXRule className='mt-3 pb-32' >
            { restaurants && restaurants.length > 0 ?
            <div
                className={`${className && className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 `}
            >
                { restaurants.map( (restaurant, idx) => 
                <div key={idx}>
                    <Link to={`/restaurant/${restaurant.id}`}>
                        <div className='h-64 bg-cover bg-center mb-4' style={{backgroundImage: `url(${restaurant.coverImg})`}} >
                            <div className='h-full w-full bg-black opacity-10 hover:opacity-0 transition-opacity duration-300' />    
                        </div>
                    </Link>
                    
                    <Link
                        to={`/restaurant/${restaurant.id}`}
                        className='text-xl font-bold hover:text-lime-600' 
                    > {restaurant.name} 
                    </Link>
                    

                    <div className='flex items-center mt-1'>
                        <div className='h-5 w-5 bg-cover bg-center mr-1' style={{backgroundImage: `url(${restaurant.category.coverImg})`}} />
                        <span className='font-bold' > {restaurant.category.name} </span> 
                        <span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
                        <span className='text-gray-500'>
                            {restaurant.address} 
                        </span> 
                    </div>
                </div>) }
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