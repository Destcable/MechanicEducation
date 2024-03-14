import { DocumentNode } from "graphql";
import { UPDATE_USER } from "@gql/Users/UPDATE_USER";
import queryClient from "../queryClient";
import splitString from "../splitString";
import { UPDATE_LINK } from "@gql/Links/UPDATE_LINK";
import parseData from "../parseData";
import buildReferenceArrayInput from "../buildReferenceArrayInput";
import formatInput from "../formatInput";

const update = (resource: string, params: any) => {

    switch (resource) {
        case 'users':
            const [firstName, secondName] = splitString(params.data.name);
            
            return queryClient.mutate({
                mutation: UPDATE_USER,
                variables: {
                    firstName,
                    secondName,
                    id: params.id,
                    email: params.data.email,
                    password: params.data.password
                }
            }).then(data =>   ({ data: data.data.data }));

        case 'links':
            const { id, data, previousData } = params;
            const where = { id };
            const input = { 
                ...formatInput(data),
                observedBy: buildReferenceArrayInput(data.observedByIds, previousData.observedByIds)
            };

            return queryClient.mutate({
                mutation: UPDATE_LINK,
                variables: {
                    where,
                    input,
                }
            }).then(data =>   ({ data: parseData(data.data.data) }));
    }


};

export default update;