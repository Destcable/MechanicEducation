import { useQuery } from "@apollo/client";
import { GET_MANY_TASKS, GET_TASKS } from "./gql/queryTasks";

export const useQueryListThemeTasks = () => { 
    const { data, loading } = useQuery(GET_TASKS);

    return {
        data: data ? data.data : null, 
        loading
    };
};

export const useQueryManyThemeTasks = (themeId: number) => { 
    const { data, loading } = useQuery(GET_MANY_TASKS, { 
        variables: { themeId }
    });

    return { 
        data: data ? data.data : null,
        loading
    }
};