import { gql, QueryTuple, useLazyQuery } from "@apollo/client";
import { RESTAURANT_FRAGMENT } from "@fragments";
import { SearchRestaurantsQuery, SearchRestaurantsQueryVariables } from "@gql-types/SearchRestaurantsQuery";

export const SEARCH_RESTAURANTS_QUERY = gql`
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

type UseSearchQueryInput = {
    query: string;
    page?: number;
}

const useSearchQuery = (
    input?: UseSearchQueryInput
): QueryTuple<
    SearchRestaurantsQuery, 
    SearchRestaurantsQueryVariables
> => {

    const [ callQuery, queryResult ] = useLazyQuery<
        SearchRestaurantsQuery, 
        SearchRestaurantsQueryVariables
    >(SEARCH_RESTAURANTS_QUERY)

    if (!input) 
        return [callQuery, queryResult]
    
    const callQueryWithInput = () => callQuery({ variables: {
        input: {
            query: input.query, 
            page: 1
        }
    }})
    return [callQueryWithInput, queryResult]
}

export default useSearchQuery