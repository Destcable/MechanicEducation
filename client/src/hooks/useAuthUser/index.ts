import { useQuery } from "@apollo/client";
import { AUTH_USER } from "./gql/query";

export const useAuthUser = (login: string, password: string) => { 
    const { data, loading } = useQuery(AUTH_USER, { 
        variables: { login, password }
    });

    return {
        data: data ? data.data : null, 
        loading
    };
};