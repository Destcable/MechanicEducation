import { DELETE_USER } from "@gql/Users/DELETE_USER";
import queryClient from "../queryClient";
import { IDeleteOneParams } from "./interfaces";

const deleteOne = (resource: string, params: IDeleteOneParams) => { 
    return queryClient.mutate({ 
        mutation: DELETE_USER,
        variables: { id: params.id }
    })
        .then(data => { 
            return { 
                data: data?.data?.data,
                total: data?.data?.data.length
            }
        })
};

export default deleteOne; 