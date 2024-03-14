import useQueryTopics from "../hooks/useQueryTopics";
import SelectTopic from "../ui/SelectTopic/SelectTopic";
import { Theme } from "../interfaces/theme";

interface ISelectThemeContainerProps { 
    onThemeSelected: (data: Theme) => void
}

const SelectThemeContainer = (props: ISelectThemeContainerProps) => { 
    const { data, loading } = useQueryTopics();

    if (loading) return <h1>Loading...</h1>

    if (data) return <SelectTopic topic={data} onClick={props.onThemeSelected} />
};

export default SelectThemeContainer;