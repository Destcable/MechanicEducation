import useQueryTopics from "../hooks/useQueryTopics";
import SelectTopic from "../ui/SelectTopic/SelectTopic";
import { Topic } from "../interfaces/topic";

interface ISelectThemeContainerProps { 
    onTopicSelected: (data: Topic) => void
}

const SelectThemeContainer = (props: ISelectThemeContainerProps) => { 
    const { data, loading } = useQueryTopics();

    if (loading) return <h1>Loading...</h1>

    if (data) return <SelectTopic topics={data} onClick={props.onTopicSelected} />
};

export default SelectThemeContainer;