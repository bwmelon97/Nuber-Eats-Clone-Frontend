import { gql, useLazyQuery } from "@apollo/client";
import { RESTAURANT_FRAGMENT } from "@fragments";
import { SearchRestaurantsQuery, SearchRestaurantsQueryVariables } from "@gql-types/SearchRestaurantsQuery";
import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";


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

    const [ callQuery, { data, loading, error } ] = useLazyQuery<
        SearchRestaurantsQuery, 
        SearchRestaurantsQueryVariables
    >(SEARCH_RESTAURANTS_QUERY)

    const location = useLocation();
    const history = useHistory();

    useEffect(() => {
        const { search } = location
        const [ _, query ] = search.split('?q=')

        if( !query ) history.replace('/')
        callQuery({ variables: {
            input: {
                query, page: 1
            }
        }})
    }, [location, callQuery, history])

    return (
        <div>
            Search Page
        </div>
    )
}

export default SearchPage;