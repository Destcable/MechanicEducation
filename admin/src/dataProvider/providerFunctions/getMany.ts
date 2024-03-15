import queryClient from "../queryClient";
import { DocumentNode } from "graphql";
import { 
    getMany as GET_MANY_TOPIC
} from "../gql/topic";

const getMany = (resource: string, params: any) => { 
    let query: DocumentNode;

    switch (resource) {
        case 'topic':
            query = GET_MANY_TOPIC;
            break;
    }
    return queryClient.query({
        query: query,
        variables: { ids: params.ids }
    }).then(data => {
        return {data: data.data.data }
    });

};
export default getMany;