import { useQuery } from "@apollo/client";
import { GET_TASKS } from "./gql/queryTasks";

const useQueryThemeTasks = () => { 
    const {data, loading} = useQuery(GET_TASKS);

    return {
        data: data ? data.data : null, 
        loading
    };
};

export default useQueryThemeTasks;