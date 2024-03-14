import { DocumentNode } from "graphql";
import { GET_USER } from "@gql/Users/GET_USER";
import queryClient from "../queryClient";
import { IGetOneParams } from "./interfaces";
import { GET_LINK } from "@gql/Links/GET_LINK";
import parseData from "../parseData";

const getOne = (resource: string, params: IGetOneParams) => {
    let query: DocumentNode;

    switch (resource) {
        case 'users':
            query = GET_USER;        
            break;
        case 'links':
            query = GET_LINK;
            break;
    }
    
    return queryClient
        .query({ 
            query: query,
            variables: { id: parseInt(params.id) }
        })
        .then(data => { 
            
            return { data: parseData(data.data.data) }
        })
};

export default getOne;