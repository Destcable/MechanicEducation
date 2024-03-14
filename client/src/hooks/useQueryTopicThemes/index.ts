import { useQuery } from "@apollo/client";
import { GET_TOPIC_THEMES } from "./gql/queryTopicThemes";
import { useMemo } from "react";

const useQueryTopicThemes = (topicId: string) => { 
    const {data, loading} = useQuery(GET_TOPIC_THEMES, { 
        variables: { topicId }
    });

    const memoizedData = useMemo(() => ({
        data: data ? data.data : null, 
        loading
    }), [data, loading, topicId]);

    return memoizedData;
};

export default useQueryTopicThemes;