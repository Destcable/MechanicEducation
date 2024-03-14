import useQueryTopics from "../hooks/useQueryTopics";
import SelectTheme from "../ui/SelectTheme/SelectTheme";
import { Theme } from "../interfaces/theme";

interface ISelectThemeContainerProps { 
    onThemeSelected: (data: Theme) => void
}

const SelectThemeContainer = (props: ISelectThemeContainerProps) => { 
    const { data, loading } = useQueryTopics();

    if (loading) return <h1>Loading...</h1>

    if (data) return <SelectTheme themes={data} onClick={props.onThemeSelected} />
};

export default SelectThemeContainer;