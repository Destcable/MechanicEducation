import queryClient from "../queryClient";
import { 
    getMany as GET_MANY_TOPIC
} from "../gql/topic";
import { 
    getMany as GET_MANY_THEME
} from "../gql/theme";

const getMany = (resource: string, params: any) => { 
    let query: any;

    switch (resource) {
        case 'topic':
            query = GET_MANY_TOPIC;
            break;
        case 'theme': 
            query = GET_MANY_THEME
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