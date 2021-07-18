import React from "react";
import PaddingXRule from "@components/PaddingXDiv";
import { OverWriteClassNameProps } from "@components/OverWriteProps";
import { RestaurantFragment } from "@gql-types/RestaurantFragment";
import RestaurantItem from "./RestaurantItem";
import OfSearchPage from "./NoItemComponents/OfSearchPage";
import OfOwnerPage from "./NoItemComponents/OfOwnerPage";

type RestaurantGridBoxProps = OverWriteClassNameProps & {
    restaurants: RestaurantFragment[] | null;
    parentPage: 'client-main' | 'search' | 'owner-main'
}

const RestaurantsGridBox: React.FC<RestaurantGridBoxProps> = ({ className, restaurants, parentPage }) => {

    let NoItemComponent: React.FC;
    switch(parentPage) {
        case "client-main":
        case "search":
            NoItemComponent = () => <OfSearchPage />;
            break;

        case "owner-main":
            NoItemComponent = () => <OfOwnerPage />
            break;
    }

    return (
        <PaddingXRule className='mt-3 pb-32' >
            { restaurants && restaurants.length > 0 ?
            <div
                className={`${className && className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-10 `}
            >
                { restaurants.map( (restaurant) => <RestaurantItem restaurant={restaurant} />) }
            </div> :

            <NoItemComponent />}
        </PaddingXRule>
    )
}

export default RestaurantsGridBox;