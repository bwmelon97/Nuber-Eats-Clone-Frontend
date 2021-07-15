import React from "react";
import { OverWriteClassNameProps } from "@components/OverWriteClassNameProps";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import useSearchQuery from "@pages/clients/SearchPage/useSearchQuery";

type FormProps = {
    query: string;
}

type SearchBarProps = OverWriteClassNameProps & {
    rounded?: boolean;
    isSearchPage?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ className, rounded, isSearchPage }) => {
    const { register, getValues, handleSubmit } = useForm<FormProps>();
    const history = useHistory();
    const { query } = getValues()
    const [ callQuery ] = useSearchQuery({query})

    const onSubmit= () => {
        const { query } = getValues()
        if (query) {
            if (isSearchPage) {
                callQuery()
            }

            history.push({
                pathname: '/search',
                search: `q=${query}`
            })
        }
    }

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            className={`${isSearchPage ? 'md:flex-auto' : 'lg:flex-auto'} mx-10 flex justify-center items-center`} >
            <input 
                { ...register('query') }
                type='Search'
                className={`
                    ${className && className} 
                    ${rounded && `rounded-full` } 
                    outline-none py-3 px-5
                `}
                placeholder='Search for a favorite restaurant, cuisine, or dish.'
            />
        </form>
    )
}

export default SearchBar