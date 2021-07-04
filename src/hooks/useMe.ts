import { gql, useQuery } from "@apollo/client";
import { MeQuery } from "@gql-types/MeQuery";

const ME_QUERY = gql`
    query MeQuery {
        me {
            id
            email
            role
            profileImg
        }
    }
`;

const useMe = () => {
    return useQuery<MeQuery>(ME_QUERY)
}

export default useMe;