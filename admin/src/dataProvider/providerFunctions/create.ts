import { DocumentNode } from "graphql";
import queryClient from "../queryClient";
import { ICreateParams } from "./interfaces";
import { 
    create as TOPIC_CREATE 
} from "../gql/topic";
import { 
    create as THEME_CREATE 
} from "../gql/theme";
import { 
    create as TASK_CREATE 
} from "../gql/task";

const create = (resource: string, params: ICreateParams) => { 
    let mutation: DocumentNode;
    
    switch (resource) { 
        case 'topic':
            mutation = TOPIC_CREATE;
            break;
        case 'theme':
            mutation = THEME_CREATE;
            break;
        case 'task':
            mutation = TASK_CREATE;
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