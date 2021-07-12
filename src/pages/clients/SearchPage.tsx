import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { gql, useLazyQuery } from "@apollo/client";
import { RESTAURANT_FRAGMENT } from "@fragments";
import { SearchRestaurantsQuery, SearchRestaurantsQueryVariables } from "@gql-types/SearchRestaurantsQuery";
import { RestaurantsGridBox } from "./MainPage/RestaurantsGridBox";
import PaddingXRule from "@components/clients/PaddingXDiv";
import { Helmet } from "react-helmet-async";


const SEARCH_RESTAURANTS_QUERY = gql`
    query SearchRestaurantsQuery ($input: SearchRestaurantsInput!) {
        searchRestaurants(input: $input) {
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
`;

const SearchPage = () => {

    const [ callQuery, { data, loading } ] = useLazyQuery<
        SearchRestaurantsQuery, 
        SearchRestaurantsQueryVariables
    >(SEARCH_RESTAURANTS_QUERY)

    const location = useLocation();
    const history = useHistory();
    const { search } = location
    const decodedSearch = decodeURI(search)
    const [ _, query ] = decodedSearch.split('?q=')


    useEffect(() => {
        if( !query ) history.replace('/')
        callQuery({ variables: {
            input: {
                query, page: 1
            }
        }})
    }, [location, callQuery, history])

    return (
        <>
            <Helmet>
                <title> "{query}" results | Nuber-Eats </title>
            </Helmet>
        {
            
            !loading && data ?
            
            <div>
                <PaddingXRule className='mb-8'>
                    <h1 className='text-3xl font-bold' > "{query}" results </h1>
                </PaddingXRule>

                <RestaurantsGridBox restaurants={data.searchRestaurants.restaurants} />
            </div> :
            
            <div>
                Loading...
            </div>
        }</>
    )
}

export default SearchPage;