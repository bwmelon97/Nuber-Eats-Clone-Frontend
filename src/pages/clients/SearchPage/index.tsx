import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import PaddingXRule from "@components/clients/PaddingXDiv";
import { Helmet } from "react-helmet-async";
import SearchBar from "../../../components/clients/SearchBar";
import { RestaurantsGridBox } from "../../../components/clients/RestaurantsGridBox";
import useSearchQuery from "./useSearchQuery";


const SearchPage = () => {

    const [ callQuery, { data, loading } ] = useSearchQuery()

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
    }, [location, callQuery, history, query])

    return (
        <>
            <Helmet>
                <title> "{query}" results | Nuber-Eats </title>
            </Helmet>
        
            <div>
                <PaddingXRule className='mb-4 lg:mb-8 flex flex-col-reverse md:flex-row'>
                    <h1 className='self-center md:self-auto mt-4 md:mt-0 text-2xl md:text-3xl font-bold' > "{query}" results </h1>
                    <SearchBar 
                        className='
                            mt-2 md:mt-0 w-full lg:w-8/12 max-w-3xl
                            ring-1 ring-gray-200 focus:ring-1 focus:ring-black transition duration-300' 
                        isSearchPage
                    />

                </PaddingXRule>
                { !loading && data ?
                    <RestaurantsGridBox restaurants={data.searchRestaurants.restaurants} /> :
            
                    <PaddingXRule>
                        <div className='text-2xl' >
                            Loading...
                        </div>
                    </PaddingXRule> 
                }
            </div> 
        </>
    )
}

export default SearchPage;