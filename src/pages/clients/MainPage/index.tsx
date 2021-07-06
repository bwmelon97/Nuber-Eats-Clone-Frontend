import React from "react";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@apollo/client";
import { MainPageQuery, MainPageQueryVariables } from "@gql-types/MainPageQuery";
import { MAIN_PAGE_QUERY } from "./query";
import { MainBroadHeader } from "./MainBroadHeader";


const MainPage = () => {
    const { loading, data } = useQuery<
        MainPageQuery, 
        MainPageQueryVariables
    >(MAIN_PAGE_QUERY, {
        variables: {
            input: {
                page: 1
            }
        }
    })

    return (
        <>
            <Helmet>
                <title> Main | Nuber-eats </title>
            </Helmet>
            <div>
                <MainBroadHeader />



            </div>
        </>
    )
}

export default MainPage