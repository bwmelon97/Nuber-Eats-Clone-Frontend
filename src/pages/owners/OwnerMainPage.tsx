import React from "react";
import { gql, useQuery } from "@apollo/client";
import { RESTAURANT_FRAGMENT } from "@fragments";
import { GetMyRestaurants, GetMyRestaurantsVariables } from "@gql-types/GetMyRestaurants";
import PaddingXRule from "@components/PaddingXDiv";
import RestaurantsGridBox from "@components/clients/RestaurantsGridBox";

const GET_MY_RESTAURANTS_QUERY = gql`
    query GetMyRestaurants ($input: GetMyRestaurantsInput!) {
        getMyRestaurants(input: $input) {
            ok
            error
            totalCounts
            totalPages
            restaurants { 
                ...RestaurantFragment
            }
        }
    }
    ${RESTAURANT_FRAGMENT}
`

const OwnerMainPage = () => {

    const { loading, data } = useQuery<
        GetMyRestaurants, 
        GetMyRestaurantsVariables
    >(GET_MY_RESTAURANTS_QUERY, {
        variables: {
            input: {
                page: 1
            }
        }
    })

    return (
        <div>
            <PaddingXRule className='mb-6'>
                <h1 className='text-3xl font-bold'> My Restaurants </h1>
            </PaddingXRule>
            
        {
            loading || !data ?
            
            <PaddingXRule className='text-2xl mt-6'>
                loading...
            </PaddingXRule>:

            <div>
                <RestaurantsGridBox restaurants={data.getMyRestaurants.restaurants} parentPage='owner-main' />
            </div>
        }</div>
    )
}

export default OwnerMainPage;