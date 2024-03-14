import { GET_USERS_MANY } from "@gql/Users/GET_USERS_MANY";
import queryClient from "../queryClient";

const getMany = (_: string, params: any) => { 
    return queryClient.query({
        query: GET_USERS_MANY,
        variables: { ids: params.ids }
    }).then(data => {
        return {data: data.data.data }
    });

};
export default getMany;