import { DocumentNode } from "graphql";
import queryClient from "../queryClient";
import parseData from "../parseData";
import { 
    getList as GET_TOPICS
} from "../gql/topic";

const getList = (resource: string, _: any) => {
    let query: DocumentNode;

    switch (resource) {
        case 'topic':
            query = GET_TOPICS; 
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