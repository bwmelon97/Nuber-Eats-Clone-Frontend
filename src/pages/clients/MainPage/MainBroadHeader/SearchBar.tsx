import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

type FormProps = {
    query: string;
}

const SearchBar = () => {
    const { register, getValues, handleSubmit } = useForm<FormProps>();
    const history = useHistory();

    const onSubmit= () => {
        const { query } = getValues()
        if (query) {
            history.push({
                pathname: '/search',
                search: `q=${query}`
            })
        }
    }

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            className='lg:flex-auto mx-10 flex justify-center items-center' >
            <input 
                { ...register('query') }
                type='Search'
                className='outline-none py-3 px-5 rounded-full w-80 sm:w-96 lg:w-full lg:max-w-lg'
                placeholder='Search for a favorite restaurant, cuisine, or dish.'
            />
        </form>
    )
}

export default SearchBar