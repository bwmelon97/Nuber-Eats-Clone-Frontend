import React from "react";
import { useQuery } from "@apollo/client";
import { CategoryQuery } from "@gql-types/CategoryQuery";
import { CATEGORY_QUERY } from "../query";
import CategoryItem from "./CategoryItem";


const CategoryListBox = () => {
    const { data } = useQuery<CategoryQuery>(CATEGORY_QUERY);

    return (
        <div className='px-5 mt-5 max-w-5xl mx-auto overflow-x-auto' >
            <div className='mb-3 flex justify-evenly min-w-max' >
                {data?.getAllCategories.categories?.map( (category) => (
                    <CategoryItem category={category} />
                ))}
            </div>
        </div>
    )
}

export default CategoryListBox