import React from "react";
import { gql, useQuery } from "@apollo/client";
import PaddingXRule from "@components/clients/PaddingXDiv";
import { RESTAURANT_FRAGMENT } from "@fragments";
import { GetRestaurantQeury, GetRestaurantQeuryVariables } from "@gql-types/GetRestaurantQeury";
import { useParams } from "react-router-dom";
import { RestaurantSubInfo } from "@components/clients/RestaurantsGridBox/RestaurantItem";

const GET_RESTAURANT_QUERY = gql`
    query GetRestaurantQeury ($input: GetRestaurantByIdInput!) {
        getRestaurantById(input: $input) {
            ok
            error
            restaurant {
                ...RestaurantFragment
            }
        }
    }
    ${RESTAURANT_FRAGMENT}
`;

type ParamsType = {
    id: string;
}

const RestaurantPage = () => {
    
    const { id } = useParams<ParamsType>();

    const { loading, data } = useQuery<
        GetRestaurantQeury, 
        GetRestaurantQeuryVariables
    > (GET_RESTAURANT_QUERY, {
        variables: {
            input: {
                restaurantId: +id
            }
        }
    })
    
    return (
        <>{ !loading && data?.getRestaurantById.restaurant ?
        
            <div>
                <PaddingXRule 
                    style={{ 
                        backgroundImage: `
                            linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 100%), 
                            url(${data.getRestaurantById.restaurant.coverImg})
                        ` }}
                    className='bg-red-400 pt-44 pb-14 bg-cover bg-center' 
                >
                    <h1 className='text-white text-4xl font-bold'>
                        {data.getRestaurantById.restaurant.name}
                    </h1>
                    <RestaurantSubInfo 
                        address={data.getRestaurantById.restaurant.address} 
                        category={data.getRestaurantById.restaurant.category}
                        forHeader
                    />
                </PaddingXRule>
                
            </div> :

            <div>
                loading...
            </div>
        
        }</>
    )
}

export default RestaurantPage;
