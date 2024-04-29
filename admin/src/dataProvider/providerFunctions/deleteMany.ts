import queryClient from "../queryClient";
import parseData from "../parseData";
import { 
    deleteMany as DELETE_MANY_USER
} from "../gql/user";

const deleteMany = (resource: string, params: any) => {
    let mutation: any;

    switch (resource) {
        case 'user':
            mutation = DELETE_MANY_USER;
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

// import { DELETE_USER } from "@gql/Users/DELETE_USER";
// import queryClient from "../queryClient";
// import { IDeleteManyParams } from "./interfaces";

// const deleteMany = async (resource: string, params: IDeleteManyParams) => {
//     const deletedData: object[] = [];

//     params.ids.forEach( async (id: number) => { 

//         const test = await queryClient.mutate({
//             mutation: DELETE_USER,
//             variables: { id }
//         });

//         deletedData.push(test.data.deleteUser)

//     })

//     return {
//         data: deletedData,
//         total: deletedData.length
//     }
// };

// export default deleteMany;