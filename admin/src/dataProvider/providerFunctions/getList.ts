import { DocumentNode } from "graphql";
import queryClient from "../queryClient";
import parseData from "../parseData";
import { 
    getList as GET_TOPICS
} from "../gql/topic";
import { 
    getList as GET_THEMES
} from "../gql/theme";
import { 
    getList as GET_TASKS
} from "../gql/task";
import { 
    getList as GET_GROUPS
} from "../gql/group";

const getList = (resource: string, _: any) => {
    let query: DocumentNode;

    switch (resource) {
        case 'topic':
            query = GET_TOPICS; 
            break;
        case 'theme': 
            query = GET_THEMES;
            break;
        case 'task':
            query = GET_TASKS;
            break;
        case 'group':
            query = GET_GROUPS;
            break;
    }
    
    return queryClient.query({
        query: query,
        variables: {}
    }).then(data => ({ 
            data: data.data.data.map(parseData), 
            total: data.data.data.length 
        })
    );
};

export default getList;