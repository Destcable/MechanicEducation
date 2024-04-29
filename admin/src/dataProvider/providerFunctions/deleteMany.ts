import queryClient from "../queryClient";
import parseData from "../parseData";
import { 
    deleteMany as DELETE_MANY_GROUP
} from "../gql/group";
import { 
    deleteMany as DELETE_MANY_USER
} from "../gql/user";
import { 
    deleteMany as DELETE_MANY_TASK
} from "../gql/task";

const deleteMany = (resource: string, params: any) => {
    let mutation: any;

    switch (resource) {
        case 'group':
            mutation = DELETE_MANY_GROUP;
            break;
        case 'user':
            mutation = DELETE_MANY_USER;
            break;
        case 'task':
            mutation = DELETE_MANY_TASK;
            break;
    }
    
    return queryClient.mutate({
        mutation: mutation,
        variables: { ids: params.ids}
    }).then(data => ({ 
            data: data.data.data.map(parseData), 
            total: data.data.data.length 
        })
    );
};

export default deleteMany;