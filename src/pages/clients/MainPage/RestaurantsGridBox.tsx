import React from "react";
import { Link } from "react-router-dom";
import PaddingXRule from "@components/clients/PaddingXDiv";
import { OverWriteClassNameProps } from "@components/OverWriteClassNameProps";
import { RestaurantFragment } from "@gql-types/RestaurantFragment";

type RestaurantGridBoxProps = OverWriteClassNameProps & {
    restaurants: RestaurantFragment[] | null;
}

export const RestaurantsGridBox: React.FC<RestaurantGridBoxProps> = ({ className, restaurants }) => {

    return (
        <PaddingXRule className='mt-3 pb-32' >
            <div
                className={`${className && className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 `}
            >{ restaurants?.map( (restaurant, idx) => 
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
                </div>
            )}</div>
        </PaddingXRule>
    )
}