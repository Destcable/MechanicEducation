import { DocumentNode } from "graphql";
import queryClient from "../queryClient";
import { 
    create as TOPIC_CREATE 
} from "../gql/topic";
import { ICreateParams } from "./interfaces";

const create = (resource: string, params: ICreateParams) => { 
    let mutation: DocumentNode;
    
    switch (resource) { 
        case 'topic':
            mutation = TOPIC_CREATE;
            break;
    }

    return queryClient
    .mutate({ 
        mutation: mutation,
        variables: params.data,
    })
    .then(data => { 
        return { data: data.data.data, id: data.data.data.id } } );

};

export default create;