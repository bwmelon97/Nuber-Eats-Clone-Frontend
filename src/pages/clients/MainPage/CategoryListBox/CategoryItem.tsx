import React from "react";
import { CategoryQuery_getAllCategories_categories } from "@gql-types/CategoryQuery";
import { Link } from "react-router-dom";

type CategoryItemProps = {
    category: CategoryQuery_getAllCategories_categories
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {

    return (
        <Link 
            to={`/search?q=${category.slug}`} 
            key={category.id} 
            className='flex flex-col items-center rounded-2xl cursor-pointer group' >
            <div 
                className='h-16 w-16 rounded-full mx-2 bg-cover group-hover:bg-gray-200' 
                style={{backgroundImage:`url(${category.coverImg})`}}
            />
            <span className='text-sm font-bold mt-2' >
                {category.name}
            </span>
        </Link>
    )
}

export default CategoryItem;