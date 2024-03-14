import { DELETE_USER } from "@gql/Users/DELETE_USER";
import queryClient from "../queryClient";
import { IDeleteManyParams } from "./interfaces";

const deleteMany = async (resource: string, params: IDeleteManyParams) => {
    const deletedData: object[] = [];

    params.ids.forEach( async (id: number) => { 

        const test = await queryClient.mutate({
            mutation: DELETE_USER,
            variables: { id }
        });

        deletedData.push(test.data.deleteUser)

    })

    return {
        data: deletedData,
        total: deletedData.length
    }
};

export default deleteMany;