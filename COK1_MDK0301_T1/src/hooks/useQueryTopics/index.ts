import { useQuery } from "@apollo/client";
import { GET_TOPICS } from "./gql/queryTopics"

const useQueryTopics = () => { 
    const {data, loading} = useQuery(GET_TOPICS);

    return {
        data: data ? data.data : null, 
        loading
    };
};

export default useQueryTopics;