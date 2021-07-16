import { RestaurantFragment, RestaurantFragment_category } from "@gql-types/RestaurantFragment";
import React from "react";
import { Link } from "react-router-dom";

type RestaurantItemProps = {
    restaurant: RestaurantFragment;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
    const { id, name, coverImg, address, category } = restaurant;

    return (
        <div key={id}>
            <Link to={`/restaurant/${id}`}>
                <div className='h-64 bg-cover bg-center mb-4' style={{backgroundImage: `url(${coverImg})`}} >
                    <div className='h-full w-full bg-black opacity-10 hover:opacity-0 transition-opacity duration-300' />    
                </div>
            </Link>
            
            <Link
                to={`/restaurant/${id}`}
                className='text-xl font-bold hover:text-lime-600' 
            > {name} 
            </Link>
            
            <RestaurantSubInfo address={address} category={category} />
        </div>
    )
}

type RestaurantSubInfoProps = {
    address: string;
    category: RestaurantFragment_category;
    forHeader?: boolean;
}

export const RestaurantSubInfo: React.FC<RestaurantSubInfoProps> = ({ address, category, forHeader }) => {
    return (
        <div className={`${forHeader ? 'mt-2 text-lg text-white' : 'mt-1' } flex items-center`}>
            <div className={`${forHeader ? 'h-10 w-10' : 'h-5 w-5' } bg-cover bg-center mr-1`} style={{backgroundImage: `url(${category.coverImg})`}} />
            <span className={`font-bold`} > {category.name} </span> 
            <span className={``} >&nbsp;&nbsp;·&nbsp;&nbsp;</span>
            <span className={`${!forHeader && 'text-gray-500'}`}>
                {address} 
            </span> 
        </div>
    )
}

export default RestaurantItem