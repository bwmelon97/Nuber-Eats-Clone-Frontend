import React from "react";
import { useQuery } from "@apollo/client";
import { CategoryQuery } from "@gql-types/CategoryQuery";
import { CATEGORY_QUERY } from "./query";

export const CategoryListBox = () => {
    const { data } = useQuery<CategoryQuery>(CATEGORY_QUERY);

    return (
        <div className='px-5 mt-5 max-w-4xl mx-auto overflow-x-auto' >
            <div className='mb-3 flex justify-evenly min-w-max' >
                {data?.getAllCategories.categories?.map( (category, idx) => (
                    <div className='flex flex-col items-center rounded-2xl cursor-pointer' >
                        <div key={idx} 
                            className='h-14 w-14 rounded-full mx-2 bg-cover hover:bg-blue-100' 
                            style={{backgroundImage:`url(${category.coverImg})`}}
                        />
                        <span className='text-sm font-bold mt-2 pb-4' >
                            {category.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}