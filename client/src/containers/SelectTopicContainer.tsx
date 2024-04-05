import useQueryTopics from "../hooks/useQueryTopics";
import SelectTopic from "../ui/SelectTopic/SelectTopic";

interface ISelectThemeContainerProps { 
    onTopicSelected: (data: any) => void
}

const SelectTopicContainer = (props: ISelectThemeContainerProps) => { 
    const { data, loading } = useQueryTopics();

    if (loading) return <h1>Loading...</h1>

    if (data) return <SelectTopic topics={data} onClick={props.onTopicSelected} />
};

export default SelectTopicContainer;