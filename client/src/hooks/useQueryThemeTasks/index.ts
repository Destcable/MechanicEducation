import { useQuery } from "@apollo/client";
import { GET_MANY_TASKS, GET_TASKS } from "./gql/queryTasks";

export const useQueryListThemeTasks = (themeId: number) => { 
    const { data, loading } = useQuery(GET_TASKS, { 
        variables: { themeId }
    });

    return {
        data: data ? data.data : null, 
        loading
    };
};

export const useQueryManyThemeTasks = (ids: [number]) => { 
    const { data, loading } = useQuery(GET_MANY_TASKS, { 
        variables: { ids }
    });

    return { 
        data: data ? data.data : null,
        loading
    }
};